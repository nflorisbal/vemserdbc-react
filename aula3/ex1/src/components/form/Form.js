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
    <section className={style.contentForm}>
      <h1>No que posso lhe ajudar?</h1>
      <form className={style.form} onSubmit={RegisterUser}>
        <label htmlFor='name'>Nome:</label>
        <input type='text' name='name' placeholder='Digite seu nome' 
                onChange={(e) => setName(e.target.value)}/>
        <label htmlFor='email'>E-mail</label>
        <input type='text' name='email' placeholder='Digite seu e-mail' 
                onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor='msg'>Mensagem:</label>
        <textarea placeholder='Digite sua mensagem'onChange={(e) => setMsg(e.target.value)}/>
        <input type='submit' value='Enviar' className={style.submit} />
      </form>
    </section>
  );
}

export default Form;