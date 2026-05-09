import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScroll(pathname: string) {
  useEffect(() => {
    // Kill all existing ScrollTriggers before re-initialising
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const timer = setTimeout(() => {
      // ── fade-up ─────────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('.fade-up').forEach((el) => {
        el.classList.remove('visible');
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      // ── slide-left ──────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('.slide-left').forEach((el) => {
        el.classList.remove('visible');
        gsap.fromTo(el,
          { opacity: 0, x: -60 },
          {
            opacity: 1, x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      // ── slide-right ─────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('.slide-right').forEach((el) => {
        el.classList.remove('visible');
        gsap.fromTo(el,
          { opacity: 0, x: 60 },
          {
            opacity: 1, x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      // ── scale-in ────────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('.scale-in').forEach((el) => {
        el.classList.remove('visible');
        gsap.fromTo(el,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1, scale: 1,
            duration: 0.7,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      // ── fade-in ─────────────────────────────────────────────────────────
      document.querySelectorAll<HTMLElement>('.fade-in').forEach((el) => {
        el.classList.remove('visible');
        gsap.fromTo(el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          },
        );
      });

      // ── Stagger delay helpers ────────────────────────────────────────────
      // Respect existing delay-N classes by reading computed transition-delay
      document.querySelectorAll<HTMLElement>('[class*="delay-"]').forEach((el) => {
        const match = el.className.match(/delay-(\d)/);
        if (match) {
          const delay = parseInt(match[1]) * 0.1;
          const st = ScrollTrigger.getById(el.id);
          if (!st) {
            const tween = gsap.getTweensOf(el)[0];
            if (tween) tween.delay(tween.delay() + delay);
          }
        }
      });

      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);
}
