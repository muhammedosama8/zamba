import React from 'react';
import styles from './About.module.scss';
import { useInView } from '../../hooks/useScrollAnimation';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import LaunchApps from '../../components/sections/LaunchApps/LaunchApps';
import TeamWork from '../../components/sections/TeamWork/TeamWork';
import { useLang } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLang();
  const a = t.about;
  const heroRef = useInView(0.1);
  const teamRef = useInView(0.1);
  const valuesRef = useInView(0.1);

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.heroBg} />
        <div className={styles.heroContainer}>
          <span className={`${styles.label} fade-up`}>{a.badge}</span>
          <h1 className={`${styles.heroTitle} fade-up delay-1`}>
            {a.title1} <span className={styles.accent}>{a.titleAccent}</span>
          </h1>
          <p className={`${styles.heroDesc} fade-up delay-2`}>{a.desc}</p>
          <div className={`${styles.heroStats} fade-up delay-3`}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatVal}>{a.stat1Val}</span>
              <span className={styles.heroStatLbl}>{a.stat1Lbl}</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatVal}>{a.stat2Val}</span>
              <span className={styles.heroStatLbl}>{a.stat2Lbl}</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatVal}>{a.stat3Val}</span>
              <span className={styles.heroStatLbl}>{a.stat3Lbl}</span>
            </div>
          </div>
        </div>
        <div className={`${styles.heroVisual} fade-in delay-2`}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format"
            alt="Zamba team"
            className={styles.heroImg}
          />
          <div className={styles.heroImgOverlay} />
        </div>
      </section>

      {/* Who we are */}
      <section className={styles.whoWeAre} ref={valuesRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.container}>
          <div className={styles.whoLeft}>
            <span className={`${styles.label} fade-up`}>{a.whoLabel}</span>
            <h2 className={`${styles.sectionTitle} fade-up delay-1`}>
              {a.whoTitle} <span className={styles.accent}>{a.whoAccent}</span>
            </h2>
            <p className={`${styles.sectionDesc} fade-up delay-2`}>{a.whoDesc1}</p>
            <p className={`${styles.sectionDesc} fade-up delay-3`}>{a.whoDesc2}</p>
          </div>
          <div className={`${styles.valuesGrid} fade-up delay-2`}>
            {a.values.map((v, i) => (
              <div key={i} className={`${styles.valueCard} fade-up delay-${i + 1}`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team} id="team" ref={teamRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <span className={`${styles.label} fade-up`}>{a.teamLabel}</span>
            <h2 className={`${styles.sectionTitle} fade-up delay-1`}>
              {a.teamTitle} <span className={styles.accent}>{a.teamAccent}</span> {a.teamSuffix}
            </h2>
            <p className={`${styles.sectionDesc} fade-up delay-2`}>{a.teamDesc}</p>
          </div>
          <div className={styles.teamGrid}>
            {a.teamMembers.map((member, i) => (
              <div key={i} className={`${styles.memberCard} fade-up delay-${i + 1}`}>
                <img src={member.avatar} alt={member.name} className={styles.memberAvatar} />
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <div className={styles.memberSocials}>
                  <a href="#" className={styles.socialLink}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LaunchApps />
      <TeamWork />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default About;
