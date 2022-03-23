import PageTitle from '../pagetitle/PageTitle'
import Input from '../input/Input';
import Label from '../label/Label';
import Select from '../select/Select';
import TextArea from '../textarea/TextArea';
import style from './Form.module.css'

const Form = () => {
  return (
    <section className={style.container}>
      <PageTitle pageTitle='Contact Us'/>
      <form className={style.form}>
        <Label forInput='username' textLabel='Username:' />
        <Input type='text' name='username' placeholder='Type your username' />
        <Label forInput='email' textLabel='E-mail:' />
        <Input type='text' name='email' placeholder='Type your email' />
        <Label forInput='questions' textLabel='What do you need?' />
        <Select name='questions' id='questions'/>
        <Label forInput='msg' textLabel='Your message:' />
        <TextArea />
        <Input type='submit'/>
      </form>
  </section>
  );
}

export default Form;