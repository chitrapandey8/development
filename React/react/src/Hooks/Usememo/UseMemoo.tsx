import React, { useState } from 'react'
const Calulation = () => {
    const sum =  () =>{
      let i = 0;
      for(i = 0; i<1000000; i++){
        i = i + 1;
      } 
      return i;
    }

    const total = sum()
  
    return <p>sum: {total}</p>

}



const UseMemoo = () => {
    const [state,setstate] =  useState(0)

    function addd(){
     setstate(state+1)
    }
  return (
    <div>
        <Calulation></Calulation>
      <button onClick={addd}>Add</button>
    </div>
  )
}

export default UseMemoo
