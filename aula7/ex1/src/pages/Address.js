import { Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';


const Address = () => {
  const { setLogged, haveToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] =  useState(false);
  const goTo = useNavigate();

  const setup = () => {
    if(!haveToken()) {
      setLogged(false);
      goTo('/');
    } else {
      setLogged(true);
    }
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
    <Formik >

    </Formik>
    </div>
  );
}

export default Address;