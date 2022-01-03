import classes from '../styles/Button.module.css'; 
import React from 'react'

const Button = ({className,children}) => {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}

export default Button
