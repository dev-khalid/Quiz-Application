import classes from '../styles/Button.module.css'; 
import React from 'react'

const Button = ({className,children,...rest}) => {
  return (
    <button {...rest} className={`${classes.button} ${className}`}>{children}</button>
  );
}

export default Button
