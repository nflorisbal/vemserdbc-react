import { createContext, useContext, useState } from 'react';
import { ValidateContext } from './Validate';

export const WorkerContext = createContext();

let id = 1;

const WorkerProvider = ({ children }) => {
  const [workersList, setWorkersList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [idEdit, setIdEdit] = useState(0);

  const { isNameValid,
          isEmailValid,
          isJobValid } = useContext(ValidateContext);

  const addWorker = () => {
    (isNameValid(name) &&  isEmailValid(email) && isJobValid(job)) 
      ? setWorkersList([...workersList, { id, name, email, job }])
      : alert('Algum campo inválido.');
    id++;
  }
  
  const removeWorker = (id) => {
    setWorkersList(
      workersList.filter(worker => worker.id !== id)
    );
  }

  const editWorker = (worker) => {
    document.getElementById('inputName').value = worker.name;
    document.getElementById('inputEmail').value = worker.email;
    document.getElementById('inputJob').value = worker.job;
    setIdEdit(worker.id);
    setName(worker.name);
    setEmail(worker.email);
    setJob(worker.job);
  }

  const updateWorker = () => {
    if(isNameValid(name) &&  isEmailValid(email) && isJobValid(job)) {
      let editedWorker = workersList.map(worker => worker.id === idEdit 
        ? { id: idEdit, name: name, email: email, job: job } : worker);

      setWorkersList(editedWorker);
      
    } else {
      alert('Algum campo inválido.');
    }
  }


  return(
    <WorkerContext.Provider value={
        { id,
          name, setName, 
          email, setEmail, 
          job, setJob, 
          workersList, setWorkersList, 
          addWorker, editWorker, removeWorker, updateWorker }
      }>
      { children }
    </WorkerContext.Provider>
  );
}

export default WorkerProvider;