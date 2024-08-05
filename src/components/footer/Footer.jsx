// components/Footer.jsx
import React from 'react';
import styles from './footer.module.css';
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <Link className={styles.links} href="/">
            <p className={styles.footerText}>Home</p>
          </Link>
          <Link className={styles.links} href="/blog">
            <p className={styles.footerText}>Blogs</p>
          </Link>
          <Link className={styles.links} href="/contact">
            <p className={styles.footerText}>Contact</p>
          </Link>
        </div>
        <div className={styles.footerInfo}>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <p className={styles.footerText}> Rustaveli Street, Senaki, Georgia</p>
          <p className={styles.footerText}><b className={styles.addres}>Email:</b> adamialado133@gmail.com</p>
          <p className={styles.footerText}><b className={styles.addres}>Phone:</b> 599 45 22 74</p>
        </div>
        <div className={styles.footerSocial}>
          <h4 className={styles.footerTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Image src="/Facebook.png" alt="Logo" width="100" height="100" className={styles.logo_img} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Image src="/twitter.png" alt="Logo" width="100" height="100" className={styles.logo_img} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Image src="/instagram.png" alt="Logo" width="100" height="100" className={styles.logo_img} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
