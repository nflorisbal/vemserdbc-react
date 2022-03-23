import { useState } from 'react';
import PageTitle from '../pagetitle/PageTitle';
import Input from '../input/Input';
import Label from '../label/Label';
import Select from '../select/Select';
import TextArea from '../textarea/TextArea';
import style from './Form.module.css';

const Form = () => {

  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`E-mail: ${email}`);
    console.log(`Msg: ${msg}`);
    console.log('Message sent!');
  }

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <section className={style.container}>
      <PageTitle pageTitle='Contact Us' />
      <form className={style.form} onSubmit={RegisterUser}>
        <Label forInput='username' textLabel='Username:' />
        <Input type='text' name='username' placeholder='Type your username' action={setUsername} />
        <Label forInput='email' textLabel='E-mail:' />
        <Input type='text' name='email' placeholder='Type your email' action={setEmail} />
        <Label forInput='questions' textLabel='What do you need?' />
        <Select name='questions' id='questions' />
        <Label forInput='msg' textLabel='Your message:' />
        <TextArea action={setMsg} />
        <Input type='submit' />
      </form>
    </section>
  );
}

export default Form;