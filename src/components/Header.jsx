import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Workshop Finder</div>
        <nav className={styles.nav} aria-label="Main Navigation">
          <a href="#about">About</a>
          <a href="#types">Types</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

