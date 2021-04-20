import React from 'react'
import { Route } from 'react-router-dom'
import categoryContext from '../context/categoryContext.js'

import Category from './Category'
import Quiz from './Quiz'

// TEMP STYLING SOURCE
// IMAGE BACKGROUND
const backgroundWrapper = 'relative flex flex-col md:flex-row h-screen w-full font-squada select-none'
const backgroundStripDimensions = 'h-1/5 md:w-1/5 w-full md:h-screen '
const backgroundStripColours = ['blueDark', 'blueMid', 'blueLight', 'greenDark', 'greenMid']

// QUIZ
const quizWrapper = 'absolute flex z-10 h-screen w-screen bg-black bg-opacity-50 overflow-auto'

function backgroundCompiler (colour) {
  return backgroundStripDimensions + ` bg-${colour}`
}

function App () {
  const [selectedCategory, setSelectedCategory] = React.useState({
    catName: null,
    catNumber: null
  })

  return (
    <div className={backgroundWrapper}>
      {backgroundStripColours.map((colour, index) => {
        const compiledClass = backgroundCompiler(colour)
        return <div key={index} className={compiledClass}></div>
      })}

      <div className={quizWrapper}>
        <categoryContext.Provider
          value={{ selectedCategory, setSelectedCategory }}>
          <Route exact path="/">
            <Category setSelectedCategory={setSelectedCategory} />
          </Route>
          <Route path="/quiz">
            <Quiz category={selectedCategory} />
          </Route>
        </categoryContext.Provider>
      </div>
    </div>
  )
}

export default App
