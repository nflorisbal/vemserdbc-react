import IFrameVideo from '../iframevideo/IFrameVideo';
import PageTitle from '../pagetitle/PageTitle';
import SectionSubtitle from '../sectionsubtitle/SectionSubtitle';
import SectionText from '../sectiontext/SectionText';
import SectionTitle from '../sectiontitle/SectionTitle';
import style from './FirstPage.module.css'

const FirstPage = () => {
  return (
    <>
      <section className={style.container}>
        <PageTitle pageTitle='The Witch Queen Expansion' />
        <IFrameVideo />
      </section>

      <section className={style.container}>
        <section className={style.leftSection}>
          <SectionTitle title='the game' />
          <SectionSubtitle subtitle='definitive action mmo' />
          <SectionText text="Join millions of players, create your Guardian, and start collecting unique weapons and armor tocustomize your look and playstyle. Embark on challenging co-op missions and a variety of competitive
          PvP modes. Experience Destiny 2's evolving story with friends or explore the stars as a fireteam of
          one." />
        </section>
        <hr />
        <section className={style.rightSection}>
          <SectionTitle title='weapons and gear' />
          <SectionSubtitle subtitle='your arsenal awaits' />
          <SectionText text="Thousands of weapons, millions of options. You decide which stats are important and which skills you love to use. Discover new gear combinations and define your own personal style. The hunt for the perfect arsenal starts now." />
        </section>
      </section>
    </>
  );
}

export default FirstPage;