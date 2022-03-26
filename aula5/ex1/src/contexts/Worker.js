import { createContext, useState } from 'react';

export const WorkerContext = createContext();

const WorkerProvider = ({children}) => {
  const [workersList, setWorkersList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');

  return(
    <WorkerContext.Provider value={
        {name, setName, email, setEmail, job, setJob, workersList, setWorkersList}
      }>
      { children }
    </WorkerContext.Provider>
  );
}

export default WorkerProvider;