import React, { useState } from 'react'

const Basic = () => {
     //basic syntax
    const [state,setstate]  = useState(0)

    function Increment(){
        setstate(state+1)
    }
    function Decrement(){
        setstate(state-1)
    }

  return (
    <div>
      
      {state}
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>

    </div>
  )
}

export default Basic
