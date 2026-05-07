import React from 'react';
import styles from './Stats.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const Stats: React.FC = () => {
  const ref = useInView(0.2);
  const { t } = useLang();

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        {t.stats.map((stat, i) => (
          <div key={i} className={`${styles.item} fade-up delay-${i + 1}`}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
