import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 font-semibold text-base rounded-none transition-all duration-300 cursor-pointer inline-block text-center";

  const variantStyles = {
    primary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black red-glow-hover",
    secondary:
      "bg-white text-black hover:bg-transparent hover:text-white border-2 border-white",
    ghost:
      "bg-transparent text-white hover:text-red-light border-2 border-transparent hover:border-red-glow",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
