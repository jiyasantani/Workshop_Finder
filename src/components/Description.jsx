import React from 'react';
import styles from './Description.module.css';

function Description() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2>How it works</h2>
        <p>
          Browse curated workshops by category and city. Filter by interests like art, coding,
          communication, or seasonal camps. Save your favorites and get notified when new sessions
          open near you.
        </p>
      </div>
    </section>
  );
}

export default Description;

