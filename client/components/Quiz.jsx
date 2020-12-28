import React from 'react'

function Quiz({category}){


  return(
    <div className=''>
      <h1>
        oh hai {category.catName} or {category.catNumber}
      </h1>
    </div>
  )
}

export default Quiz