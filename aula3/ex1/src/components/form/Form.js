import { useState } from 'react';
import style from './Form.module.css';

const Form = () => {

  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Msg: ${msg}`);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <section className={style.container}>
      <form className={style.form} onSubmit={RegisterUser}>
        <label htmlFor='name' value='Nome:' />
        <input type='text' name='name' placeholder='Type your username' />
        <label htmlFor='email' value='E-mail:' />
        <input type='text' name='email' placeholder='Type your email'  />
        <label htmlFor='msg' value='Your message:' />
        <textarea />
        <input type='submit' />
      </form>
    </section>
  );
}

export default Form;