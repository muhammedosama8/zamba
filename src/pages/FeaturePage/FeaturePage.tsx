import React from "react";
import styles from "./FeaturePage.module.scss";
import Features from "../../components/sections/Features/Features";
import LaunchApps from "../../components/sections/LaunchApps/LaunchApps";
import TeamWork from "../../components/sections/TeamWork/TeamWork";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Newsletter from "../../components/sections/Newsletter/Newsletter";
import { useInView } from "../../hooks/useScrollAnimation";
import { useLang } from "../../context/LanguageContext";

const integrations = [
	{ name: "Slack", icon: "💬" },
	{ name: "Notion", icon: "📝" },
	{ name: "Figma", icon: "🎨" },
	{ name: "GitHub", icon: "🐙" },
	{ name: "Zapier", icon: "⚡" },
	{ name: "Stripe", icon: "💳" },
	{ name: "Hubspot", icon: "🔶" },
	{ name: "Mailchimp", icon: "✉️" },
];

const FeaturePage: React.FC = () => {
	const heroRef = useInView(0.1);
	const intRef = useInView(0.1);
	const { t } = useLang();
	const fp = t.featurePage;

	return (
		<main>
			<section
				className={styles.hero}
				ref={heroRef as React.RefObject<HTMLDivElement>}>
				<div className={styles.heroBg} />
				<div className={styles.heroContainer}>
					<span className={`${styles.label} fade-up`}>{fp.badge}</span>
					<h1 className={`${styles.heroTitle} fade-up delay-1`}>
						{fp.title} <span className={styles.accent}>{fp.titleAccent}</span>
					</h1>
					<p className={`${styles.heroDesc} fade-up delay-2`}>{fp.desc}</p>
					<div className={`${styles.heroCta} fade-up delay-3`}>
						<a href="/signup" className={styles.primaryBtn}>
							{fp.startTrial}
						</a>
						<a href="/pricing" className={styles.secondaryBtn}>
							{fp.viewPricing}
						</a>
					</div>
				</div>
			</section>

			<Features />

			<section
				className={styles.integrations}
				ref={intRef as React.RefObject<HTMLDivElement>}>
				<div className={styles.intContainer}>
					<div className={styles.intHeader}>
						<span className={`${styles.label} fade-up`}>{fp.intLabel}</span>
						<h2 className={`${styles.sectionTitle} fade-up delay-1`}>
							{fp.intTitle}{" "}
							<span className={styles.accent}>{fp.intAccent}</span>
						</h2>
						<p className={`${styles.sectionDesc} fade-up delay-2`}>
							{fp.intDesc}
						</p>
					</div>
					<div className={styles.intGrid}>
						{integrations.map((item, i) => (
							<div
								key={i}
								className={`${styles.intCard} fade-up delay-${(i % 4) + 1}`}>
								<span className={styles.intIcon}>{item.icon}</span>
								<span className={styles.intName}>{item.name}</span>
							</div>
						))}
					</div>
					<div className={`${styles.intMore} fade-up`}>
						<a href="/integrations" className={styles.moreLink}>
							{fp.viewPricing} &rarr;
						</a>
					</div>
				</div>
			</section>

			<LaunchApps />
			<TeamWork />
			<Testimonials />
			<Newsletter />
		</main>
	);
};

export default FeaturePage;
