import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.scss';
import { useLang } from '../../context/LanguageContext';

const ZambaLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#F5C518"/>
    <path d="M8 10h16L14 22h10" stroke="#0B1120" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EyeIcon = ({ show }: { show: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {show ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </>
    )}
  </svg>
);

const SignIn: React.FC = () => {
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const { t } = useLang();
  const si = t.signIn;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.page}>
      <div className={styles.panel}>
        <div className={styles.panelBg} />
        <div className={styles.panelContent}>
          <Link to="/" className={styles.logo}>
            <ZambaLogo />
            <span>Zamba</span>
          </Link>
          <div className={styles.panelText}>
            <h2>{si.panelHeadline}</h2>
            <p>{si.panelDesc}</p>
          </div>
          <div className={styles.panelStats}>
            <div className={styles.panelStat}>
              <span className={styles.panelStatVal}>{si.stat1Val}</span>
              <span className={styles.panelStatLbl}>{si.stat1Lbl}</span>
            </div>
            <div className={styles.panelStatDivider} />
            <div className={styles.panelStat}>
              <span className={styles.panelStatVal}>{si.stat2Val}</span>
              <span className={styles.panelStatLbl}>{si.stat2Lbl}</span>
            </div>
          </div>
          <div className={styles.panelTestimonial}>
            <img src="https://i.pravatar.cc/40?img=11" alt="user" className={styles.panelAvatar} />
            <div>
              <p className={styles.panelQuote}>{si.quote}</p>
              <p className={styles.panelCite}>{si.cite}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSide}>
        <div className={styles.formContainer}>
          <Link to="/" className={styles.mobileLogo}>
            <ZambaLogo />
            <span>Zamba</span>
          </Link>

          <div className={styles.formHeader}>
            <h1 className={styles.formTitle}>{si.formTitle}</h1>
            <p className={styles.formSubtitle}>
              {si.noAccount}{' '}
              <Link to="/signup" className={styles.authLink}>{si.createFree}</Link>
            </p>
          </div>

          <div className={styles.socialAuth}>
            <button className={styles.socialBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {si.continueGoogle}
            </button>
          </div>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>{si.or}</span>
            <span className={styles.dividerLine} />
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>{si.emailLabel}</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={si.emailPlaceholder} className={styles.input} required />
            </div>

            <div className={styles.field}>
              <div className={styles.fieldLabelRow}>
                <label className={styles.fieldLabel}>{si.passwordLabel}</label>
                <a href="#" className={styles.forgotLink}>{si.forgotPassword}</a>
              </div>
              <div className={styles.inputWrap}>
                <input type={showPw ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} placeholder={si.passwordPlaceholder} className={styles.input} required />
                <button type="button" className={styles.eyeBtn} onClick={() => setShowPw(!showPw)}>
                  <EyeIcon show={showPw} />
                </button>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>{si.signInBtn}</button>
          </form>

          <p className={styles.termsNote}>
            {si.terms}{' '}
            <a href="#">{si.termsLink}</a> {si.andText}{' '}
            <a href="#">{si.privacyLink}</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
