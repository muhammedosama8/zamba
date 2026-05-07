import React from 'react';
import styles from './Partners.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const partnerLogos = ['Airbnb', 'Spotify', 'Slack', 'Dropbox', 'HubSpot', 'Notion', 'Figma', 'Stripe'];

const Partners: React.FC = () => {
  const ref = useInView(0.15);
  const { t } = useLang();

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <p className={`${styles.label} fade-up`}>{t.partners.label}</p>
        <div className={styles.grid}>
          {partnerLogos.map((p, i) => (
            <div key={i} className={`${styles.item} fade-up delay-${(i % 4) + 1}`}>
              <span className={styles.name}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
