import { Blub } from "./createcon"
import Switchh from "./Blubb"
import { useContext } from "react"

const Switch = () => {
  const {toggle,settoggle} =  useContext(Blub)
  return (
    <div>
     <button onClick={()=> settoggle(!toggle)}>switch</button>
    </div>
  )
}

export default Switch
