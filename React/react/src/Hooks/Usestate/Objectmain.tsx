import React, { useState } from 'react'

interface Iuser{
    name:string
    age:number
}

const Objectmain = () => {
   
    const [user,setuser] = useState<Iuser>({
        name:"chitarnshi",
        age:1
    })

    function update(){
        setuser({...user,age:user.age +1})
    }

  return (
    <div>
         <h1>NAME:{user.name}</h1>
         <h1>AGE:{user.age}</h1>
         <button onClick={update}>ADD</button>
      
    </div>
  )
}

export default Objectmain
