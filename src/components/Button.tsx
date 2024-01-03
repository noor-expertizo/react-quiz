import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', disabled = false, ...props }) => {
  const baseStyles = 'rounded focus:outline-none ';
  let colorStyles = '';

  switch (variant) {
    case 'primary':
      colorStyles = 'bg-black text-white hover:bg-gray-700 px-4 py-1 w-28';
      break;
    case 'secondary':
      colorStyles = 'bg-white border-2 border-black text-black hover:bg-slate-100 px-6 py-1 w-32';
      break;
    case 'success':
      colorStyles = 'bg-slate-200 border-2 border-black text-black hover:bg-slate-100 px-9 py-2';
      break;
    default:
      break;
  }

  return (
    <button
      className={`${baseStyles} ${colorStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
