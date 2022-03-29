import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { AuthContext } from '../context/Auth';

const LoginForm = () => {
  const { login } = useContext(AuthContext);

  return(
    <div>
      <Formik 
        initialValues={{
          senha: '',
          usuario: '',
        }}
        onSubmit={values => {
          login({values});
        }}>

        <Form>
          <label htmlFor='usuario'>Usuário</label>
          <Field id='usuario' name='usuario' placeholder='Digite seu usuário' />
          <label htmlFor='senha'>Password</label>
          <Field id='senha' name='senha' placeholder='Digite sua senha' />
          <button type='submit'>Logar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;