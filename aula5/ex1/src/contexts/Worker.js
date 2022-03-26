import { createContext, useState } from 'react';

export const WorkerContext = createContext();

let id = 1;

const WorkerProvider = ({children}) => {
  const [workersList, setWorkersList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');

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
  
  const updateWorker = () => {
    console.log('update...');
  }

  const removeWorker = (id) => {
    setWorkersList(
      workersList.filter(worker => worker.id !== id)
    );
  }

  return(
    <WorkerContext.Provider value={
        { name, setName, 
          email, setEmail, 
          job, setJob, 
          workersList, setWorkersList, 
          addWorker, updateWorker, removeWorker }
      }>
      { children }
    </WorkerContext.Provider>
  );
}

export default WorkerProvider;