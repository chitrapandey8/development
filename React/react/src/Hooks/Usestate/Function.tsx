import React, { useState } from 'react'

const Function = () => {
  const [fun, setfun] = useState(()=>{
    const intialvaluev = Math.floor(Math.random()*(100-50));
    return intialvaluev
  })
   
  function Increment(){
    setfun((prev)=>prev+1)
  }
  function Decrement(){
    setfun((prev)=>prev-1)
  }

  return (
    <div>
      {fun}
      <div onClick={Increment}>+</div>
      <div onClick={Decrement}>-</div>
    </div>
  )
}

export default Function
