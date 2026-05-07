import React, { useState } from 'react';
import styles from './Pricing.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const WHATSAPP_NUMBER = '201122400772';

const planPrices = [
  { monthly: 5, yearly: 48 },
  { monthly: 30, yearly: 288 },
  { monthly: 25, yearly: 240 },
];

const buildWhatsAppUrl = (planName: string, price: number, annual: boolean) => {
  const billing = annual ? 'Annual' : 'Monthly';
  const message = `Hi! I'm interested in the *${planName}* plan (${billing} – $${price}/mo). Please get me started!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);
  const ref = useInView(0.1);
  const { t } = useLang();
  const p = t.pricing;

  return (
    <section className={styles.pricing} id="pricing" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.label} fade-up`}>{p.sectionLabel}</span>
          <h2 className={`${styles.title} fade-up delay-1`}>
            {p.title}{' '}
            <span className={styles.accent}>{p.titleAccent}</span>
          </h2>
          <p className={`${styles.desc} fade-up delay-2`}>{p.desc}</p>

          <div className={`${styles.toggle} fade-up delay-3`}>
            <span className={!annual ? styles.toggleActive : styles.toggleInactive}>{p.monthly}</span>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.toggleBtnOn : ''}`}
              onClick={() => setAnnual(!annual)}
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={annual ? styles.toggleActive : styles.toggleInactive}>
              {p.yearly}
              <span className={styles.saveBadge}>{p.save}</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {p.plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''} fade-up delay-${index + 1}`}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>
                  <StarIcon /> {p.mostPopular}
                </div>
              )}

              <div className={styles.planHeader}>
                <span className={styles.planName}>{plan.name}</span>
                <p className={styles.planDesc}>{plan.desc}</p>
              </div>

              <div className={styles.priceWrap}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>
                  {annual ? planPrices[index].yearly / 12 : planPrices[index].monthly}
                </span>
                <span className={styles.period}>{p.perMonth}</span>
              </div>

              {annual && (
                <p className={styles.annualNote}>
                  {p.billedAs} ${planPrices[index].yearly}{p.perYear}
                </p>
              )}

              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <span className={`${styles.featureCheck} ${plan.highlighted ? styles.featureCheckHighlighted : ''}`}>
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppUrl(
                  plan.name,
                  annual ? planPrices[index].yearly / 12 : planPrices[index].monthly,
                  annual
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} ${plan.highlighted ? styles.ctaHighlighted : styles.ctaRegular}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className={`${styles.bottomNote} fade-up`}>
          {p.bottomNote} <strong>{p.trialText}</strong>. {p.noCard}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
