import React, { useEffect, useRef } from 'react';
import styles from './Stats.module.scss';
import { useLang } from '../../../context/LanguageContext';
import { animate, stagger } from 'animejs';

const Stats: React.FC = () => {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const valueRefs  = useRef<(HTMLSpanElement | null)[]>([]);
  const animated   = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;

          // Stagger-reveal the whole cards
          animate(
            Array.from(section.querySelectorAll(`.${styles.item}`)),
            {
              opacity: [0, 1],
              translateY: [40, 0],
              delay: stagger(120),
              duration: 700,
              ease: 'outExpo',
            },
          );

          // Count-up for numeric values
          valueRefs.current.forEach((el, i) => {
            if (!el) return;
            const raw = t.stats[i].value;
            const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
            if (isNaN(num)) return;

            const prefix = raw.match(/^[^0-9]*/)?.[0] ?? '';
            const suffix = raw.match(/[^0-9.]+$/)?.[0]  ?? '';
            const obj = { val: 0 };

            animate(obj, {
              val: num,
              duration: 1800,
              delay: i * 120,
              ease: 'outExpo',
              onUpdate: () => {
                const v = num < 10 ? obj.val.toFixed(1) : Math.round(obj.val).toString();
                el.textContent = `${prefix}${v}${suffix}`;
              },
            });
          });
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [t.stats]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {t.stats.map((stat, i) => (
          <div key={i} className={styles.item} style={{ opacity: 0 }}>
            <span
              ref={(el) => { valueRefs.current[i] = el; }}
              className={styles.value}
            >
              {stat.value}
            </span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
