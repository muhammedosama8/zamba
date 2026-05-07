import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProjectDetails.module.scss';
import { useLang } from '../../context/LanguageContext';
import Newsletter from '../../components/sections/Newsletter/Newsletter';

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useLang();
  const pd = t.projectDetails;
  const pde = t.projectDetailsExtra;
  const projects = t.projects.items;
  const projectId = Number(id) || 1;
  const project = projects.find((p) => p.id === projectId) || projects[0];
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Link to="/projects" className={styles.backBtn}>{pd.backBtn}</Link>
            <span className={styles.category}>{project.category}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.desc}>{project.desc}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.cover}>
          <img src={project.image} alt={project.title} className={styles.coverImg} />
        </div>

        <div className={styles.body}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{pd.overview}</h2>
            <p className={styles.p}>{pde.overviewText}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{pd.challenge}</h2>
            <p className={styles.p}>{pde.challengeText}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{pd.solution}</h2>
            <p className={styles.p}>{pde.solutionText}</p>
          </section>

          <section className={styles.results}>
            <h2 className={styles.sectionTitle}>{pd.results}</h2>
            <div className={styles.resultsGrid}>
              {pde.results.map((s, i) => (
                <div key={i} className={`${styles.resultCard} fade-up delay-${i + 1}`}>
                  <span className={styles.resultVal}>{s.val}</span>
                  <span className={styles.resultLbl}>{s.lbl}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{pd.techStack}</h2>
            <div className={styles.techGrid}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.techBadge}>{tag}</span>
              ))}
            </div>
          </section>

          <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>{pd.liveDemo}</a>
            <Link to={`/projects/${nextProject.id}`} className={styles.secondaryBtn}>{pd.nextProject}</Link>
          </div>
        </div>
      </main>
      <Newsletter />
    </>
  );
};

export default ProjectDetails;
