import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
  const [error, setError] = useState(false);
  const goTo = useNavigate();

  const addressSchema = Yup.object().shape({
    cep: Yup.string().required('Campo obrigatório.'),
    logradouro: Yup.string().required('Campo obrigatório.'),
    complemento: Yup.string(),
    bairro: Yup.string().required('Campo obrigatório.'),
    localidade: Yup.string().required('Campo obrigatório.'),
    uf: Yup.string().required('Campo obrigatório.'),
    ddd: Yup.string().required('Campo obrigatório.'),
    telefone: Yup.string().required('Campo obrigatório.'),
  });

  const getAddress = async (values) => {
    try {
      const { data } = await viaCep.get(`/${values.cep}/json`);
      values.logradouro = data.logradouro;
      values.bairro = data.bairro;
      values.localidade = data.localidade;
      values.logradouro = data.logradouro;
      values.uf = data.uf;
      values.ddd = data.ddd;
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  const setup = () => {
    if (!haveToken()) {
      setLogged(false);
      goTo('/');
    } else {
      setLogged(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    setup();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (<Loading />);
  }

  if (error) {
    return (<Error />);
  }

  return (
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
        validationSchema={addressSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <Form className='formAddress'>
            <div className='formAddressField'>
              <label htmlFor='cep' >CEP: </label>
              <Field name='cep' maxLength='9' placeholder='00000-000' />
              <button type='button' onClick={() => getAddress(props.values)} >Buscar CEP</button>
              <ErrorMessage component='span' name='cep' />
            </div>

            <div className='formAddressField'>
              <label htmlFor='logradouro'>Logradouro:</label>
              <Field name='logradouro' />
              <ErrorMessage className='errorMessage' component='span' name='logradouro' />
            </div >
            <div className='formAddressField'>
              <label htmlFor='complemento'>Complemento:</label>
              <Field name='complemento' />
            </div>
            <div className='formAddressField'>
              <label htmlFor='bairro'>Bairro:</label>
              <Field name='bairro' />
              <ErrorMessage className='errorMessage' component='span' name='bairro' />
            </div>
            <div className='formAddressField'>
              <label htmlFor='localidade'>Cidade:</label>
              <Field name='localidade' />
              <ErrorMessage className='errorMessage' component='span' name='localidade' />
            </div>
            <div className='formAddressField'>
              <label htmlFor='uf'>UF</label>
              <Field name='uf' maxLength='2' />
              <ErrorMessage className='errorMessage' component='span' name='uf' />
            </div>
            <div className='formAddressField'>
              <label htmlFor='ddd'>DDD:</label>
              <Field name='ddd' maxLength='2' />
              <ErrorMessage className='errorMessage' component='span' name='ddd' />
            </div>
            <div className='formAddressField'>
              <label htmlFor='telefone'>Telefone:</label>
              <Field name='telefone' maxLength='9' />
              <ErrorMessage className='errorMessage' component='span' name='telefone' />
            </div>
            <button type='submit'>Adicionar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Address;