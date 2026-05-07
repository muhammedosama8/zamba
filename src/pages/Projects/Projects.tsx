import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';
import { useLang } from '../../context/LanguageContext';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import Testimonials from '../../components/sections/Testimonials/Testimonials';

const Projects: React.FC = () => {
  const { t } = useLang();
  const p = t.projects;
  const [activeCategory, setActiveCategory] = useState<string>(p.categories[0]);

  const filtered = activeCategory === p.categories[0]
    ? p.items
    : p.items.filter((item) => item.category === activeCategory);

  return (
    <>
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>{p.badge}</span>
            <h1 className={styles.title}>
              {p.title} <span className={styles.accent}>{p.titleAccent}</span>
            </h1>
            <p className={styles.desc}>{p.desc}</p>
          </div>
        </section>

        {/* Filter */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.filters}>
              {p.categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.grid}>
              {filtered.map((item, i) => (
                <Link
                  key={item.id}
                  to={`/projects/${item.id}`}
                  className={`${styles.card} fade-up delay-${(i % 3) + 1}`}
                >
                  <div className={styles.imgWrap}>
                    <img src={item.image} alt={item.title} className={styles.img} />
                    <div className={styles.overlay}>
                      <span className={styles.viewBtn}>{p.viewProject}</span>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardCategory}>{item.category}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                    <div className={styles.tags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Projects;
