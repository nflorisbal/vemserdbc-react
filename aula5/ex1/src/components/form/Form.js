import { useContext } from 'react';
import { WorkerContext } from '../../contexts/Worker';
import style from './Form.module.css';

const Form = () => {
  const { setName, 
          setEmail, 
          setJob,
          addWorker,
          updateWorker,
          workersList
        } = useContext(WorkerContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addWorker();
    clearInputs();
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    updateWorker();
    clearInputs();
  }
  

  const clearInputs = () => {
    setName('');
    setEmail('');
    setJob('');
    document.getElementById('inputName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputJob').value = '';
  }

  const printArray = (event) => {
    event.preventDefault();
    console.log(workersList);
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
      <div>
        <button type='submit' onClick={ (event) => handleSubmit(event) }>Adicionar</button>
        <button onClick={(event) => handleUpdate(event)}>Atualizar</button>
      </div>
      {/* <input id='inputId' type='text' value={id} /> */}
      <button onClick={(event) => printArray(event)}>status</button>
    </form>

  );
}

export default Form;