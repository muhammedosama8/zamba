import React, { useState } from "react";
import styles from "./PricingPage.module.scss";
import Pricing from "../../components/sections/Pricing/Pricing";
import Features from "../../components/sections/Features/Features";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Newsletter from "../../components/sections/Newsletter/Newsletter";
import { useInView } from "../../hooks/useScrollAnimation";
import { useLang } from "../../context/LanguageContext";

const PricingPage: React.FC = () => {
	const heroRef = useInView(0.1);
	const faqRef = useInView(0.1);
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const { t } = useLang();
	const pp = t.pricingPage;

	return (
		<main>
			<section
				className={styles.hero}
				ref={heroRef as React.RefObject<HTMLDivElement>}>
				<div className={styles.heroBg} />
				<div className={styles.heroContainer}>
					<span className={`${styles.label}`}>{pp.badge}</span>
					<h1 className={`${styles.heroTitle}`}>
						{pp.title} <span className={styles.accent}>{pp.titleAccent}</span>
					</h1>
					<p className={`${styles.heroDesc}`}>{pp.desc}</p>
				</div>
			</section>

			<Pricing />
			<Features />

			<section
				className={styles.faq}
				ref={faqRef as React.RefObject<HTMLDivElement>}>
				<div className={styles.faqContainer}>
					<div className={styles.faqHeader}>
						<span className={`${styles.label}`}>{pp.faqLabel}</span>
						<h2 className={`${styles.sectionTitle}`}>
							{pp.faqTitle}{" "}
							<span className={styles.accent}>{pp.faqAccent}</span>
						</h2>
					</div>
					<div className={styles.faqList}>
						{pp.faqs.map((faq, i) => (
							<div
								key={i}
								className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}>
								<button
									className={styles.faqQuestion}
									onClick={() => setOpenFaq(openFaq === i ? null : i)}>
									<span>{faq.q}</span>
									<span className={styles.faqIcon}>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round">
											<polyline
												points={
													openFaq === i ? "18 15 12 9 6 15" : "6 9 12 15 18 9"
												}
											/>
										</svg>
									</span>
								</button>
								<div
									className={`${styles.faqAnswer} ${openFaq === i ? styles.faqAnswerOpen : ""}`}>
									<p>{faq.a}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Testimonials />
			<Newsletter />
		</main>
	);
};

export default PricingPage;
