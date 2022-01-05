import React from 'react';
import classes from '../styles/Ansers.module.css';
import Checkbox from './Checkbox';
const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className={classes.answer}
          text={option.title}
          value={index}
          checked={options.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
