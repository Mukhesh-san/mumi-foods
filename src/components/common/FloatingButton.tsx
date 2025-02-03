import React from 'react';

type FloatingButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'forest' | 'outline';
  href?: string;
  type?: 'button' | 'submit';
};

export default function FloatingButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'forest',
  href,
  type = 'button'
}: FloatingButtonProps) {
  const variants = {
    forest: `
      backdrop-blur-sm bg-forest-600/90
      hover:bg-forest-700/90
      text-white
      border-forest-500
    `,
    outline: `
      backdrop-blur-sm bg-transparent
      hover:bg-forest-50/30
      text-forest-700
      border-forest-600
    `
  };

  const baseClasses = `
    transition-all duration-300 
    shadow-lg hover:shadow-xl 
    rounded-full px-8 py-3 
    border-2
    font-serif font-medium
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
}