"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";
import Image from 'next/image';

const links = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
  { title: "Log In", path: "/login", special: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="toggle"
          checked={isOpen}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className={styles.hamburgerLines} onClick={handleToggle}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </label>
        <ul className={`${styles.menuItems} ${isOpen ? styles.open : ""}`}>
          <div className={styles.links}>
            {links.map((item) => (
              <li className={styles.navItem} key={item.title}>
                <Link href={item.path} className={`${styles.navLink} ${item.special ? styles.specialNavLink : ""}`} onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </div>
        </ul>
        <Link href="/" className={styles.logo}>
        <Image src="/Logo.png" alt="Logo" width="100" height="100" className={styles.logo_img} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
