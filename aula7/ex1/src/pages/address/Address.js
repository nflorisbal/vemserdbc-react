import { Field, Form, Formik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { viaCep } from '../../api/Api';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

import './Address.css';


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
      getAddress(91225190);
    }
  }

  const getAddress = async (cep) => {
    try {
      const {data} = await viaCep.get(`/${cep}/json`)
      console.log(data);
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
        <Form className='formAddress'>
          <label htmlFor='cep'>CEP</label>
          <Field name='cep' placeholder='00000-000'/>
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