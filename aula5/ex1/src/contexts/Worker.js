import { createContext, useContext, useState } from 'react';
import { ValidateContext } from './Validate';

export const WorkerContext = createContext();

let id = 1;

const WorkerProvider = ({ children }) => {
  const [workersList, setWorkersList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');

  const { isNameValid,
          isEmailValid,
          isJobValid } = useContext(ValidateContext);

  const addWorker = (event) => {
    event.preventDefault();
    
    (isNameValid(name) &&  isEmailValid(email) && isJobValid(job)) 
      ? setWorkersList([...workersList, { id, name, email, job }])
      : alert('Algum campo inválido.');
    
    id++;
  }
  
  const removeWorker = (id) => {
    console.log()
    setWorkersList(
      workersList.filter(worker => worker.id !== id)
    );
  }

  const editWorker = () => {
    console.log('editing...');
  }

  return(
    <WorkerContext.Provider value={
        { name, setName, 
          email, setEmail, 
          job, setJob, 
          workersList, setWorkersList, 
          addWorker, editWorker, removeWorker }
      }>
      { children }
    </WorkerContext.Provider>
  );
}

export default WorkerProvider;

