import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useLang } from "../../../context/LanguageContext";

const ZambaLogo = () => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
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

const TwitterIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
	</svg>
);

const LinkedInIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 0 22.222 0h.003z" />
	</svg>
);

const FacebookIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
	</svg>
);

const YouTubeIcon = () => (
	<svg width="18" height="14" viewBox="0 0 576 512" fill="currentColor">
		<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
	</svg>
);

const footerHrefs = {
	quickLinks: ["/", "/features", "/about#team", "/blog", "#", "#"],
	company: ["/about", "/contact", "#", "#", "#"],
	services: ["#", "#", "/integrations", "#", "#"],
};

const Footer: React.FC = () => {
	const { t } = useLang();
	const f = t.footer;

	const columns = [
		{
			title: f.quickLinks,
			labels: f.links.quickLinks,
			hrefs: footerHrefs.quickLinks,
		},
		{ title: f.company, labels: f.links.company, hrefs: footerHrefs.company },
		// { title: f.services, labels: f.links.services, hrefs: footerHrefs.services },
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.brand}>
						<Link to="/" className={styles.logo}>
							<ZambaLogo />
							<span>Zamba</span>
						</Link>
						<p className={styles.tagline}>{f.tagline}</p>
						<div className={styles.socials}>
							<a href="#" className={styles.social} aria-label="Facebook">
								<FacebookIcon />
							</a>
							<a href="#" className={styles.social} aria-label="Twitter">
								<TwitterIcon />
							</a>
							<a href="#" className={styles.social} aria-label="LinkedIn">
								<LinkedInIcon />
							</a>
							<a href="#" className={styles.social} aria-label="YouTube">
								<YouTubeIcon />
							</a>
						</div>
					</div>

					{columns.map((col) => (
						<div key={col.title} className={styles.column}>
							<h4 className={styles.columnTitle}>{col.title}</h4>
							<ul className={styles.columnLinks}>
								{col.labels.map((label, i) => (
									<li key={i}>
										<Link to={col.hrefs[i]} className={styles.columnLink}>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.bottomInner}>
					<p className={styles.copyright}>{f.copyright}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
