import { Field, Form, Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import ViaCepApi from '../apis/ViaCepApi'


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
      getAddress();
    }
  }

  const getAddress = async () => {
    try {
      // const {data} = await
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
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
      <h1>Endereços</h1>
      <Formik 
        initialValues={{
          cep: '',
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
          ddd: '',
          telefone: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        >        
        <Form>
          <label htmlFor='cep'>CEP</label>
          <Field name='cep' />
          <label htmlFor='logradouro'>Logradouro</label>
          <Field name='logradouro' />
          <label htmlFor='complemento'>Complemento</label>
          <Field name='complemento' />
          <label htmlFor='bairro'>Bairro</label>
          <Field name='bairro' />
          <label htmlFor='localidade'>Cidade</label>
          <Field name='localidade' />
          <label htmlFor='uf'>UF</label>
          <Field name='uf' />
          <label htmlFor='ddd'>DDD</label>
          <Field name='ddd' />
          <label htmlFor='telefone'>Telefone</label>
          <Field name='telefone' />
          <button type='submit'>Adicionar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Address;