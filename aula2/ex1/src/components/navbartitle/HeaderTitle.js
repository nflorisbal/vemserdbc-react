import styles from './HeaderTitle.module.css'

const HeaderTitle = ({textTitle}) => {
  return (
    <h3 className={styles.headerTitle}>{textTitle}</h3>
  );
}

export default HeaderTitle;