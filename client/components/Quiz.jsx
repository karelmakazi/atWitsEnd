import React, { useEffect, useState } from 'react'
import { getQuestions } from '../apis/questions'

import Answer from './Answer'


function Quiz({category}){

  const [questionList, setQuestionList] = useState('wait')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answerStatus, setAnswer] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    getQuestions(category.catNumber)
    .then(result => setQuestionList(result))
  }, [] )


  questionList != 'wait' && console.log(questionList);

  return(
    <div className=''>
      <div className=''>
        <h1>{category.catName}</h1>
        <h3>Score: {score}</h3>
      </div>
      <div className=''>
        <h3>{questionList[questionIndex].question}</h3>
        {questionList != 'wait' && questionList[questionIndex].answerArray.map((answer, index)=> {
          return <Answer 
            key={index}
            questionIndex={questionIndex} 
            answer={answer}
            setQuestionIndex={setQuestionIndex}
            setAnswer={setAnswer}  
            />})}
      </div>
        
    </div>
  )
}

export default Quiz