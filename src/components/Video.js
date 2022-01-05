import React from 'react';
import classes from '../styles/Video.module.css'; 

const Videos = ({title,id,noq}) => {
  //TODO: here the quiz page is not benig rendered without the id so no problem with that . when the data will come from backend each video will must have an id . 
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Points: {noq * 5}</p>
      </div>
    </div>
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