import React, { useContext } from 'react'
import { Blub } from './createcon'

const Blubb = () => {

  const {toggle} = useContext(Blub)
  console.log(toggle);
  

  return (
    <div>
       <div>{toggle ? "ON" : "OFF"}</div>
    </div>
  )
}

export default Blubb
