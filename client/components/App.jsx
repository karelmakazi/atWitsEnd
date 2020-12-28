import React from 'react'
import { Route } from 'react-router-dom'
import categoryContext from '../context/categoryContext.js'

import Category from './Category'

function App(){

const [selectedCategory, setSelectedCategory] = React.useState({catName: null, catNumber: null})

  return(
    <div className=''>
      <categoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
        <Route exact path='/'>
          <Category setSelectedCategory={setSelectedCategory}/>
        </Route>
      </categoryContext.Provider>
    </div>
  )
}

export default App