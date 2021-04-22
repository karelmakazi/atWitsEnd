import React from 'react'

const answerButton = 'focus:outline-none'

function Answer ({ answer, setAnswer, questionIndex, setQuestionIndex }) {
  const processAnswer = () => {
    setAnswer(answer.status)
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <div>
      <button className={answerButton}onClick={() => processAnswer()}>{answer.answer}</button>
    </div>
  )
}

export default Answer
