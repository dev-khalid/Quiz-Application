import React from 'react';
import classes from '../styles/Video.module.css';
import image from '../assets/images/3.jpg'; 

const Videos = () => {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt='video title' />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Videos;

/**
 * monolyth - one database 1M user - 10M (not possible)
 * microservice - distributed server  
 * node.js firebase
 * connect firebase to visual studio code 
 * 
 * 
 * 
 * 
 * System Design 
 * distributed server - latency more 
 * load balancer 
 * database partition (system design)
 * caching - radis 
 * cdn 
 * message queue 
 * 
 */