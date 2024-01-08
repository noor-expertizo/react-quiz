import React from "react";
import { ButtonProps } from "./types";


const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "rounded focus:outline-none px-4 py-2 w-56 text-[12px] font-medium";

  const variantStyles: { [key: string]: string } = {
    secondary: "bg-black text-white hover:bg-gray-700",
    primary: "bg-[#ededed] border-2 border-black text-black hover:bg-slate-100",
    success: "bg-slate-200 border-2 border-black text-black hover:bg-slate-100",
  };

  const colorStyles = variantStyles[variant] || "";

  const finalStyles = `${baseStyles} ${colorStyles}`;

  return (
    <button
      className={`${finalStyles} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;


  // const baseStyles = "rounded focus:outline-none ";
  // let colorStyles = '';

  // switch (variant) {
  //   case 'secondary':
  //     colorStyles = 'bg-black text-white hover:bg-gray-700 px-4 py-2 w-56  text-[12px] font-medium ';
  //     break;
  //   case 'primary':
  //     colorStyles = 'bg-[#ededed] border-2 border-black text-black hover:bg-slate-100 px-6 py-2 w-56 text-[12px] font-medium ';
  //     break;
  //   case 'success':
  //     colorStyles = 'bg-slate-200 border-2 border-black text-black hover:bg-slate-100 px-9 py-2  text-[12px] font-medium ';
  //     break;
  //   default:
  //     break;
  // }