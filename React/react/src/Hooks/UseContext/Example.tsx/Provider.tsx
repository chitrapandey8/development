import React, { useState } from 'react'
import { Blub } from './createcon'
import Blubb from './Blubb';
import Switch from './Switch';

const Provider = () => {
const [toggle, settoggle] = useState<boolean>(false);
    
  return (
    <div>
      <Blub.Provider value={{toggle,settoggle}}>
        <Blubb></Blubb>
        <Switch></Switch>
      </Blub.Provider>
    </div>
  )
}

export default Provider
