import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getQuestions } from "../apis/questions"

import Answer from "./Answer"

// LAYOUT STYLING
const quizPanel =
  "grid grid-cols-4 gap-2 auto-rows-max justify-center m-auto w-396 md:w-3/4 h-5/6 p-7 rounded-lg border-4 border-greenMid shadow-xl bg-black text-center"

const categoryGridBlock =
  "col-span-full row-span-3 pb-2 md:pb-4 border-b-2 border-greenMid"

const questionGridBlock =
  "col-span-full row-span-2 pt-7 pb-10 border-b-2 border-greenMid"
const answerGridBlock =
  "col-span-full row-span-2 flex flex-col md:flex-row md:flex-wrap items-center"

// TYPOGRAPHY
const categoryName =
  "font-black uppercase text-greenMid text-6xl md:text-7xl lg:text-8xl"
const scoreAlert = "text-2xl md:text-3xl lg:text-4xl text-textWhite"
const tryAgain =
  "w-full pt-12 text-2xl md:text-3xl lg:text-4xl text-greenMid transition ease-out duration-500 hover:text-textWhite"

const quizReport =
  "w-full pt-12 text-3xl md:text-4xl lg:text-5xl text-textWhite justify-center"

// ELEMENTS
const answerButton =
  "flex-grow h-12 uppercase leading-tight text-3xl text-greenMid transition ease-out duration-500 hover:text-textWhite cursor-pointer select-none focus:outline-none"

const questionBody =
  "px-4 md:px-24 lg:px-16  xl:px-44 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug text-textWhite"

function Quiz({ category }) {
  const [questionList, setQuestionList] = useState("wait")
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
      <div className={categoryGridBlock}>
        <h1 className={categoryName}>{category.catName}</h1>
        <h3 className={scoreAlert}>Score: {score}</h3>
      </div>

      {questionIndex < 12 && (
        <>
          <div className={questionGridBlock}>
            <h3 className={questionBody}>
              {questionList[questionIndex].question}
            </h3>
          </div>

          <div className={answerGridBlock}>
            {questionList !== "wait" &&
              questionList[questionIndex].answerArray.map((answer, index) => {
                return (
                  <div key={index} className={answerButton}>
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

      {questionIndex === 12 && (
        <>
          <div className={answerGridBlock}>
            <h3 className={quizReport}>
              You have completed the quiz with a score of {score}
            </h3>
          </div>
          <div className={'col-span-full'}>
            <Link to={"/"}>
              <h3 className={tryAgain}>Try Again</h3>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz
