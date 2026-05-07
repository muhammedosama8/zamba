import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'ghost', size = 'md', icon }) => {
  const classes = [styles.badge, styles[`badge--${variant}`], styles[`badge--${size}`]].join(' ');
  return (
    <span className={classes}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
