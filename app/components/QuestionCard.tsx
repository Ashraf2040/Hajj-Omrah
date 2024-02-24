import React from 'react'

 function QuestionCard({question} :any) {
  return (
    <div className='border-2 rounded-lg py-2  leading-6 font-semibold text-md cursor-pointer text-center '>
      <p>{question}</p>
    </div>
  )
}



export default QuestionCard