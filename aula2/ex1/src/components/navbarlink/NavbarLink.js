import styles from './NavbarLink.module.css'

const Link = ({url, textLink}) => {
  return (
    <>
      <a className={styles.a} href={url}>{textLink}</a>
    </>
  );
}

export default Link;