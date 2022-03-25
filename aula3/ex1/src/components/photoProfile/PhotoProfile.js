import style from './PhotoProfile.module.css';

const PhotoProfile = ({avatar}) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt='a man looking into the void'/>
    </>
  );
}

export default PhotoProfile;