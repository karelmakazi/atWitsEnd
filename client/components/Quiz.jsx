import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuestions } from '../apis/questions'

import Answer from './Answer'

// LAYOUT STYLING
const quizPanel =
  'grid grid-cols-4 gap-2 grid-rows-6 justify-center m-auto w-3/4 h-5/6 p-7 rounded-lg border-4 border-greenMid shadow-lg bg-black '

const categoryGridBlock = 'bg-blueMid col-span-full row-span-2'
const questionGridBlock = 'bg-blueMid col-span-full row-span-2'
const answerGridBlock = 'bg-greenMid col-span-full row-span-2 flex flex-col md:flex-row md:flex-wrap'

//TYPOGRAPHY

function Quiz ({ category }) {
  const [questionList, setQuestionList] = useState('wait')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answerStatus, setAnswer] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    getQuestions(category.catNumber).then((result) => setQuestionList(result))
  }, [])

  useEffect(() => {
    console.log(answerStatus)
    answerStatus ? setScore(score + 1) : setScore(score)
  }, [questionIndex])

  return (
    <div className={quizPanel}>

      <div className={categoryGridBlock}>
        <h1>{category.catName}</h1>
        <h3>Score: {score}</h3>
      </div>

      {questionIndex < 20 && (
        <>
          <div className={questionGridBlock}>
            <h3>{questionList[questionIndex].question}</h3>
          </div>

          <div className={answerGridBlock}>
            {questionList != 'wait' &&
            questionList[questionIndex].answerArray.map((answer, index) => {
              return (
                <div key={index} className="quiz-stack__answer-hstack">
                  <Answer
                    questionIndex={questionIndex}
                    answer={answer}
                    setQuestionIndex={setQuestionIndex}
                    setAnswer={setAnswer}
                  />
                </div>
              )
            })}
          </div>
        </>
      )}

      {questionIndex === 20 && (
        <div className="quiz-report">
          <h3>You have completed the quiz with a score of {score}</h3>
          <Link to={'/'}>Home</Link>
        </div>
      )}

    </div>
  )
}

export default Quiz
