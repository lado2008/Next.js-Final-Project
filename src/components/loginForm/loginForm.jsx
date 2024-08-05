import Link from "next/link";
import styles from './loginForm.module.css'

const LoginForm = () => {
  return (
    <form action="" className={styles.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Log In</button>
      <Link className={styles.registerLink} href="/register">
        {"Don't have an account?"} <b className={styles.register_link}>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
