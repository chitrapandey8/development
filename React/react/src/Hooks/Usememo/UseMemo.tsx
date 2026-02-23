import React, { useMemo, useState } from 'react'

const Expensive = () =>{
    const sum = () =>{
        console.log("calculating sum....");

        let i = 0;
        for(i = 0;  i<10000000000000000; i++){
            i = i +1;
        }
        return i;
        
    }

    const total = sum()

    return <p>sum : {total}</p>
}




//parent
const UseMemo = () => {

    const [count,setcount] = useState(0)
    function add(){
        setcount(count+1)
    }
    
  return (
    <div>
        <Expensive></Expensive>

        <button onClick={add}>ADDDDDD</button>

        <div>Parent rerenders {count}</div>
      
    </div>
  )
}

export default UseMemo
