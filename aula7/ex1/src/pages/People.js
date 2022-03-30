import moment from 'moment';
import { useContext, useEffect } from 'react';
import Api from '../apis/Api';
import { AuthContext } from '../contexts/Auth';


const People = () => {
  const { setLogged, logged, haveToken, goTo, people, getPeople } = useContext(AuthContext);

  const setup = () => {
    if(!haveToken()) {
      goTo('/');
      setLogged(false);
    } else {
      Api.defaults.headers.common['Authorization'] = haveToken();
      setLogged(true);
      getPeople();
    }
  }

  const maskCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  useEffect(() => {
    setup();
  },[]);

  return(
    <div className='container'>
      <h1>Cadastros</h1>
      {people.map(person => 
        <div key={person.idPessoa}>
          <hr/>
          <p>{person.nome}</p>
          <p>{person.email}</p>
          <p>{moment(person.dataNascimento).format('DD/MM/YYYY')}</p>
          <p>{maskCpf(person.cpf)}</p>
        </div>
      )}
    </div>
  );
}

export default People;