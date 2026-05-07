import React from 'react';
import styles from './TestimonialsPage.module.scss';
import { useLang } from '../../context/LanguageContext';
import Newsletter from '../../components/sections/Newsletter/Newsletter';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.2">
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.098-1.54.099-.48.196-.863.49-1.15.883-.286.393-.43.8-.43 1.22 0 .426.096.822.29 1.19.19.37.464.67.82.894.356.224.757.336 1.204.336.568 0 1.073-.15 1.514-.45.44-.3.79-.7 1.045-1.2.256-.5.384-1.043.384-1.63zm5.48 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.098-1.54.099-.48.196-.863.49-1.15.883-.286.393-.43.8-.43 1.22 0 .426.096.822.29 1.19.19.37.464.67.82.894.356.224.757.336 1.204.336.568 0 1.073-.15 1.514-.45.44-.3.79-.7 1.045-1.2.256-.5.384-1.043.384-1.63z"/>
  </svg>
);

const TestimonialsPage: React.FC = () => {
  const { t } = useLang();
  const tp = t.testimonialsPage;
  const testimonials = t.testimonials.items;
  const extra = t.testimonialsExtra;
  const allTestimonials = [...testimonials, ...extra];

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>{tp.badge}</span>
            <h1 className={styles.title}>
              {tp.title} <span className={styles.accent}>{tp.titleAccent}</span>
            </h1>
            <p className={styles.desc}>{tp.desc}</p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statVal}>{tp.stat1Val}</span>
                <span className={styles.statLbl}>{tp.stat1Lbl}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statVal}>{tp.stat2Val}</span>
                <span className={styles.statLbl}>{tp.stat2Lbl}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statVal}>{tp.stat3Val}</span>
                <span className={styles.statLbl}>{tp.stat3Lbl}</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {allTestimonials.map((item, i) => (
                <div key={i} className={`${styles.card} fade-up delay-${(i % 4) + 1}`}>
                  <QuoteIcon />
                  <p className={styles.quote}>"{item.quote}"</p>
                  <div className={styles.stars}>
                    {[...Array(item.rating)].map((_, j) => (
                      <span key={j} className={styles.star}><StarIcon /></span>
                    ))}
                  </div>
                  <div className={styles.author}>
                    <img src={item.avatar} alt={item.name} className={styles.avatar} />
                    <div>
                      <p className={styles.authorName}>{item.name}</p>
                      <p className={styles.authorRole}>{item.role} · {item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
    </>
  );
};

export default TestimonialsPage;
