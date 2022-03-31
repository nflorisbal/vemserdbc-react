import loadingImg from '../../images/loading.png';

import style from './Loading.module.css';

const Loading = () => {
  return(
    <div className={style.loadingImg} >
      <img className={style.img} src={loadingImg} alt='loading icon'/>
    </div>
  );
}

export default Loading;