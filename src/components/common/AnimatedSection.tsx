import React from 'react';
import { useInView } from '../../hooks/useInView';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'}
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}