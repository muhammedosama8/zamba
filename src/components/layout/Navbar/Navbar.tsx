import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useLang } from "../../../context/LanguageContext";

const ZambaLogo = () => (
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
		<rect width="32" height="32" rx="8" fill="#F5C518" />
		<path
			d="M8 10h16L14 22h10"
			stroke="#0B1120"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const GlobeIcon = () => (
	<svg
		width="15"
		height="15"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round">
		<circle cx="12" cy="12" r="10" />
		<line x1="2" y1="12" x2="22" y2="12" />
		<path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
	</svg>
);

const Navbar: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const location = useLocation();
	const { t, toggleLang } = useLang();

	const navLinks = [
		{ label: t.nav.home, href: "/" },
		{ label: t.nav.about, href: "/about" },
		{ label: t.nav.features, href: "/features" },
		{ label: t.nav.pricing, href: "/pricing" },
		{ label: t.nav.projects, href: "/projects" },
		{ label: t.nav.blog, href: "/blog" },
		{ label: t.nav.contact, href: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// useEffect(() => { setMobileOpen(false); }, [location]);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	return (
		<>
			<nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
				<div className={styles.inner}>
					<Link to="/" className={styles.logo}>
						<ZambaLogo />
						<span className={styles.logoText}>Zamba</span>
					</Link>

					<ul className={styles.navLinks}>
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									to={link.href}
									className={`${styles.navLink} ${location.pathname === link.href ? styles.active : ""}`}>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					<div className={styles.actions}>
						{/* Language toggle */}
						<button
							className={styles.langBtn}
							onClick={toggleLang}
							aria-label="Toggle language">
							<GlobeIcon />
							<span>{t.nav.toggleLang}</span>
						</button>
						{/* <Link to="/signin" className={styles.signIn}>
							{t.nav.signIn}
						</Link>
						<Link to="/signup" className={styles.getStarted}>
							{t.nav.tryFree}
						</Link> */}
					</div>

					<div className={styles.mobileRight}>
						<button
							className={styles.mobileLangBtn}
							onClick={toggleLang}
							aria-label="Toggle language">
							<GlobeIcon />
						</button>
						<button
							className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
							onClick={() => setMobileOpen(!mobileOpen)}
							aria-label="Toggle menu">
							<span />
							<span />
							<span />
						</button>
					</div>
				</div>
			</nav>

			<div
				className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ""}`}>
				<ul className={styles.mobileLinks}>
					{navLinks.map((link) => (
						<li key={link.href}>
							<Link
								to={link.href}
								className={`${styles.mobileLink} ${location.pathname === link.href ? styles.active : ""}`}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
				<div className={styles.mobileActions}>
					<button className={styles.mobileLangFull} onClick={toggleLang}>
						<GlobeIcon /> {t.nav.toggleLang}
					</button>
					{/* <Link to="/signin" className={styles.mobileSignIn}>{t.nav.signIn}</Link> */}
					{/* <Link to="/signup" className={styles.mobileGetStarted}>{t.nav.tryFree}</Link> */}
				</div>
			</div>

			{mobileOpen && (
				<div className={styles.overlay} onClick={() => setMobileOpen(false)} />
			)}
		</>
	);
};

export default Navbar;
