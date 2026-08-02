import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 cursor-pointer select-none shadow-sm hover:shadow-lg';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#FF4747] to-[#FF8A00] text-white hover:-translate-y-0.5 focus:ring-[#FF4747]/30 shadow-[#FF4747]/20',
    secondary: 'bg-gradient-to-r from-[#10B981] to-[#047857] text-white hover:-translate-y-0.5 focus:ring-[#10B981]/30 shadow-[#10B981]/20',
    outline: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-200 shadow-slate-100',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-none hover:shadow-none',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2 rounded-xl',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon}
        <span>{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <span>{children}</span>
    </motion.button>
  );
};

export default Button;
