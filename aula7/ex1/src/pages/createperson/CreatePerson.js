import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { PeopleContext } from '../../contexts/PeopleContext';
import { crud } from '../../api/Api';

import './CreatePerson.css';

const CreatePerson = () => {
  const { update, setUpdate } = useContext(PeopleContext)
  const [ updatePerson, setUpdatePerson ] = useState({});

  const createNewPerson = async (values) => {
    try {
      values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
      await crud.post('/pessoa', values);
    } catch (error) {
      console.log(error);
    }
  }

  const getUpdatePerson = async () => {
    const pathname = window.location.pathname;
    const id = pathname.split('/');
    const idPessoa = id[id.length - 1];
    const { data } = await crud.get(`/pessoa/${idPessoa}?idPessoa=${idPessoa}`);
    setUpdatePerson(data);
  }

  const putUpdatePerson = async (values) => {
    const pathname = window.location.pathname;
    const id = pathname.split('/');
    const idPessoa = id[id.length - 1];
    values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');
    await crud.put(`/pessoa/${idPessoa}`, values);

    setUpdate(false);
  }

  useEffect(() => {
    if(update) getUpdatePerson();
  },[]);
  
  return(
    <div className='container'>
      <div><Link className='link' to='/people'>Voltar</Link></div>
      <h1>Cadastro de Pessoa</h1>
      <Formik
        initialValues={update ? ({
          cpf: updatePerson.cpf,
          dataNascimento: updatePerson.dataNascimento 
            = moment(updatePerson.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY'),
          email: updatePerson.email,
          nome: updatePerson.nome,
        }) : ({
          cpf: '',
          dataNascimento: '',
          email: '',
          nome: '',
      })}
      enableReinitialize={true}
      onSubmit={async (values) => {
        update 
          ? putUpdatePerson(values)
          : createNewPerson(values);
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