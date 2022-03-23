import style from './Input.module.css'

const Input = ({type, name, placeholder, action}) => {
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
        placeholder={placeholder}
        onChange={(e) => action(e.target.value)}
        />
    );
  }
}

export default Input;