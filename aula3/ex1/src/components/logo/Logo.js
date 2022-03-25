import style from './Logo.module.css';

const Logo = ({data}) => {
  const titleLogo = `<${data}/>`;
  return (
    <>
      <h3 className={style.logo} to='/'>{titleLogo}</h3>
    </>
  );
}

export default Logo;