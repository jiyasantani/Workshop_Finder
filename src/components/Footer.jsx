import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.brand}>Workshop Finder</div>
          <div className={styles.copy}>© {new Date().getFullYear()} Workshop Finder</div>
        </div>
        <div className={styles.right}>
          <a href="mailto:hello@example.com">Contact</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



