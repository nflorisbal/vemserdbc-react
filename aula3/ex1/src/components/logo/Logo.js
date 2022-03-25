import style from './Logo.module.css';

const Logo = ({userLogin}) => {
  const titleLogo = `<${userLogin}/>`;
  return (
    <>
      <h3 className={style.logo} to='/'>{titleLogo}</h3>
    </>
  );
}

export default Logo;