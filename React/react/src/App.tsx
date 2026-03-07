// import { useEffect, useState, type ChangeEvent } from "react"
// import { useDebounce } from "./Hooks/UseDebounce/UseDebouncee"

import {  useState, type SubmitEventHandler } from "react"
import { Recipe } from "./store"

// const App = () => {
//   const [inputValue,setInputValue] = useState<string>("")
//   const debounceValue =  useDebounce(inputValue,1)

//   function onChangeHandler(e:ChangeEvent<HTMLInputElement>){
//     setInputValue(e.target.value)
//   }

//   useEffect(()=>{
//     console.log("Backend Called");
//   },[debounceValue])

//   return (
//     <div>
//       <input type="text" placeholder="Enter Whatever" onChange={onChangeHandler}  />    
//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {
  const {Recipes,add,remove,update} = Recipe()
  const [data,setdata] = useState('')


  function submithandler(e:SubmitEvent<HTMLFormElement>){
   e.preventDefault()
   add(data)
   setdata("")
  }

  return (
    <div>
      {Recipes.map(({id,name})=>(
        <h1>
       <h1 key={id}>{name}</h1>
       <button onClick={()=>remove(id)} >remove</button>
        </h1>

      ))}
       
       <form onSubmit={submithandler}>
        <input value={data} placeholder="add Recipe" onChange={(e)=>setdata(e.target.value)}/>
        <button type="submit">add</button>
       
       </form>
       
       <form onSubmit={}>
        <input/>
        <input/>
        <button type="submit" >Update</button>
       </form>

      
    </div>
  )
}

export default App

