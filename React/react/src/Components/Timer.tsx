// import React, { useRef, useState } from 'react'

// const Timer = () => {
//   const [time,setTimer] = useState(0)
//   const refInterval = useRef<ReturnType<typeof setInterval > | null>(0)

//   function start(){
//     refInterval.current = setInterval(()=>{
//       setTimer((prev)=>prev+1)
//     },1000)
//   }
   
//   function stop(){
//     clearInterval(refInterval.current!)
//    setTimer(0)
   
//   }

//   return (
//     <div>
//       <div>{time}</div>
//       <button onClick={start}>start</button>
//       <button onClick={stop}>stop</button>
//     </div>
//   )
// }

// export default Timer


import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    
    const prev = (val:number) =>{
        const ref = useRef<number>(0)

        useEffect(()=>{
         ref.current = val
        },[val])

        return ref.current
    }
 

    const [count,setcount] = useState<number>(0);
    const Prev = prev(count) 
  return (
    <div>
        <div>{count}</div>
        <div>{Prev}</div>
        <button onClick={()=>setcount(count+1)}>ADD</button>
      
    </div>
  )
}

export default Timer
