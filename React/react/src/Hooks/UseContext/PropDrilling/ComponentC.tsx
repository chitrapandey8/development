import React, { useCallback, useContext } from 'react'
import { Data } from '../Usecontextt'

const ComponentC = () => {
 
  const {name, age} = useContext(Data)

  return (
    <div>
      {name}
      {age}
    </div>
  )
}

export default ComponentC
