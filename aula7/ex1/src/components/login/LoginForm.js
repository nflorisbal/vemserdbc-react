import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AuthContext } from '../../contexts/AuthContext';

import style from './LoginForm.module.css';

const LoginForm = () => {
  const { login, logout, haveToken } = useContext(AuthContext)

  return(
    <div>
      {(!haveToken()) ? (
      <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(values) => {
          login({values});
        }}>
        <Form className={style.form}>
          <div className={style.inputs}>
            <label htmlFor='usuario'>Usuário</label>
            <Field name='usuario' placeholder='Digite seu usuário' />
          </div>
          <div className={style.inputs}>
            <label htmlFor='senha'>Senha</label>
            <Field name='senha' type='password' placeholder='Digite sua senha' />
          </div>
          <div className={style.inputs}>
            <button type='submit'>Logar</button>
          </div>
        </Form>
      </Formik>
      ) :  (
        <div className={style.inputs}>
          <button className={style.btnLogout} onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;