import { useContext } from 'react';
import { WorkerContext } from '../../contexts/Worker';
import style from './Form.module.css';

const Form = () => {
  const { setName, 
          setEmail, 
          setJob,
          addWorker,
          updateWorker,
        } = useContext(WorkerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    (addWorker()) ? clearInputs() : alert('Algum campo inválido.');
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    (updateWorker()) ? clearInputs() : alert('Algum campo inválido.');
  }
  
  const clearInputs = () => {
    setName('');
    setEmail('');
    setJob('');
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
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
      <div className={style.buttons} >
        <button id='addButton'type='submit' onClick={ (event) => handleSubmit(event) }>Adicionar</button>
        <button id='updateButton' onClick={(event) => handleUpdate(event)}>Atualizar</button>
      </div>
    </form>

  );
}

export default Form;