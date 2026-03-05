import { useEffect, useRef, useState } from "react"

export const useDebounce = (value:string,time:number) => {
  const [debounceValue,setDebounceValue] = useState(value)
  const ref = useRef<number|null>(0)
  
  useEffect(()=>{

    ref.current = setTimeout(()=>{
      setDebounceValue(value)
    },time*1000)

    return ()=>{
      clearTimeout(ref.current!)
    }
    
  },[value,time])

  return debounceValue
}