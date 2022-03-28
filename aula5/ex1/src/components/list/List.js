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
          <p><strong>Nome:</strong> {worker.name}</p>
          <p><strong>E-mail:</strong> {worker.email}</p>
          <p><strong>Profissão:</strong> {worker.job}</p>
          <button onClick={() => editWorker(worker)}>Editar</button>
          <button onClick={() => removeWorker(worker.id)}>Remover</button>
        </div>
      )}
    </>
  );
}

export default List;