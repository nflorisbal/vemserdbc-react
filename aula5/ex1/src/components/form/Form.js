import { useContext } from 'react';
import { WorkerContext } from '../../context/Worker';
import style from './Form.module.css';

let id = 1;

const Form = () => {
  const { name, 
          setName, 
          email, 
          setEmail, 
          job, 
          setJob,
          workersList,
          setWorkersList
        } = useContext(WorkerContext);

  const addWorker = (event) => {
    event.preventDefault();
    if(!name || !email || !job) return console.log('algum campo vazio');
    
    if(workersList.length === 0) {
      setWorkersList([{ id, name, email, job }]);
    } else {
      setWorkersList([...workersList, { id, name, email, job }]);
    }
    id++;
  }

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