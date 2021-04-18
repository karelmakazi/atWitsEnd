import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import categoryContext from '../context/categoryContext'
import categoryList from '../data/categoryList'

// TEMP STYLING
const quizPanel =
  'grid grid-cols-4 gap-2 grid-rows-6 justify-center m-auto w-3/4 h-4/6 p-7 rounded-lg border-4 border-orangeMid shadow-lg bg-black '

const headingBlock = 'col-span-full'

function Category () {
  const categorySelection = useContext(categoryContext)

  const clickHandler = (selected) => {
    categorySelection.setSelectedCategory({
      catName: selected.catName,
      catNumber: selected.catNumber
    })
  }

  const greetingText =
    'Welcome to Curious - please \n select your category from the \n options below.'

  return (
    <>
      <div className={quizPanel}>
        <div className="text-center h-2/4  border-b-0 md:border-b-2 border-orangeStrong">
          <h1 className="font-black uppercase text-6xl md:text-8xl text-animals mb-4 md:mb-0">
            AT WIT's END
          </h1>
          <h3 className=" font-semibold tracking-tight text-xl whitespace-pre md:whitespace-normal md:text-2xl text-orangeLight">
            {greetingText}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 h-4/6 p-7">
          {categoryList.map((category, index) => {
            return (
              <button
                className="font-semibold tracking-tight leading-tight text-lg md:text-xl cursor-pointer hover:text-orangeStrong"
                key={index}
                onClick={() => clickHandler(category)}
              >
                <Link to={'/quiz'}>{category.catName}</Link>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Category
