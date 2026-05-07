import React, { useState } from 'react';
import styles from './Newsletter.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/muhammed.o.nasser@gmail.com';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useInView(0.2);
  const { t } = useLang();
  const n = t.newsletter;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Zamba Newsletter Subscription' }),
      });
    } finally {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.bg}>
        <div className={styles.bgBlob} />
        <div className={styles.bgPattern} />
      </div>
      <div className={styles.container}>
        <div className={`${styles.content} fade-up`}>
          <span className={styles.label}>{n.sectionLabel}</span>
          <h2 className={styles.title}>
            {n.title} <span className={styles.accent}>{n.titleAccent}</span>
          </h2>
          <p className={styles.desc}>
            {n.desc}{' '}
            <a href="/contact" className={styles.contactLink}>{n.contactLink}</a>
          </p>

          {submitted ? (
            <div className={styles.success}>
              <span>🎉</span>
              <span>{n.successMsg}</span>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputWrap}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  type="email"
                  placeholder={n.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.submitBtn}>{n.subscribe}</button>
              </div>
            </form>
          )}

          <p className={styles.alreadyMember}>
            {n.alreadyMember}{' '}
            <a href="/signin" className={styles.signInLink}>{n.signIn}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
