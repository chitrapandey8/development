import  { useEffect, useState, type ChangeEvent } from 'react'
import { UseDebouncee } from './UseDebouncee';

const Usedebounce = () => {
 const [inputvalue, setinputvalue] = useState<string>("")
 const debounce = UseDebouncee(inputvalue,1);

function onchangehandler(e:ChangeEvent<HTMLInputElement>){
   setinputvalue(e.target.value)
}

useEffect(()=>{
 console.log("backend called")
},[debounce])

  return (
    <div>
      <input type='text' placeholder='Enter whtever' onChange={onchangehandler} />
    </div>
  )
}

export default Usedebounce
