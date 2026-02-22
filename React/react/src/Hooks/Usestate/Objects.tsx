// import React, { useState } from 'react'

// const Array = () => {

//     const [friend,setfriend] = useState<string[]>(['anurag','chitranshi','manoj','osheen'])

//    function add(){
//     setfriend([...friend,"sania"])
//    }
//    function remove(){
//     setfriend(friend.filter((i)=>i !== 'osheen'))
//    }
//    function update(){
//     setfriend(friend.map((i)=> i == "chitranshi" ? "sania" : i))
//    }

//   return (
//     <div>
//         <div>
//             {
//         // return keyword for curly bracekt
//          friend.map((f)=>(
//             <div>  
//                 {f}
//             </div>
//          ))
//         }
//         </div>
//         <button onClick={add}>ADD</button>
//         <button onClick={remove}>REMOVE</button>
//          <button onClick={update}>UPDATE</button> 

//     </div>
//   )
// }

// export default Array


import React, { useState } from 'react'

const Objects = () => {

    const  [name, setname] =  useState<string[]>(['A','B','C','D'])
    
    function add(){
        setname([...name,"sania"])
    }
    function remove(){
        setname(name.filter((i)=> i != 'A'))
    }
    function update(){
        setname(name.map((i) => i === 'B'? "mmmdmdmd":i))
    }

  return (
    <div>
      {
        name.map((i)=>(
            <div>
                {i}
            </div>
        ))
      }
    <button onClick={add}>ADD</button>
    <button onClick={remove}>REMOVE</button>
    <button onClick={update}>DELETE</button>
    </div>
  )
}

export default Objects
