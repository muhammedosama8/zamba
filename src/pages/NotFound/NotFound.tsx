import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { useLang } from '../../context/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLang();
  const nf = t.notFound;
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>{nf.title}</h1>
        <p className={styles.desc}>{nf.desc}</p>
        <Link to="/" className={styles.btn}>{nf.btn}</Link>
      </div>
    </div>
  );
};

export default NotFound;
