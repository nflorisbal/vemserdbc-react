import style from './ErrorMsg.module.css';

const ErrorMsg = () => {
  return (
    <div className={style.error}>
      <p>Error found.</p>
    </div>
  );
}

export default ErrorMsg;