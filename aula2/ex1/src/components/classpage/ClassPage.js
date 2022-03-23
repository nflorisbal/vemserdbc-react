import style from './ClassPage.module.css';
import PageTitle from '../pagetitle/PageTitle';

const ClassPage = () => {
  return (
    <section className={style.container}>
      <PageTitle pageTitle='Classes'/>
    </section>
  );
}

export default ClassPage;