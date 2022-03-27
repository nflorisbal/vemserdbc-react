import { useContext } from 'react';
import { WorkerContext } from '../../contexts/Worker';

import style from './List.module.css';

const List = () => {
  const { workersList, 
          editWorker, 
          removeWorker } = useContext(WorkerContext);

  return (
    <>
      { workersList.map((worker) =>
        <div className={style.card} key={worker.id}>
          <p>Nome: {worker.name}</p>
          <p>E-mail: {worker.email}</p>
          <p>Profissão: {worker.job}</p>
          <button onClick={() => editWorker()}>Editar</button>
          <button onClick={() => removeWorker(worker.id)}>Remover</button>
        </div>
      )}
    </>
  );
}

export default List;