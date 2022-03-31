import errorImg from '../../images/error.png';

import style from './Error.module.css';

const Error = () => {
  return(
    <div className={style.errorImg}>
      <img className={style.img} src={errorImg} alt='error icon'/>
    </div>
  );
}

export default Error;