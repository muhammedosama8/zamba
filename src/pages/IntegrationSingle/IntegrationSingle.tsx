import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './IntegrationSingle.module.scss';
import { useLang } from '../../context/LanguageContext';
import Newsletter from '../../components/sections/Newsletter/Newsletter';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IntegrationSingle: React.FC = () => {
  const { id } = useParams();
  const { t } = useLang();
  const ig = t.integrations;
  const is = t.integrationSingle;
  const integrationId = Number(id) || 1;
  const integration = ig.items.find((i) => i.id === integrationId) || ig.items[0];
  const related = ig.items.filter((i) => i.id !== integration.id && i.category === integration.category).slice(0, 3);
  const [connected, setConnected] = useState(false);

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Link to="/integrations" className={styles.backBtn}>{is.backToIntegrations}</Link>
            <div className={styles.header}>
              <span className={styles.icon}>{integration.icon}</span>
              <div>
                <div className={styles.meta}>
                  <span className={styles.name}>{integration.name}</span>
                  {integration.popular && <span className={styles.popularBadge}>{ig.popular}</span>}
                </div>
                <span className={styles.category}>{integration.category}</span>
              </div>
              <button
                className={`${styles.connectBtn} ${connected ? styles.connected : ''}`}
                onClick={() => setConnected(!connected)}
              >
                {connected ? `✓ ${ig.connect}` : ig.connect}
              </button>
            </div>
            <p className={styles.desc}>{integration.desc}</p>
          </div>
        </section>

        <div className={styles.body}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{is.whatYouCanDo} {integration.name}</h2>
            <ul className={styles.featureList}>
              {is.features.map((feature, i) => (
                <li key={i} className={`${styles.featureItem} fade-up delay-${i + 1}`}>
                  <span className={styles.checkIcon}><CheckIcon /></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{is.howToStart}</h2>
            <div className={styles.steps}>
              {is.steps.map((step, i) => (
                <div key={i} className={`${styles.step} fade-up delay-${i + 1}`}>
                  <div className={styles.stepNum}>{i + 1}</div>
                  <span className={styles.stepLabel}>{step}</span>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <section className={styles.related}>
              <h2 className={styles.sectionTitle}>{is.similar}</h2>
              <div className={styles.relatedGrid}>
                {related.map((item) => (
                  <Link key={item.id} to={`/integrations/${item.id}`} className={styles.relatedCard}>
                    <span className={styles.relatedIcon}>{item.icon}</span>
                    <div>
                      <h3 className={styles.relatedName}>{item.name}</h3>
                      <p className={styles.relatedDesc}>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Newsletter />
    </>
  );
};

export default IntegrationSingle;
