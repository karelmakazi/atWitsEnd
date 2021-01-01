import React from 'react'

function Answer({answer, setAnswer, questionIndex, setQuestionIndex}) {

  let processAnswer = () => {
    console.log (answer.status)
    setAnswer(answer.status)
    setQuestionIndex(questionIndex + 1)
  }
  
    return(
    <>
    <button onClick={()=> processAnswer()}>{answer.answer}</button>
    </>
  )
}

export default Answer

