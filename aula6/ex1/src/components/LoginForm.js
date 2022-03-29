import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AuthContext } from '../context/Auth';

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  return(
    <div>
      <Formik 
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(values) => {
          login({values});
        }}>

        <Form>
          <label htmlFor='usuario'>Usuário</label>
          <Field name='usuario' placeholder='Digite seu usuário' />
          <label htmlFor='senha'>Password</label>
          <Field name='senha' placeholder='Digite sua senha' />
          <button type='submit'>Logar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;