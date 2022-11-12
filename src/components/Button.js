import React from "react";

const Button = ({
  type = "button",
  href,
  alt,
  children,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <button type={type} {...rest}>
        <a href={href} alt={alt}>
          {children}
        </a>
      </button>
    </div>
  );
};

export default Button;
