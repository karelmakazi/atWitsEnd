import React from 'react'

function App(){

  const categoryList = [
    {catName: 'General Knowledge', catNumber: 9},
    {catName: 'History', catNumber: 23}, 
    {catName: 'Science & Nature', catNumber: 17}, 
    {catName: 'Geography', catNumber: 22},
    {catName: 'Animals', catNumber: 27}, 
    {catName: 'Film', catNumber: 11}]


  
  return(
    <div className=''>
      <div className=''>
        <h1> Quiz 2000</h1>
        <h3>Welcome to Quiz 2000 - 
          please select your category from the options below.</h3>
      </div>
      <div className=''>
        {categoryList.map((category, index)=> {
           return <h2 key={index}>{category.catName}</h2> 
        })}
      </div>

    </div>
  )
}

export default App