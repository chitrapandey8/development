import { useEffect, useRef, useState } from "react"

const Timer = () => {
  const [count, setcount] = useState(0)
  const [isactive, setActive] = useState(false)
  const intervalref = useRef(0)
  
useEffect(()=>{
  if(isactive){
    intervalref.current = setTimeout(()=>{
       setcount((prev)=>prev+1)
    },1000)
  }
})

function Restart(){
  setcount(0)
  setActive(true)
}
 

  return (


    <div>
     <div>{count}</div>
     
     <div><button onClick={()=>setActive((prev)=>!prev)}>start</button></div>
     <div> <button onClick={()=>setActive((prev)=>!prev)}>STOP</button></div>
     <div><button onClick={Restart}></button>RESTART</div>
    
    </div>
  )
}
export default Timer