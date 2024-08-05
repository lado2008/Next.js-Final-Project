import styles from "./contact.module.css";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <Image src="/contact.png" alt="Logo" width="500" height="500" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
