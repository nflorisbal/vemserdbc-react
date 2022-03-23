import styles from './PageTitle.module.css';

const PageTitle = ({pageTitle}) => {
  return (
    <h1 className={styles.pageTitle}>{pageTitle}</h1>
  );
}

export default PageTitle;