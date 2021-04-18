import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { options } from 'superagent'

import categoryContext from '../context/categoryContext'
import categoryList from '../data/categoryList'

// TEMP STYLING
const quizPanel =
  'grid grid-cols-4 gap-2 grid-rows-6 justify-center m-auto w-3/4 h-4/6 p-7 rounded-lg border-4 border-science shadow-lg bg-black '

const headingBlock = 'bg-earth col-span-full row-span-2 '
const byLineBlock = 'bg-science col-span-full'
const optionsBlock = 'bg-science col-span-full row-span-3 flex flex-col md:flex-row md:flex-wrap'

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
        <div className={headingBlock}>
          <h1 className="font-black uppercase text-6xl md:text-8xl text-animals mb-4 md:mb-0">
            AT WIT's END
          </h1>
        </div>
        <div className={byLineBlock}>
          <h3 className=" font-semibold tracking-tight text-xl whitespace-pre md:whitespace-normal md:text-2xl text-orangeLight">
            {greetingText}
          </h3>
        </div>

        <div className={optionsBlock}>
          {categoryList.map((category, index) => {
            return (

              <button
                key={index}
                className="bg-animals flex-grow md:w-2/4 font-semibold tracking-tight leading-tight text-lg md:text-xl cursor-pointer hover:text-orangeStrong"
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
