import React from 'react';
import styles from './Brands.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const brandLogos = [
  'Airbnb', 'Spotify', 'Slack', 'Dropbox', 'HubSpot', 'Notion',
];

const BrandLogoItem = ({ name }: { name: string }) => (
  <div className={styles.brandItem}>
    <span className={styles.brandName}>{name}</span>
  </div>
);

const Brands: React.FC = () => {
  const ref = useInView();
  const { t } = useLang();

  return (
    <section className={styles.brands} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <p className={`${styles.label} fade-in`}>{t.brands.label}</p>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {[...brandLogos, ...brandLogos].map((name, i) => (
              <BrandLogoItem key={i} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
