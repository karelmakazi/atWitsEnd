import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import categoryContext from '../context/categoryContext'
import categoryList from '../data/categoryList'

// LAYOUT STYLING
const quizPanel =
  'grid grid-cols-4 gap-2 auto-rows-max justify-center m-auto h-600 w-396 md:w-3/4 p-7 rounded-lg border-4 border-greenMid shadow-xl bg-black text-center'
const headingGridBlock = 'pb-3 md:pb-7 col-span-full row-span-3'
const optionsGridBlock =
  'col-span-full row-span-3 flex flex-col md:flex-row md:flex-wrap pt-4 border-t-2 border-greenMid'

// ELEMENT STYLING
const categoryButton =
  'flex-grow h-14 md:h-24 md:w-2/4 uppercase leading-tight text-4xl text-greenMid transition ease-out duration-500 hover:text-textWhite cursor-pointer select-none focus:outline-none '

// TYPOGRAPHY
const heading =
  'font-black uppercase text-greenMid text-7xl md:text-8xl lg:text-9xl'
const byLine =
  'px-4 md:px-24 lg:px-16  xl:px-44 text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-snug text-textWhite'

function Category () {
  const categorySelection = useContext(categoryContext)

  const clickHandler = (selected) => {
    categorySelection.setSelectedCategory({
      catName: selected.catName,
      catNumber: selected.catNumber
    })
  }

  const greetingText =
    "Welcome to At Wit's End - please \n select your category from the \n options below."

  return (
    <>
      <div className={quizPanel}>
        <div className={headingGridBlock}>
          <div>
            <h1 className={heading}>AT WIT's END</h1>
            <h3 className={byLine}>{greetingText}</h3>
          </div>
        </div>
        <div className={optionsGridBlock}>
          {categoryList.map((category, index) => {
            return (
              <button
                key={index}
                className={categoryButton}
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
