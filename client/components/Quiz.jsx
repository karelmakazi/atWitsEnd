import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuestions } from '../apis/questions'

import Answer from './Answer'

// LAYOUT STYLING
const quizPanel =
  'grid grid-cols-4 gap-2 auto-rows-max justify-center m-auto w-396 md:w-3/4 h-5/6 p-7 rounded-lg border-4 border-greenMid shadow-xl bg-black text-center'
const headingGridBlock = 'pb-3 md:pb-7 col-span-full row-span-3'
const optionsGridBlock =
  'col-span-full row-span-3 flex flex-col md:flex-row md:flex-wrap pt-4 border-t-2 border-greenMid'

// TYPOGRAPHY
const heading =
  'font-black uppercase text-greenMid text-7xl md:text-8xl lg:text-9xl'
const byLine =
  'px-4 md:px-24 lg:px-16  xl:px-44 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug text-textWhite'

function Quiz ({ category }) {
  const [questionList, setQuestionList] = useState('wait')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answerStatus, setAnswer] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    getQuestions(category.catNumber).then((result) => setQuestionList(result))
  }, [])

  useEffect(() => {
    answerStatus ? setScore(score + 1) : setScore(score)
  }, [questionIndex])

  return (
    <div className={quizPanel}>

      <div className={headingGridBlock}>
        <div>
          <h1 className={heading}>{category.catName}</h1>
          <h3 className={byLine}>Score: {score}</h3>
        </div>
      </div>

      <div className={optionsGridBlock}>
        {questionIndex < 20 && (
          <>
            <div className='questionGridBlock'>
              <h3 className={byLine}>{questionList[questionIndex].question}</h3>
            </div>

            <div className='answerGridBlock'>
              {questionList !== 'wait' &&
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
      </div>

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
