import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Integrations.module.scss";
import { useLang } from "../../context/LanguageContext";
import Newsletter from "../../components/sections/Newsletter/Newsletter";

const Integrations: React.FC = () => {
	const { t } = useLang();
	const ig = t.integrations;
	const [search, setSearch] = useState("");
	const [activeCategory, setActiveCategory] = useState<string>(
		ig.categories[0],
	);

	const filtered = ig.items.filter((item) => {
		const matchCat =
			activeCategory === ig.categories[0] || item.category === activeCategory;
		const matchSearch =
			item.name.toLowerCase().includes(search.toLowerCase()) ||
			item.desc.toLowerCase().includes(search.toLowerCase());
		return matchCat && matchSearch;
	});

	return (
		<>
			<main className={styles.page}>
				{/* Hero */}
				<section className={styles.hero}>
					<div className={styles.heroInner}>
						<span className={styles.badge}>{ig.badge}</span>
						<h1 className={styles.title}>
							{ig.title} <span className={styles.accent}>{ig.titleAccent}</span>
						</h1>
						<p className={styles.desc}>{ig.desc}</p>

						<div className={styles.searchWrap}>
							<svg
								className={styles.searchIcon}
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round">
								<circle cx="11" cy="11" r="8" />
								<line x1="21" y1="21" x2="16.65" y2="16.65" />
							</svg>
							<input
								type="text"
								placeholder={ig.searchPlaceholder}
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className={styles.search}
							/>
						</div>
					</div>
				</section>

				{/* Content */}
				<section className={styles.content}>
					<div className={styles.container}>
						<div className={styles.filters}>
							{ig.categories.map((cat) => (
								<button
									key={cat}
									className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
									onClick={() => setActiveCategory(cat)}>
									{cat}
								</button>
							))}
						</div>

						<div className={styles.grid}>
							{filtered.map((item, i) => (
								<Link
									key={item.id}
									to={`/integrations/${item.id}`}
									className={`${styles.card} fade-up delay-${(i % 4) + 1}`}>
									<div className={styles.cardTop}>
										<span className={styles.icon}>{item.icon}</span>
										<div className={styles.badges}>
											{item.popular && (
												<span className={styles.popularBadge}>
													{ig.popular}
												</span>
											)}
										</div>
									</div>
									<h3 className={styles.cardName}>{item.name}</h3>
									<span className={styles.cardCategory}>{item.category}</span>
									<p className={styles.cardDesc}>{item.desc}</p>
									<button className={styles.connectBtn}>{ig.viewDocs}</button>
								</Link>
							))}
						</div>
					</div>
				</section>
			</main>
			<Newsletter />
		</>
	);
};

export default Integrations;
