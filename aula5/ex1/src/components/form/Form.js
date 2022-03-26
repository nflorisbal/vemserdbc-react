import { useContext } from 'react';
import { WorkerContext } from '../../contexts/Worker';
import style from './Form.module.css';

const Form = () => {
  const { name, 
          setName, 
          email, 
          setEmail, 
          job, 
          setJob,
          workersList,
          setWorkersList,
          addWorker
        } = useContext(WorkerContext);

  return (
    <form className={style.form} onSubmit={addWorker}>
      <label htmlFor='name'>Nome:</label>
      <input type='text' name='name' placeholder='Digite seu nome' 
      onChange={(event) => setName(event.target.value)}/>
      <label htmlFor='email'>E-mail:</label>
      <input type='text' name='email' placeholder='Digite seu email' 
      onChange={(event) => setEmail(event.target.value)}/>
      <label htmlFor='job'>Profissão:</label>
      <input type='text' name='job' placeholder='Digite sua profissão'
      onChange={(event) => setJob(event.target.value)}/>
      <input type='submit' value='adicionar'/>
    </form>
  );
}

export default Form;