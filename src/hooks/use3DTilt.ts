import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TiltOptions {
  maxTilt?: number;    // degrees
  perspective?: number;
  glare?: boolean;
  scale?: number;
}

export function use3DTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const { maxTilt = 12, perspective = 900, scale = 1.04 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, 'rotateX', { duration: 0.5, ease: 'power2.out' });
    const yTo = gsap.quickTo(el, 'rotateY', { duration: 0.5, ease: 'power2.out' });
    const scaleTo = gsap.quickTo(el, 'scale', { duration: 0.4, ease: 'power2.out' });

    gsap.set(el, { transformPerspective: perspective, transformStyle: 'preserve-3d' });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      yTo(dx * maxTilt);
      xTo(-dy * maxTilt);
      scaleTo(scale);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
      scaleTo(1);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [maxTilt, perspective, scale]);

  return ref;
}
