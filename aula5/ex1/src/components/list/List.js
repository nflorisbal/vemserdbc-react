import { useContext } from 'react';
import { WorkerContext } from '../../context/Worker';

import style from './List.module.css';

const List = () => {
  const { workersList, setWorkersList } = useContext(WorkerContext);

  return (
    <>
      { workersList.map((worker) =>
        <div className={style.card} key={worker.id}>
          <p>Nome: {worker.name}</p>
          <p>E-mail: {worker.email}</p>
          <p>Profissão: {worker.job}</p>
        </div>
      )}
    </>
  );
}

export default List;