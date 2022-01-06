import React from 'react'
import Summary from '../Summary'; 
import Analysis from '../Analysis';  
import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers'; 
import _ from 'lodash'; 
const Result = () => { 
  const {id} = useParams(); 
  const {state:qna} = useLocation(); 
  const {answers} = useAnswers(id); 
  //eikhane ansers and qna gulake check kore just analysis complte kote hobe . 
  function calculate() { 
    let score = 0; 
    answers.forEach((question,index1) => { 
      let correctIndexes = [], checkedIndexes = []; 
      question.options.forEach((option,index2) => { 
        if(option.correct) correctIndexes.push(index2); 
        if(qna[index1].options[index2].checked) { 
          checkedIndexes.push(index2); 
          option.checked = true; 
        }
      }); 
      if(_.isEqual(correctIndexes,checkedIndexes)){ 
        score += 5;
      }
    }); 

    return score; 
  }
  const userScore = calculate(); 

  return (
    <>
     <Summary score={userScore} noq={answers.length}/>
     <Analysis answers={answers}/> 
    </>
  )
}

export default Result
