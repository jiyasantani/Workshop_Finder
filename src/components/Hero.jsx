import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Discover Workshops That Inspire You</h1>
        <p className={styles.subtitle}>Find artistic, coding, communication workshops, summer camps, and more across your city.</p>
        <a className={styles.cta} href="#waitlist">Join the waitlist</a>
      </div>
    </section>
  );
}

export default Hero;

