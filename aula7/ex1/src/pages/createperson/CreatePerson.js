import moment from 'moment';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { PeopleContext } from '../../contexts/PeopleContext';
import { crud } from '../../api/Api';

import './CreatePerson.css';

const CreatePerson = () => {
  const { update, setUpdate } = useContext(PeopleContext)

  const createNewPerson = async (values) => {
    try {
      values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
      await crud.post('/pessoa', values);
    } catch (error) {
      console.log(error);
    }
  }

  const updatePerson = async () => {
    console.log('fazer a logica');
  }


  useEffect(() => {
    if(update) updatePerson();
  },[]);
  return(
    <div className='container'>
      <Link className='link' to='/people'>Voltar</Link>
      <h1>Cadastro de Pessoa</h1>
      <Formik
        initialValues={{
          cpf:'',
          dataNascimento:'',
          email:'',
          nome:'',
      }}
      onSubmit={async (values) => {
        createNewPerson(values);
      }}
      >
        <Form className='formPerson'>
          <label htmlFor='nome'>Nome</label>
          <Field name='nome'/>
          <label htmlFor='cpf'>CPF</label>
          <Field name='cpf'/>
          <label htmlFor='dataNascimento'>Data de nascimento</label>
          <Field name='dataNascimento'/>
          <label htmlFor='email'>E-mail</label>
          <Field name='email'/>
          <button type='submit'>Cadastrar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePerson;