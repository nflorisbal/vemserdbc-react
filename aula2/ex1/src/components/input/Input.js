import style from './Input.module.css'

const Input = ({type, name, placeholder}) => {
  if(type === 'submit') {
    return (<input
      className={`${style.button} ${style.input}`}
      type={type} />);
  } else {
    return (
      <input
        className={style.input} 
        type={type}
        name={name}
        placeholder={placeholder}/>
    );
  }
}

export default Input;