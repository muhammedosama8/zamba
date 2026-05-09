import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.scss';

const CustomCursor: React.FC = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xDot  = gsap.quickTo(dot,  'x', { duration: 0.08, ease: 'none' });
    const yDot  = gsap.quickTo(dot,  'y', { duration: 0.08, ease: 'none' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    window.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll('a, button, [data-hover]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div className={`${styles.cursor} ${hovering ? styles.expanded : ''}`}>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </div>
  );
};

export default CustomCursor;
