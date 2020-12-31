import React, { useEffect, useState } from 'react'
import { getQuestions } from '../apis/questions'


function Quiz({category}){

  const [questionList, setQuestionList] = useState('wait')

  useEffect(() => {
    getQuestions(category.catNumber)
    .then(result => setQuestionList(result))
  }, [] )

  questionList != 'wait' && console.log(questionList);

  return(
    <div className=''>
      <h1>{category.catName}</h1>
        
    </div>
  )
}

export default Quiz