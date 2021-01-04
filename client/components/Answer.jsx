import React from 'react'

function Answer({answer, setAnswer, questionIndex, setQuestionIndex}) {

  let processAnswer = () => {
    setAnswer(answer.status)
    setQuestionIndex(questionIndex + 1)
  }
  
  return(
    <div className='answer-hstack__button-card'>
      <button onClick={()=> processAnswer()}>{answer.answer}</button>
    </div>
    )
}

export default Answer

