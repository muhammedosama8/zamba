import React, { useState } from 'react';
import styles from './Testimonials.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.098-1.54.099-.48.196-.863.49-1.15.883-.286.393-.43.8-.43 1.22 0 .426.096.822.29 1.19.19.37.464.67.82.894.356.224.757.336 1.204.336.568 0 1.073-.15 1.514-.45.44-.3.79-.7 1.045-1.2.256-.5.384-1.043.384-1.63zm5.48 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.098-1.54.099-.48.196-.863.49-1.15.883-.286.393-.43.8-.43 1.22 0 .426.096.822.29 1.19.19.37.464.67.82.894.356.224.757.336 1.204.336.568 0 1.073-.15 1.514-.45.44-.3.79-.7 1.045-1.2.256-.5.384-1.043.384-1.63z"/>
  </svg>
);

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const ref = useInView(0.1);
  const { t } = useLang();
  const ts = t.testimonials;
  const items = ts.items;

  const next = () => setActive((prev) => (prev + 1) % items.length);
  const prev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.label} fade-up`}>{ts.sectionLabel}</span>
          <h2 className={`${styles.title} fade-up delay-1`}>
            {ts.title} <span className={styles.accent}>{ts.titleAccent}</span>
          </h2>
          <p className={`${styles.desc} fade-up delay-2`}>{ts.desc}</p>
        </div>

        <div className={`${styles.mainCard} fade-up delay-2`}>
          <QuoteIcon />
          <p className={styles.quote}>&ldquo;{items[active].quote}&rdquo;</p>
          <div className={styles.author}>
            <img src={items[active].avatar} alt={items[active].name} className={styles.avatar} />
            <div>
              <p className={styles.authorName}>{items[active].name}</p>
              <p className={styles.authorRole}>{items[active].role} · {items[active].location}</p>
            </div>
            <div className={styles.stars}>
              {[...Array(items[active].rating)].map((_, i) => (
                <span key={i} className={styles.star}><StarIcon /></span>
              ))}
            </div>
          </div>

          <div className={styles.nav}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className={styles.dots}>
              {items.map((_, i) => (
                <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => setActive(i)} />
              ))}
            </div>
            <button className={styles.navBtn} onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === active ? styles.cardActive : ''} fade-up delay-${i + 1}`}
              onClick={() => setActive(i)}
            >
              <div className={styles.cardStars}>
                {[...Array(item.rating)].map((_, j) => (
                  <span key={j} className={styles.star}><StarIcon /></span>
                ))}
              </div>
              <p className={styles.cardQuote}>{item.quote.slice(0, 100)}...</p>
              <div className={styles.cardAuthor}>
                <img src={item.avatar} alt={item.name} className={styles.cardAvatar} />
                <div>
                  <p className={styles.cardName}>{item.name}</p>
                  <p className={styles.cardRole}>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
