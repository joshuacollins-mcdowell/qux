import React from 'react';
import cx from "classnames";

import './button.scss';

type ButtonTypes = "primary" | "primary-danger" | "primary-success" | "disabled" | "secondary" | "secondary-danger" | "secondary-disabled";

export interface ButtonProps {
  children: React.ReactNode;
  type: ButtonTypes;
}

const Button = ({ children, type, ...otherProps }: ButtonProps) => {
  return(
    <div>
      <button 
        {...otherProps}
        type="button"
        className={cx({
          "button": true,
          "primary": !type || type === "primary",
          "primary danger": type === "primary-danger",
          "primary success": type === "primary-success",
          "primary disabled": type === "disabled",
          "secondary": type === "secondary",
          "secondary danger": type === "secondary-danger",
          "secondary disabled": type === "secondary-disabled"
        })}
      >
          {children}
      </button>
    </div>
  )
}

export default Button