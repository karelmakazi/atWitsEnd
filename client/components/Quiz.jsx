import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  useEffect(()=>{
    console.log(answerStatus);
    answerStatus ? setScore(score + 1) : setScore(score)
  }, [questionIndex])


  return(
    <div className=''>
      <div className=''>
        <h1>{category.catName}</h1>
        <h3>Score: {score}</h3>
      </div>

      {questionIndex < 20 && <div className=''>
        <h3>{questionList[questionIndex].question}</h3>
        {questionList != 'wait' && questionList[questionIndex].answerArray.map((answer, index)=> {
          return <Answer 
            key={index}
            questionIndex={questionIndex} 
            answer={answer}
            setQuestionIndex={setQuestionIndex}
            setAnswer={setAnswer}  
            />})}
      </div>}

      {questionIndex === 20 && <div className=''>
        <h3>You have completed the quiz with a score of {score}</h3>
        <Link to={'/'}>Home</Link>
      </div>} 



    </div>
  )
}

export default Quiz