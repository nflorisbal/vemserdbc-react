import moment from 'moment';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { crud } from '../../api/Api';

import './CreatePerson.css';

const CreatePerson = () => {

  const createNewPerson = async (values) => {
    try {
      values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
      await crud.post('/pessoa', values);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div className='container'>
      <Link to='/people'>Voltar</Link>
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