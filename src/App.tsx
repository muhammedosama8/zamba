import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FeaturePage from "./pages/FeaturePage/FeaturePage";
import PricingPage from "./pages/PricingPage/PricingPage";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Integrations from "./pages/Integrations/Integrations";
import IntegrationSingle from "./pages/IntegrationSingle/IntegrationSingle";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import { useGSAPScroll } from "./hooks/useGSAPScroll";
import "./styles/global.scss";

const AUTH_ROUTES = ["/signin", "/signup"];

// ── Page transition variants ─────────────────────────────────────────────────
const pageVariants = {
	initial: { opacity: 0, y: 18, filter: "blur(4px)" },
	animate: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.45, ease: "easeOut" as const },
	},
	exit: {
		opacity: 0,
		y: -12,
		filter: "blur(4px)",
		transition: { duration: 0.3, ease: "easeIn" as const },
	},
};

// ── Scroll to top on route change ────────────────────────────────────────────

// ── GSAP ScrollTrigger init ──────────────────────────────────────────────────
function GSAPScrollInit() {
	const { pathname } = useLocation();
	useGSAPScroll(pathname);
	return null;
}

// ── Animated page wrapper ────────────────────────────────────────────────────
function PageWrapper({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			style={{ willChange: "opacity, transform, filter" }}>
			{children}
		</motion.div>
	);
}

// ── Layout with Navbar / Footer ──────────────────────────────────────────────
function Layout({ children }: { children: React.ReactNode }) {
	const { pathname } = useLocation();
	const isAuth = AUTH_ROUTES.includes(pathname);
	if (isAuth) return <>{children}</>;
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}

// ── Animated routes ──────────────────────────────────────────────────────────
function AnimatedRoutes() {
	const location = useLocation();
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Layout>
			<GSAPScrollInit />
			{/* <AnimatePresence mode="wait"> */}
			<Routes location={location} key={location.pathname}>
				<Route
					path="/"
					element={
						<PageWrapper>
							<Home />
						</PageWrapper>
					}
				/>
				<Route
					path="/about"
					element={
						<PageWrapper>
							<About />
						</PageWrapper>
					}
				/>
				<Route
					path="/features"
					element={
						<PageWrapper>
							<FeaturePage />
						</PageWrapper>
					}
				/>
				<Route
					path="/pricing"
					element={
						<PageWrapper>
							<PricingPage />
						</PageWrapper>
					}
				/>
				<Route
					path="/blog"
					element={
						<PageWrapper>
							<Blog />
						</PageWrapper>
					}
				/>
				<Route
					path="/blog/:id"
					element={
						<PageWrapper>
							<BlogDetails />
						</PageWrapper>
					}
				/>
				<Route
					path="/contact"
					element={
						<PageWrapper>
							<Contact />
						</PageWrapper>
					}
				/>
				<Route
					path="/projects"
					element={
						<PageWrapper>
							<Projects />
						</PageWrapper>
					}
				/>
				<Route
					path="/projects/:id"
					element={
						<PageWrapper>
							<ProjectDetails />
						</PageWrapper>
					}
				/>
				<Route
					path="/integrations"
					element={
						<PageWrapper>
							<Integrations />
						</PageWrapper>
					}
				/>
				<Route
					path="/integrations/:id"
					element={
						<PageWrapper>
							<IntegrationSingle />
						</PageWrapper>
					}
				/>
				<Route
					path="/testimonials"
					element={
						<PageWrapper>
							<TestimonialsPage />
						</PageWrapper>
					}
				/>
				<Route
					path="/signin"
					element={
						<PageWrapper>
							<SignIn />
						</PageWrapper>
					}
				/>
				<Route
					path="/signup"
					element={
						<PageWrapper>
							<SignUp />
						</PageWrapper>
					}
				/>
				<Route
					path="*"
					element={
						<PageWrapper>
							<NotFound />
						</PageWrapper>
					}
				/>
			</Routes>
			{/* </AnimatePresence> */}
		</Layout>
	);
}

// ── Root app ─────────────────────────────────────────────────────────────────
function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		document.getElementById("html-loader")?.remove();
	}, []);

	return (
		<BrowserRouter>
			<CustomCursor />
			<AnimatedRoutes />
			<AnimatePresence>
				{loading && (
					<LoadingScreen key="loader" onComplete={() => setLoading(false)} />
				)}
			</AnimatePresence>
		</BrowserRouter>
	);
}

export default App;
