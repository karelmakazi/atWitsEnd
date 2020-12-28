import React, { useContext } from 'react'
import categoryContext from '../context/categoryContext'
import categoryList from '../data/categoryList'

function Category(){

  const categorySelection = useContext(categoryContext)
  // const [selectedCategory, setCategory] = React.useState(null)


  const clickHandler = (selected)=> {
    console.log('You selected: ', selected.catName)
    categorySelection.setSelectedCategory({catName: selected.catName, catNumber: selected.catNumber})
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
           return <button key={index} onClick={()=> clickHandler(category)}>{category.catName}</button> 
        })}
      </div>
      
      
    </div>
  )
}

export default Category