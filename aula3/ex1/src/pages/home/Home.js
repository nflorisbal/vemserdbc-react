import BioProfile from '../../components/bioProfile/BioProfile';
import PhotoProfile from '../../components/photoProfile/PhotoProfile';
import style from './Home.module.css';

const Home = ({profile}) => {
  return (
    <section className={style.contentHome}>
        <PhotoProfile avatar={profile.avatar_url} />
        <BioProfile profile={profile}/>
    </section>
  );
}

export default Home;