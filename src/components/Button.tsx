'use client';

/**
 * Reusable button component with consistent styling
 * Follows SOLID principles with single responsibility
 */
import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = 'px-6 py-2 rounded-lg transition-colors font-medium';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
