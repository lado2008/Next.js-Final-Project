"use client";
import styles from './error.module.css'

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Error: Something happened!!!</h1>
    </div>
  )
};

export default ErrorPage;
