import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.scss';
import { useInView } from '../../hooks/useScrollAnimation';
import Newsletter from '../../components/sections/Newsletter/Newsletter';
import { useLang } from '../../context/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLang();
  const b = t.blog;
  const [activeCategory, setActiveCategory] = useState<string>(b.categories[0]);
  const heroRef = useInView(0.1);
  const postsRef = useInView(0.1);

  const filtered = activeCategory === b.categories[0]
    ? b.posts
    : b.posts.filter((p) => p.category === activeCategory);

  const featured = b.posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== b.categories[0]);

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.heroBg} />
        <div className={styles.heroContainer}>
          <span className={`${styles.label} fade-up`}>{b.badge}</span>
          <h1 className={`${styles.heroTitle} fade-up delay-1`}>
            {b.title} <span className={styles.accent}>{b.titleAccent}</span>
          </h1>
          <p className={`${styles.heroDesc} fade-up delay-2`}>{b.desc}</p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.catContainer}>
          {b.categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.catBtn} ${activeCategory === cat ? styles.catBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === b.categories[0] && featured && (
        <section className={styles.featured}>
          <div className={styles.featuredContainer}>
            <div className={`${styles.featuredCard} fade-up`}>
              <div className={styles.featuredImg}>
                <img src={featured.image} alt={featured.title} />
                <span className={styles.featuredBadge}>{b.featured}</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{featured.category}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.readTime}>{featured.readTime}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.date}>{featured.date}</span>
                </div>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.postFooter}>
                  <div className={styles.author}>
                    <img src={featured.author.avatar} alt={featured.author.name} className={styles.authorAvatar} />
                    <span className={styles.authorName}>{featured.author.name}</span>
                  </div>
                  <Link to={`/blog/${featured.id}`} className={styles.readMore}>{b.readArticle}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className={styles.posts} ref={postsRef as React.RefObject<HTMLDivElement>}>
        <div className={styles.postsContainer}>
          <h3 className={`${styles.postsTitle} fade-up`}>
            {activeCategory === b.categories[0] ? b.latestPosts : `${activeCategory}`}
          </h3>
          <div className={styles.postsGrid}>
            {rest.map((post, i) => (
              <article key={post.id} className={`${styles.postCard} fade-up delay-${(i % 3) + 1}`}>
                <div className={styles.postImg}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.postCategory}>{post.category}</span>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.readTime}>{post.readTime}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.author}>
                      <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatar} />
                      <span className={styles.authorName}>{post.author.name}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className={styles.readMore}>{b.readMore}</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default Blog;
