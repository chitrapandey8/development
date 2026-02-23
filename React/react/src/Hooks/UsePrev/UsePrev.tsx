import { useEffect, useRef, useState } from 'react'

const usePrev = (value:number)=>{
  const ref = useRef(0)
  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}


const UsePrev = () => {
  const [count,setCount] = useState<number>(0)
  const value = usePrev(count) 
  return (
    <div>
      count:{count}
      <h1>{value}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UsePrev
