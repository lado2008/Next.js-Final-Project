import Link from "next/link";
import styles from './not-found.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Not Found!!! <b>404</b> </h2>
        <p>this page doesn't exist</p>
        <Link className={styles.button} href={"/"}>Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
