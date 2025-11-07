import React from 'react';
import styles from './WorkshopTypes.module.css';

const types = [
  { label: 'Art & Design', emoji: '🎨' },
  { label: 'Coding', emoji: '💻' },
  { label: 'Communication', emoji: '🗣️' },
  { label: 'Photography', emoji: '📷' },
  { label: 'Music', emoji: '🎵' },
  { label: 'Summer Camps', emoji: '🏕️' }
];

function WorkshopTypes() {
  return (
    <section id="types" className={styles.section}>
      <div className={styles.container}>
        <h2>Explore by Type</h2>
        <div className={styles.grid}>
          {types.map((t) => (
            <div key={t.label} className={styles.card}>
              <div className={styles.emoji} aria-hidden>
                {t.emoji}
              </div>
              <div className={styles.label}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopTypes;



