import React, { useState } from 'react'

const localstoragegegeg = () => {
    const [value,setValue] = useState(()=>{
        const data = localStorage.getItem(value)
        return 
    })

  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)} />
    </div>
  )
}

export default localstoragegegeg
