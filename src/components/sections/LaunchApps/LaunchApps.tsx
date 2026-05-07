import React from 'react';
import styles from './LaunchApps.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const LaunchApps: React.FC = () => {
  const ref = useInView(0.1);
  const { t } = useLang();
  const la = t.launchApps;
  const lap = t.launchAppsPhone;

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <div className={`${styles.visual} slide-left`}>
          <div className={styles.phoneWrap}>
            <div className={styles.phone}>
              <div className={styles.phoneSpeaker} />
              <div className={styles.phoneScreen}>
                <div className={styles.appHeader}>
                  <div className={styles.appAvatar} />
                  <div>
                    <div className={styles.appName} />
                    <div className={styles.appSub} />
                  </div>
                </div>
                <div className={styles.appChart}>
                  {[70, 85, 50, 90, 60, 80].map((h, i) => (
                    <div key={i} className={styles.appBar} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <div className={styles.appStats}>
                  <div className={styles.appStat}>
                    <span className={styles.appStatVal}>+24%</span>
                    <span className={styles.appStatLbl}>{lap.growthLabel}</span>
                  </div>
                  <div className={styles.appStat}>
                    <span className={styles.appStatVal}>1.2k</span>
                    <span className={styles.appStatLbl}>{lap.usersLabel}</span>
                  </div>
                </div>
                <div className={styles.appCard} />
                <div className={styles.appCard2} />
              </div>
            </div>
            <div className={styles.floatCard1}>
              <span className={styles.floatVal}>🚀</span>
              <span className={styles.floatLbl}>{la.launchReady}</span>
            </div>
            <div className={styles.floatCard2}>
              <span className={styles.floatVal}>📱</span>
              <span className={styles.floatLbl}>{la.crossPlatform}</span>
            </div>
          </div>
        </div>

        <div className={`${styles.content} slide-right`}>
          <span className={styles.label}>{la.sectionLabel}</span>
          <h2 className={styles.title}>
            {la.title}{' '}
            <span className={styles.accent}>{la.titleAccent}</span>
          </h2>
          <p className={styles.desc}>{la.desc}</p>

          <ul className={styles.bullets}>
            {la.bullets.map((point, i) => (
              <li key={i} className={styles.bullet}>
                <span className={styles.checkIcon}><CheckIcon /></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className={styles.cta}>
            <a href="/features" className={styles.primaryBtn}>{la.exploreFeatures}</a>
            <a href="/contact" className={styles.secondaryBtn}>{la.contactSales}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchApps;
