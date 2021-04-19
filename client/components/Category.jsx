import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import categoryContext from '../context/categoryContext'
import categoryList from '../data/categoryList'

// LAYOUT STYLING
const quizPanel =
  'grid grid-cols-4 gap-2 grid-rows-6 justify-center m-auto w-3/4 h-5/6 p-7 rounded-lg border-4 border-greenMid shadow-xl bg-black text-center'

const headingGridBlock = 'col-span-full row-span-3 bg-greenDark'
// const byLineGridBlock = 'col-span-full row-span-1'
const optionsGridBlock =
  'bg-greenMid col-span-full row-span-3 flex flex-col md:flex-row md:flex-wrap'

// TYPOGRAPHY
const heading =
  'font-black uppercase text-greenMid text-7xl md:text-8xl lg:text-9xl'
const byLine =
  'px-10 md:px-24 lg:px-16  text-2xl md:text-3xl lg:text-4xl leading-snug text-white'
  // 'px-32 pb-32 text-xl whitespace-pre md:whitespace-normal md:text-4xl text-white'

function Category() {
  const categorySelection = useContext(categoryContext)

  const clickHandler = (selected) => {
    categorySelection.setSelectedCategory({
      catName: selected.catName,
      catNumber: selected.catNumber,
    })
  }

  const greetingText =
    "Welcome to At Wit's End - please \n select your category from the \n options below."

  return (
    <>
      <div className={quizPanel}>
        <div className={headingGridBlock}>
          <div className='bg-red-300'>

          <h1 className={heading}>AT WIT's END</h1>
          <h3 className={byLine}>{greetingText}</h3>

          </div>
        </div>
        {/* <div className={byLineGridBlock}>
        </div> */}

        <div className={optionsGridBlock}>
          {categoryList.map((category, index) => {
            return (
              <button
                key={index}
                className="bg-greenDark flex-grow md:w-2/4 font-semibold tracking-tight leading-tight text-lg md:text-xl cursor-pointer hover:text-orangeStrong"
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
