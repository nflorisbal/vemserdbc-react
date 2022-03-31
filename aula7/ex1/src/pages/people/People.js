import moment from 'moment';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { PeopleContext } from '../../contexts/PeopleContext';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import { crud } from '../../api/Api';

import './People.css'

const People = () => {
  const { setLogged, haveToken } = useContext(AuthContext);
  const { getPeople, people, loading, error } = useContext(PeopleContext);

  const goTo = useNavigate();

  const setup = () => {
    if(!haveToken()) {
      setLogged(false);
      goTo('/');
    } else {
      crud.defaults.headers.common['Authorization'] = haveToken();
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

  if (loading) {
    return(<Loading />);
  }

  if (error) {
    return(<Error />);
  }

  return(
    <div className='container'>
      <h1>Lista de Pessoas</h1>
      <Link className='link' to='/create-person'>Novo Cadastro</Link>
      <div className='containerCard'>   
        {people.map(person => 
          <div key={person.idPessoa} className='card'>
            <p><strong>{person.nome.toUpperCase()}</strong></p>
            <p>{person.email}</p>
            <p>{moment(person.dataNascimento).format('DD/MM/YYYY')}</p>
            <p>{maskCpf(person.cpf)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default People;