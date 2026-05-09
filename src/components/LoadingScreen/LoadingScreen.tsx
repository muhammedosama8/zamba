import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.scss";

interface Props {
	onComplete: () => void;
}

const LETTERS = ["Z", "A", "M", "B", "A"];
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
	id: i,
	x: `${Math.random() * 100}%`,
	y: `${Math.random() * 100}%`,
	size: Math.random() * 4 + 1,
	color:
		i % 3 === 0
			? "rgba(245,197,24,0.6)"
			: i % 3 === 1
				? "rgba(255,255,255,0.2)"
				: "rgba(245,197,24,0.3)",
}));

const LoadingScreen: React.FC<Props> = ({ onComplete }) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const panelTopRef = useRef<HTMLDivElement>(null);
	const panelBotRef = useRef<HTMLDivElement>(null);
	const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const progressRef = useRef<HTMLDivElement>(null);
	const countRef = useRef<HTMLSpanElement>(null);
	const taglineRef = useRef<HTMLParagraphElement>(null);
	const ring1Ref = useRef<HTMLDivElement>(null);
	const ring2Ref = useRef<HTMLDivElement>(null);
	const ring3Ref = useRef<HTMLDivElement>(null);
	const particlesRef = useRef<HTMLDivElement>(null);
	const dotsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// ── Rings pulse outward ───────────────────────────────────────────────
			gsap.fromTo(
				ring1Ref.current,
				{ scale: 0.8, opacity: 0.6 },
				{
					scale: 1.6,
					opacity: 0,
					duration: 0.3,
					repeat: -1,
					ease: "power2.out",
				},
			);
			gsap.fromTo(
				ring2Ref.current,
				{ scale: 0.8, opacity: 0.4 },
				{
					scale: 1.6,
					opacity: 0,
					duration: 1,
					repeat: -1,
					ease: "power2.out",
					delay: 0.5,
				},
			);
			gsap.fromTo(
				ring3Ref.current,
				{ scale: 0.8, opacity: 0.2 },
				{
					scale: 1.6,
					opacity: 0,
					duration: 1,
					repeat: -1,
					ease: "power2.out",
					delay: 0.75,
				},
			);

			// ── Particles drift ───────────────────────────────────────────────────
			if (particlesRef.current) {
				gsap.to(Array.from(particlesRef.current.children), {
					x: () => gsap.utils.random(-150, 150),
					y: () => gsap.utils.random(-150, 150),
					opacity: () => gsap.utils.random(0.1, 0.8),
					scale: () => gsap.utils.random(0.5, 2.5),
					duration: () => gsap.utils.random(1, 3),
					stagger: { each: 0.08, from: "random" },
					repeat: -1,
					yoyo: true,
					ease: "sine.inOut",
				});
			}

			// ── Main entrance timeline ────────────────────────────────────────────
			const tl = gsap.timeline({ delay: 0.15 });

			// Letters fly in with 3D flip
			tl.fromTo(
				letterRefs.current,
				{ opacity: 0, y: -60, rotateX: -90, transformPerspective: 600 },
				{
					opacity: 1,
					y: 0,
					rotateX: 0,
					stagger: 0.09,
					duration: 0.5,
					ease: "back.out(2)",
				},
			);

			// Letter glow breathe
			tl.to(
				letterRefs.current,
				{
					filter: "drop-shadow(0 0 30px rgba(245,197,24,0.9))",
					duration: 0.3,
					stagger: 0.05,
					yoyo: true,
					repeat: 1,
					ease: "power2.inOut",
				},
				"-=0.1",
			);

			// Tagline slides up
			tl.fromTo(
				taglineRef.current,
				{ opacity: 0, y: 12 },
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
				"-=0.2",
			);

			// ── Progress bar ──────────────────────────────────────────────────────
			const prog = { val: 0 };
			tl.to(
				prog,
				{
					val: 100,
					duration: 1,
					ease: "power1.inOut",
					delay: 0,
					onUpdate() {
						const v = Math.round(prog.val);
						if (countRef.current) countRef.current.textContent = `${v}%`;
						if (progressRef.current) progressRef.current.style.width = `${v}%`;
					},
					onComplete() {
						// Slight pause, then exit
						gsap.delayedCall(0.3, () => {
							const exit = gsap.timeline({ onComplete });

							// Letters fall back
							exit.to(letterRefs.current, {
								opacity: 0,
								y: 20,
								stagger: 0.04,
								duration: 0.3,
								ease: "power2.in",
							});
							exit.to(
								[taglineRef.current, dotsRef.current],
								{
									opacity: 0,
									duration: 0.2,
								},
								"<",
							);

							// Split-panel wipe
							exit.to(
								panelTopRef.current,
								{
									yPercent: -100,
									duration: 0.85,
									ease: "power3.inOut",
								},
								0.15,
							);
							exit.to(
								panelBotRef.current,
								{
									yPercent: 100,
									duration: 0.85,
									ease: "power3.inOut",
								},
								"<",
							);
						});
					},
				},
				"-=0.1",
			);
		}, overlayRef);

		return () => ctx.revert();
	}, [onComplete]);

	return (
		<div ref={overlayRef} className={styles.overlay}>
			{/* Split panels for exit wipe */}
			<div ref={panelTopRef} className={`${styles.panelTop}`} />
			<div ref={panelBotRef} className={`${styles.panelBot}`} />

			{/* Ambient */}
			<div className={styles.bgGlow} />
			<div className={styles.grid} />

			{/* Particles */}
			<div ref={particlesRef} className={styles.particles}>
				{PARTICLES.map((p) => (
					<div
						key={p.id}
						className={styles.particle}
						style={{
							left: p.x,
							top: p.y,
							width: p.size,
							height: p.size,
							background: p.color,
						}}
					/>
				))}
			</div>

			{/* Main content */}
			<div className={styles.content}>
				{/* Logo */}
				<div className={styles.logoWrap}>
					<div ref={ring1Ref} className={`${styles.ring} ${styles.ring1}`} />
					<div ref={ring2Ref} className={`${styles.ring} ${styles.ring2}`} />
					<div ref={ring3Ref} className={`${styles.ring} ${styles.ring3}`} />
					<div className={styles.logo}>
						{LETTERS.map((ch, i) => (
							<span
								key={i}
								ref={(el) => {
									letterRefs.current[i] = el;
								}}
								className={styles.letter}>
								{ch}
							</span>
						))}
					</div>
				</div>

				<p ref={taglineRef} className={styles.tagline}>
					Your Business. Supercharged.
				</p>

				{/* Progress */}
				<div className={styles.progressWrap}>
					<div className={styles.progressTrack}>
						<div ref={progressRef} className={styles.progressFill} />
					</div>
					<div className={styles.countRow}>
						<span className={styles.loadingLabel}>Loading</span>
						<span ref={countRef} className={styles.count}>
							0%
						</span>
					</div>
				</div>

				{/* Bouncing dots */}
				<div ref={dotsRef} className={styles.dots}>
					<div className={styles.dot} />
					<div className={styles.dot} />
					<div className={styles.dot} />
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
