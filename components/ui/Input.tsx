import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-light uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 bg-black-graphite border border-gray-mid
          text-white-off text-base
          focus:outline-none focus:border-red-light focus:shadow-[0_0_10px_hsla(0,100%,50%,0.3)]
          transition-all duration-300
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-light uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 bg-black-graphite border border-gray-mid
          text-white-off text-base
          focus:outline-none focus:border-red-light focus:shadow-[0_0_10px_hsla(0,100%,50%,0.3)]
          transition-all duration-300
          resize-vertical min-h-[120px]
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
