import { useState, type ChangeEvent } from 'react'

const Localstoragegegeg = () => {

  const [data,setData] = useState(()=>{
    const value = localStorage.getItem('data')
    return value ? JSON.parse(value) : " "
  })
    
   const [toggle,Settoggle] = useState<boolean>(false)

   function handlechange(e:ChangeEvent<HTMLInputElement>){
    const val = e.target.value
    setData(val)
    localStorage.setItem('data',JSON.stringify(val))

   }

  return (
    <div>
      
      <h1>
        {
          toggle ? <h1>{data}</h1> : <h1></h1>
        }
      </h1>

      <input type="text" onChange={handlechange} placeholder='enter' />
      <button onClick={()=>Settoggle((prev)=>!prev)}>TOGGLE TEXT</button>
      
    </div>
  )
}

export default Localstoragegegeg


