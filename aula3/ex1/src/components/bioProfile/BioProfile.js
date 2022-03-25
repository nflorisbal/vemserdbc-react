import Typewriter from 'typewriter-effect';
import style from './BioProfile.module.css';

const BioProfile = ({profile}) => {
  return (
    <div className={style.typewriterText}>
      <p className=''>Olá! Tudo bem?</p>
      <h1 className=''>Sou o {profile.name}</h1>
      <Typewriter
        options={{
          strings: profile.bio.split('.'),
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20
        }}
      />
    </div>
  );
}

export default BioProfile;