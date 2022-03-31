import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import Api from '../apis/Api';

const People = () => {
  const { setLogged, haveToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] =  useState(false);
  const [people, setPeople] = useState([]);
  const goTo = useNavigate();

  const setup = () => {
    if(!haveToken()) {
      setLogged(false);
      goTo('/');
    } else {
      Api.defaults.headers.common['Authorization'] = haveToken();
      setLogged(true);
      getPeople();
    }
  }
  
  const getPeople = async () => {
    try {
      const {data} = await Api.get('/pessoa');
      setPeople(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
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
    <h1>Cadastros de Pessoas</h1>
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