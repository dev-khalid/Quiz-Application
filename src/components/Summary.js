import React from 'react';
import classes from '../styles/Summary.module.css';
import image from '../assets/images/success.png';
const Summary = ({ score, noq }) => {

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {/* TODO: We will fetch image from pexles dynamically later on. */}
      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
