import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient.js';
import styles from './WaitlistForm.module.css';

function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('Waitlist')
        .insert([{ name: trimmedName, email: trimmedEmail, message: trimmedMessage }] );

      if (error) throw error;
      setStatus({ type: 'success', message: 'Thanks! You\'re on the waitlist.' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="waitlist" className={styles.section}>
      <div className={styles.container}>
        <h2>Join the Waitlist</h2>
        <p>Be first to know when we launch in your city.</p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.row}>
            <label htmlFor="message">Message / Interest</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us what you want to learn"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className={styles.submit} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Join waitlist'}
          </button>
          {status.type === 'success' && (
            <div role="status" className={styles.success}>{status.message}</div>
          )}
          {status.type === 'error' && (
            <div role="alert" className={styles.error}>{status.message}</div>
          )}
        </form>
      </div>
    </section>
  );
}

export default WaitlistForm;



