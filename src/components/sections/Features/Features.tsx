import React from 'react';
import styles from './Features.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const featureIcons: React.ReactNode[] = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>,
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Features: React.FC = () => {
  const ref = useInView(0.1);
  const { t } = useLang();
  const f = t.features;

  return (
    <section className={styles.features} id="features" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.label} fade-up`}>{f.sectionLabel}</span>
          <h2 className={`${styles.title} fade-up delay-1`}>
            {f.title} <span className={styles.accent}>{f.titleAccent}</span>
          </h2>
          <p className={`${styles.desc} fade-up delay-2`}>{f.desc}</p>
        </div>

        <div className={styles.grid}>
          {f.items.map((item, index) => (
            <div key={index} className={`${styles.card} fade-up delay-${(index % 4) + 1}`}>
              <div className={styles.iconWrap}>{featureIcons[index]}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <a href="#" className={styles.learnMore}>
                {f.learnMore} <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
