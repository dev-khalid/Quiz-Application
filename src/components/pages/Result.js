import React from 'react'
import Summary from '../Summary'; 
import Analysis from '../Analysis'; 
import PrivateRoute from './PrivateRoute';
const Result = () => {
  PrivateRoute(); 
  return (
    <>
     <Summary />
     <Analysis /> 
    </>
  )
}

export default Result
