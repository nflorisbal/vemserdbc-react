import style from './SectionSubtitle.module.css';

const SectionSubtitle = ({subtitle}) => {
  return (
    <h4 className={style.subtitle}>{subtitle}</h4>
  );
}

export default SectionSubtitle;