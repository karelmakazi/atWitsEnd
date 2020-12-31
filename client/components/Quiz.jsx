import React, { useEffect } from 'react'
import { getQuestions } from '../apis/questions'

function Quiz({category}){

  useEffect(() => {getQuestions(category.catNumber)}, [] )

  return(
    <div className=''>
      <h1>{category.catName}</h1>
    </div>
  )
}

export default Quiz