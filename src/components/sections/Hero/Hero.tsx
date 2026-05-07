import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { useLang } from "../../../context/LanguageContext";

const StarIcon = () => (
	<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
	</svg>
);
const PlayIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<polygon points="5 3 19 12 5 21 5 3" />
	</svg>
);

const Hero: React.FC = () => {
	const { t } = useLang();
	const h = t.hero;
	const heroRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const el = heroRef.current;
		if (!el) return;
		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY, currentTarget } = e;
			const target = currentTarget as HTMLElement;
			const { width, height, left, top } = target.getBoundingClientRect();
			const x = ((clientX - left) / width - 0.5) * 20;
			const y = ((clientY - top) / height - 0.5) * 20;
			const blob = target.querySelector(`.${styles.blob}`) as HTMLElement;
			if (blob) blob.style.transform = `translate(${x}px, ${y}px)`;
		};
		el.addEventListener("mousemove", handleMouseMove);
		return () => el.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<section className={styles.hero} ref={heroRef}>
			<div className={styles.bg}>
				<div className={styles.blob} />
				<div className={styles.grid} />
				<div className={styles.gradientBottom} />
			</div>

			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.badge}>
						<div className={styles.badgeDot} />
						<span>{h.badge}</span>
					</div>

					<h1 className={styles.headline}>
						{h.headline1} <span className={styles.accent}>{h.headline2}</span>{" "}
						{h.headline3}
					</h1>

					<p className={styles.subtext}>{h.subtext}</p>

					<div className={styles.stars}>
						<div className={styles.starIcons}>
							{[...Array(5)].map((_, i) => (
								<span key={i} className={styles.star}>
									<StarIcon />
								</span>
							))}
						</div>
						<span className={styles.starText}>
							<strong>{h.stars.split(" ")[0]}</strong>{" "}
							{h.stars.split(" ").slice(1).join(" ")}
						</span>
					</div>

					<div className={styles.cta}>
						<button className={styles.watchBtn}>
							<span className={styles.playBtn}>
								<PlayIcon />
							</span>
							{h.watchDemo}
						</button>
					</div>
				</div>

				<div className={styles.visual}>
					<div className={styles.visualCard}>
						<div className={styles.dashboardHeader}>
							<div className={styles.dots}>
								<span />
								<span />
								<span />
							</div>
							<span className={styles.dashboardTitle}>{h.dashboardTitle}</span>
						</div>
						<div className={styles.chartArea}>
							{[60, 80, 45, 90, 70, 85, 55, 95, 65, 75].map((ht, i) => (
								<div
									key={i}
									className={styles.bar}
									style={{ height: `${ht}%`, animationDelay: `${i * 0.08}s` }}
								/>
							))}
						</div>
						<div className={styles.metricsRow}>
							<div className={styles.metric}>
								<span className={styles.metricVal}>+28%</span>
								<span className={styles.metricLbl}>{h.growth}</span>
							</div>
							<div className={styles.metric}>
								<span className={styles.metricVal}>9.2k</span>
								<span className={styles.metricLbl}>{h.users}</span>
							</div>
							<div className={styles.metric}>
								<span className={styles.metricVal}>$42k</span>
								<span className={styles.metricLbl}>{h.revenue}</span>
							</div>
						</div>
						<div
							className={styles.statCard}
							style={{
								top: "-20px",
								right: "-20px",
								animationDelay: "0.3s",
								position: "absolute",
							}}>
							<span className={styles.statValue}>{h.stat1Val}</span>
							<span className={styles.statLabel}>{h.stat1Lbl}</span>
						</div>
						<div
							className={styles.statCard}
							style={{
								bottom: "-20px",
								left: "-20px",
								animationDelay: "1.5s",
								position: "absolute",
							}}>
							<span className={styles.statValue}>{h.stat2Val}</span>
							<span className={styles.statLabel}>{h.stat2Lbl}</span>
						</div>
					</div>

					<div className={styles.avatarStack}>
						{[
							"https://i.pravatar.cc/32?img=11",
							"https://i.pravatar.cc/32?img=25",
							"https://i.pravatar.cc/32?img=32",
							"https://i.pravatar.cc/32?img=47",
						].map((src, i) => (
							<img key={i} src={src} alt="user" className={styles.avatar} />
						))}
						<span className={styles.avatarMore}>+99</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
