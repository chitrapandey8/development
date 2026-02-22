// import React, { useState } from 'react'

// const Arrayofobjects = () => {

//     const [cars,setcars] = useState([
//         {id:1,name:"chitranshi"},
//         {id:2,name:"chitra"},
//         {id:3,name:"chii"},

//     ])
// function updatecar(){
//     setcars(cars.map((i)=> i.id === 1 ? {...i,name:"dddddddddddddd"}:i))
// }

//   return (
//     <div>
//         {
//             cars.map((c)=>(
//                <div>
//                 <h1>{c.name}</h1>

//                </div>
//             ))

//         }
      
//       <button onClick={updatecar}>updateeeeeeee</button>
//     </div>
//   )
// }

// export default Arrayofobjects



import React, { useState } from 'react'

const Arrayofobjects = () => {

  const [name, stename] =  useState([
    {id:1,name:"chsihsus"},
    {id:2,name:"chsihsus"},
    {id:3,name:"chsihsus"},
    {id:4,name:"chsihsus"},
  ])

  function update(){
    stename(name.map((i)=> i.id === 2 ? {...i , name:"Dddddddddddddd"}:i))
  }
  return (
    <div>
      {
        name.map((i)=>(
          <div>{i.name}</div>
        ))
      }

      <button onClick={update}>UPDATE</button>
    </div>
  )
}

export default Arrayofobjects

