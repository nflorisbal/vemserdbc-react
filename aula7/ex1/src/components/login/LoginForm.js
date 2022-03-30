import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AuthContext } from '../../contexts/Auth';

import style from './LoginForm.module.css';

const LoginForm = () => {
  const { login } = useContext(AuthContext)

  return(
    <div>
      <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(values) => {
          console.log('teste');
        }}>
        <Form className={style.form}>
          <div className={style.inputs}>
            <label htmlFor='usuario'>Usuário</label>
            <Field name='usuario' placeholder='Digite seu usuário' />
          </div>
          <div className={style.inputs}>
            <label htmlFor='senha'>Senha</label>
            <Field name='senha' placeholder='Digite sua senha' />
          </div>
          <div>
            <button type='submit'>Logar</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;