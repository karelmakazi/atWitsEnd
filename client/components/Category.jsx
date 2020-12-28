import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import categoryContext from '../context/categoryContext'
import categoryList from '../data/categoryList'

function Category(){

  const categorySelection = useContext(categoryContext)

  const clickHandler = (selected)=> {
    categorySelection.setSelectedCategory(
      {catName: selected.catName, catNumber: selected.catNumber}
      )
  }
  
  return(
    <div className=''>
      <div className=''>
        <h1> Quiz 2000</h1>
        <h3>Welcome to Quiz 2000 - 
          please select your category from the options below.</h3>
      </div>
      <div className=''>
        {categoryList.map((category, index)=> {
           return <button key={index} 
           onClick={()=> clickHandler(category)}>
           <Link to={'/quiz'}>{category.catName}</Link>
           </button> 
        })}
      </div>
      
      
    </div>
  )
}

export default Category