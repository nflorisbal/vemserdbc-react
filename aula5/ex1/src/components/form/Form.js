import { useContext } from 'react';
import { WorkerContext } from '../../contexts/Worker';
import style from './Form.module.css';

const Form = () => {
  const { setName, 
          setEmail, 
          setJob,
          addWorker
        } = useContext(WorkerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addWorker();
    clearInputs();
  }

  const clearInputs = () => {
    setName('');
    document.getElementById('inputName').value = '';
    setEmail('');
    document.getElementById('inputEmail').value = '';
    setJob('');
    document.getElementById('inputJob').value = '';
  }

  return (
    <form className={style.form} >
      <label htmlFor='name'>Nome:</label>
      <input id='inputName' type='text' name='name' placeholder='Digite seu nome' 
      onChange={(event) => setName(event.target.value)}/>
      <label htmlFor='email'>E-mail:</label>
      <input id='inputEmail' type='text' name='email' placeholder='Digite seu email' 
      onChange={(event) => setEmail(event.target.value)}/>
      <label htmlFor='job'>Profissão:</label>
      <input id='inputJob' type='text' name='job' placeholder='Digite sua profissão'
      onChange={(event) => setJob(event.target.value)}/>
      <button type='submit' onClick={ (event) => handleSubmit(event) }>Adicionar</button>
    </form>
  );
}

export default Form;