// import React, { Children, useCallback, useState, type ReactNode } from 'react'

// const Button1 = React.memo(({handlechange,children}:{
//  handlechange: ()=>void,
//  children:ReactNode
// })=>{
//   return <button onClick={handlechange}>{children}</button>
// })


// const Usecallbackk = () => {
  
//     const [count,setcount] = useState<number>(0);

//     const increment  = useCallback(()=>{
//         setcount(prev=>prev+1)
//     },[])

//   return (
//     <div>
//       <div>Count:  {count}</div>
//       <Button1 handlechange={increment}>Increment</Button1>
//     </div>
//   )
// }

// export default Usecallbackk

import React, { useCallback, useState, type ReactNode } from 'react'

const Button1 = React.memo(({handlechange,children}:{
  handlechange: () => void,
  children: ReactNode
})=>{
  return <button onClick={handlechange} >{children}</button>
})


const Usecallback = () => {

  const [count,setCount] = useState(0)
   
  const increment = useCallback(()=>{
    setCount(prev=>prev+1)
  },[])

  return (
    <div>
      <div>{count}</div>
      <Button1 handlechange={increment}>Add</Button1>
    </div>
  )
}

export default Usecallback




























