import React from 'react'
import { Route } from 'react-router-dom'
import categoryContext from '../context/categoryContext.js'

import Category from './Category'
import Quiz from './Quiz'

function App () {
  const [selectedCategory, setSelectedCategory] = React.useState({
    catName: null,
    catNumber: null
  })

  return (
    <div className="flex flex-col h-screen bg-tealStrong font-spartan select-none">
      <categoryContext.Provider
        value={{ selectedCategory, setSelectedCategory }}
      >
        <Route exact path="/">
          <Category setSelectedCategory={setSelectedCategory} />
        </Route>
        <Route path="/quiz">
          <Quiz category={selectedCategory} />
        </Route>
      </categoryContext.Provider>
    </div>
  )
}

export default App
