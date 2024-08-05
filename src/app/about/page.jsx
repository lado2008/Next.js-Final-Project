import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          Exploring the World of Ideas and Inspiration
        </h1>
        <p className={styles.desc}>
          At [Your Blog Name], we are passionate about bringing you insightful and thought-provoking content that sparks curiosity and creativity. Our mission is to provide you with a diverse range of articles on topics that matter, from the latest trends in technology to inspiring stories from around the world.
        </p>
        <p className={styles.desc}>
          With a commitment to quality and a dedication to our readers, our team of writers and experts strive to deliver valuable content that informs and engages. Join us as we explore new ideas, share valuable insights, and inspire positive change through the power of words.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>500+</h1>
            <p>Articles Published</p>
          </div>
          <div className={styles.box}>
            <h1>1M+</h1>
            <p>Readers Worldwide</p>
          </div>
          <div className={styles.box}>
            <h1>50+</h1>
            <p>Expert Contributors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
