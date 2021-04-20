import React from 'react'

// ELEMENT STYLING
const categoryButton =
  'flex-grow h-14 md:h-24 md:w-2/4 uppercase leading-tight text-2xl text-greenMid transition ease-out duration-500 hover:text-textWhite cursor-pointer select-none focus:outline-none '

function Answer ({ answer, setAnswer, questionIndex, setQuestionIndex }) {
  const processAnswer = () => {
    setAnswer(answer.status)
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <div>
      <button className={categoryButton} onClick={() => processAnswer()}>{answer.answer}</button>
    </div>
  )
}

export default Answer
