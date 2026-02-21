import React, { useState } from 'react'

const Array = () => {

    const [friend,setfriend] = useState<string[]>(['anurag','chitranshi','manoj','osheen'])

   function add(){
    setfriend([...friend,"sania"])
   }
   function remove(){
    setfriend(friend.filter((i)=>i !== 'osheen'))
   }
   function update(){
    setfriend(friend.map((i)=> i == "chitranshi" ? "sania" : i))
   }

  return (
    <div>
        <div>
            {
        // return keyword for curly bracekt
         friend.map((f)=>(
            <div>  
                {f}
            </div>
         ))
        }
        </div>
        <button onClick={add}>ADD</button>
        <button onClick={remove}>REMOVE</button>
         <button onClick={update}>UPDATE</button> 

    </div>
  )
}

export default Array
