import React from 'react';
import styles from './TeamWork.module.scss';
import { useInView } from '../../../hooks/useScrollAnimation';
import { useLang } from '../../../context/LanguageContext';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const activityColors = ['#4ADE80', '#60A5FA', '#F472B6', '#FBBF24'];

const TeamWork: React.FC = () => {
  const ref = useInView(0.1);
  const { t } = useLang();
  const tw = t.teamWork;
  const twa = t.teamWorkActivity;

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={`${styles.content} slide-left`}>
          <span className={styles.label}>{tw.sectionLabel}</span>
          <h2 className={styles.title}>
            {tw.title}{' '}
            <span className={styles.accent}>{tw.titleAccent}</span>
          </h2>
          <p className={styles.desc}>{tw.desc}</p>

          <ul className={styles.list}>
            {tw.items.map((item, i) => (
              <li key={i} className={styles.listItem}>
                <span className={styles.check}><CheckIcon /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statVal}>{tw.stat1Val}</span>
              <span className={styles.statLbl}>{tw.stat1Lbl}</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statVal}>{tw.stat2Val}</span>
              <span className={styles.statLbl}>{tw.stat2Lbl}</span>
            </div>
          </div>

          <a href="/features" className={styles.btn}>{tw.startBtn}</a>
        </div>

        <div className={`${styles.visual} slide-right`}>
          <div className={styles.collabCard}>
            <div className={styles.collabHeader}>
              <div className={styles.collabAvatars}>
                {[11, 25, 32, 47, 55].map((n) => (
                  <img key={n} src={`https://i.pravatar.cc/48?img=${n}`} alt="team member" className={styles.collabAvatar} />
                ))}
                <span className={styles.moreAvatars}>+14</span>
              </div>
              <span className={styles.onlineLabel}>
                <span className={styles.onlineDot} />
                19 {tw.onlineLabel}
              </span>
            </div>

            <div className={styles.activityFeed}>
              {twa.activity.map((item, i) => (
                <div key={i} className={styles.activityItem}>
                  <div className={styles.activityDot} style={{ background: activityColors[i] }} />
                  <span className={styles.activityText}>
                    <strong>{item.user}</strong> {item.action}
                  </span>
                  <span className={styles.activityTime}>{item.time}</span>
                </div>
              ))}
            </div>

            <div className={styles.commentBox}>
              <img src="https://i.pravatar.cc/32?img=11" alt="user" className={styles.commentAvatar} />
              <div className={styles.commentContent}>
                <span className={styles.commentUser}>{twa.commentUser}</span>
                <span className={styles.commentText}>{twa.commentText}</span>
              </div>
            </div>
          </div>

          <div className={styles.floatingBadge}>
            <span>✅</span>
            <span>{tw.taskDone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamWork;
