import { useEffect, useRef, useState } from 'react'



export const UsePrev = () => {

  const prevHook = (value:number) => {
  const ref  = useRef(0)
  
  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}


  const [count,setCount] = useState<number>(0)
  const ans = prevHook(count)

  return <div>
      <div>count : {count}</div>
      <div>prev : {ans}</div>
      <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
  
}