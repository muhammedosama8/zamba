import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { useInView } from '../../hooks/useScrollAnimation';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import { useLang } from '../../context/LanguageContext';

const contactIcons = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1H5.1a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>,
];

const contactLinks = ['mailto:hello@zamba.io', 'tel:+15551234567', null, null];

const RECIPIENT = 'muhammed.o.nasser@gmail.com';

const Contact: React.FC = () => {
  const { t } = useLang();
  const c = t.contact;
  const heroRef = useInView(0.1);
  const formRef = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zamba Contact: ${form.subject}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.heroBg} />
        <div className={styles.heroContainer}>
          <span className={`${styles.label} fade-up`}>{c.badge}</span>
          <h1 className={`${styles.heroTitle} fade-up delay-1`}>
            {c.title} <span className={styles.accent}>{c.titleAccent}</span>
          </h1>
          <p className={`${styles.heroDesc} fade-up delay-2`}>{c.desc}</p>
        </div>
      </section>

      {/* Contact section */}
      <section className={styles.contactSection} ref={formRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.contactContainer}>
          {/* Info */}
          <div className={`${styles.info} slide-left`}>
            <h2 className={styles.infoTitle}>
              {c.infoTitle} <span className={styles.accent}>{c.infoAccent}</span>
            </h2>
            <p className={styles.infoDesc}>{c.infoDesc}</p>

            <div className={styles.infoItems}>
              {c.info.map((item, i) => (
                <div key={i} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{contactIcons[i]}</div>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    {contactLinks[i] ? (
                      <a href={contactLinks[i]!} className={styles.infoValue}>{item.value}</a>
                    ) : (
                      <p className={styles.infoValue}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`${styles.formWrap} slide-right`}>
            {submitted ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✅</span>
                <h3>{c.successTitle}</h3>
                <p>{c.successDesc}</p>
                <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                  {c.resetBtn}
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>{c.formTitle}</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label2}>{c.nameLabel}</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={c.namePlaceholder} className={styles.input} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label2}>{c.emailLabel}</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={c.emailPlaceholder} className={styles.input} required />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label2}>{c.subjectLabel}</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder={c.subjectPlaceholder} className={styles.input} required />
                </div>

                <div className={styles.field}>
                  <label className={styles.label2}>{c.messageLabel}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder={c.messagePlaceholder} className={styles.textarea} rows={5} required />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  {c.sendBtn}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Contact;
