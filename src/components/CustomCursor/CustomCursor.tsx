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

    const onEnter = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) setHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) setHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
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
