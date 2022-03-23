import style from './SectionTitle.module.css';

const SectionTitle = ({title}) => {
  return (
    <>
      <h5 className={style.title}>{title}</h5>
    </>
  );
}

export default SectionTitle;