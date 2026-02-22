import React, { useEffect, useState } from 'react'

const Useeffecthook = () => {

    const [state,setstate] = useState(0)

    function addd(){
        setstate(state+1)
    }
     
    useEffect(()=>{
      if(state>10){
        document.body.style.backgroundColor = 'blue'
      }
    },[state])
  return (
    
    <div>
        {state}
      <button onClick={addd}>add</button>
    </div>
  )
}

export default Useeffecthook

