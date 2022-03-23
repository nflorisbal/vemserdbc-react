import IFrameVideo from '../iframevideo/IFrameVideo';
import PageTitle from '../pagetitle/PageTitle';
import style from './FirstPage.module.css'

const FirstPage = () => {
  return (
    <>
      <section className={style.container}>
        <PageTitle pageTitle='The Witch Queen Expansion' />
        <IFrameVideo />
      </section>
      
      <section className={style.container}>

      </section>
      
      <section className={style.container}>

      </section>
    </>
  );
}

export default FirstPage;