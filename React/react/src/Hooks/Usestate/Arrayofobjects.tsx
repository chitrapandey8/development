import React, { useState } from 'react'

const Arrayofobjects = () => {

    const [cars,setcars] = useState([
        {id:1,name:"chitranshi"},
        {id:2,name:"chitra"},
        {id:3,name:"chii"},

    ])
function updatecar(){
    setcars(cars.map((i)=> i.id === 1 ? {...i,name:"dddddddddddddd"}:i))
}

  return (
    <div>
        {
            cars.map((c)=>(
               <div>
                <h1>{c.name}</h1>

               </div>
            ))

        }
      
      <button onClick={updatecar}>updateeeeeeee</button>
    </div>
  )
}

export default Arrayofobjects
