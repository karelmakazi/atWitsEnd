import React, { useEffect, useState } from 'react'
import { getQuestions } from '../apis/questions'


function Quiz({category}){

  const [questionList, setQuestionList] = useState('wait')
  const [questionIndex, setQuestionIndex] = useState(0)

  useEffect(() => {
    getQuestions(category.catNumber)
    .then(result => setQuestionList(result))
  }, [] )

  questionList != 'wait' && console.log(questionList);

  return(
    <div className=''>
      <h1>{category.catName}</h1>
      <h3>{questionList[questionIndex].question}</h3>
      {questionList != 'wait' && questionList[questionIndex].answerArray.map((answer, index)=> {
      return <h4 key={index}><button key={questionIndex}>{answer.answer}</button></h4>
      })}
        
    </div>
  )
}

export default Quiz