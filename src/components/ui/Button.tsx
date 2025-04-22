import { ReactNode } from 'react';
import { typography } from '@/styles/typography';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'fixed';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md transition-colors min-w-[173px] min-h-[60px]';
  
  const variantClasses = {
    primary: 'bg-gray-800 hover:bg-black text-white',
    secondary: 'bg-gray-100 hover:bg-gray-300 text-gray-800',
    outline: 'border border-gray-300 hover:border-gray-400 text-gray-800',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-3',
    lg: 'text-lg px-6 py-5',
    fixed: 'text-base w-[173px] h-[60px]',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${typography.button.primary}
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;