import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './BlogDetails.module.scss';
import { useLang } from '../../context/LanguageContext';
import Newsletter from '../../components/sections/Newsletter/Newsletter';

const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useLang();
  const bd = t.blogDetails;
  const bde = t.blogDetailsExtra;
  const posts = t.blog.posts;
  const postId = Number(id) || 1;
  const post = posts.find((p) => p.id === postId) || posts[0];
  const related = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <main className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <Link to="/blog" className={styles.backBtn}>{bd.backBtn}</Link>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.authorRow}>
              <img src={post.author.avatar} alt={post.author.name} className={styles.avatar} />
              <div>
                <span className={styles.authorLabel}>{bd.authorLabel}</span>
                <span className={styles.authorName}>{post.author.name}</span>
              </div>
              <button className={styles.shareBtn}>
                <ShareIcon /> {bd.shareLabel}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cover}>
          <img src={post.image} alt={post.title} className={styles.coverImg} />
        </div>

        <div className={styles.body}>
          <aside className={styles.toc}>
            <h3 className={styles.tocTitle}>{bd.tableOfContents}</h3>
            <ol className={styles.tocList}>
              {bde.toc.map((item, i) => (
                <li key={i} className={styles.tocItem}>
                  <a href={`#section-${i}`} className={styles.tocLink}>{item}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className={styles.article}>
            <p className={styles.lead}>{post.excerpt}</p>

            <h2 id="section-0" className={styles.h2}>{bde.toc[0]}</h2>
            <p className={styles.p}>{bde.intro}</p>
            <p className={styles.p}>{bde.introP2}</p>

            <h2 id="section-1" className={styles.h2}>{bde.toc[1]}</h2>
            <p className={styles.p}>{bde.conceptsIntro}</p>
            <ul className={styles.list}>
              {bde.conceptsList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 id="section-2" className={styles.h2}>{bde.toc[2]}</h2>
            <p className={styles.p}>{bde.implIntro}</p>
            <div className={styles.callout}>
              <strong>{bde.proTip}</strong> {bde.proTipText}
            </div>
            <p className={styles.p}>{bde.implP2}</p>

            <h2 id="section-3" className={styles.h2}>{bde.toc[3]}</h2>
            <p className={styles.p}>{bde.resultsText}</p>

            <h2 id="section-4" className={styles.h2}>{bde.toc[4]}</h2>
            <p className={styles.p}>{bde.conclusionText}</p>
          </article>
        </div>

        {related.length > 0 && (
          <section className={styles.related}>
            <div className={styles.relatedInner}>
              <h2 className={styles.relatedTitle}>{bd.relatedTitle}</h2>
              <div className={styles.relatedGrid}>
                {related.map((p) => (
                  <Link key={p.id} to={`/blog/${p.id}`} className={styles.relatedCard}>
                    <img src={p.image} alt={p.title} className={styles.relatedImg} />
                    <div className={styles.relatedContent}>
                      <span className={styles.relatedCategory}>{p.category}</span>
                      <h3 className={styles.relatedPostTitle}>{p.title}</h3>
                      <div className={styles.relatedMeta}>
                        <img src={p.author.avatar} alt={p.author.name} className={styles.relatedAvatar} />
                        <span>{p.author.name}</span>
                        <span>·</span>
                        <span>{p.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Newsletter />
    </>
  );
};

export default BlogDetails;
