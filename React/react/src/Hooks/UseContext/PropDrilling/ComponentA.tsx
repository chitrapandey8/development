import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { Data } from '../Usecontextt'

const ComponentA = () => {
    const name = "chitrannshi"
    const age = 19

  return (
    <div>
        <Data.Provider value={{name, age}}>
             <ComponentB></ComponentB>
        </Data.Provider>
     
    </div>
  )
}

export default ComponentA
