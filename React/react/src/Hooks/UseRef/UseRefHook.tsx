import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const ref = useRef<HTMLInputElement | null>(null)

   useEffect(()=>{
    ref.current?.focus()
    ref.current.value = "UseRefsss"
   },[])

  return (
    <div>
      <input ref={ref} placeholder='Enter value' type='text' /> 
    </div>
  )
}

export default UseRefHook
