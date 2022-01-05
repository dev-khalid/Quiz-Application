import React from 'react'
import Summary from '../Summary'; 
import Analysis from '../Analysis'; 
// import PrivateRoute from './PrivateRoute';
import { useLocation, useParams } from 'react-router-dom';

const Result = () => {
  // PrivateRoute(); 
  const {id} = useParams(); 
  const {state} = useLocation(); 
  return (
    <>
     <Summary />
     <Analysis /> 
    </>
  )
}

export default Result
