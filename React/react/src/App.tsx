import { useEffect, useState, type ChangeEvent } from "react"
import { useDebounce } from "./Hooks/UseDebounce/UseDebouncee"

const App = () => {
  const [inputValue,setInputValue] = useState<string>("")
  const debounceValue =  useDebounce(inputValue,1)

  function onChangeHandler(e:ChangeEvent<HTMLInputElement>){
    setInputValue(e.target.value)
  }

  useEffect(()=>{
    console.log("Backend Called");
  },[debounceValue])

  return (
    <div>
      <input type="text" placeholder="Enter Whatever" onChange={onChangeHandler}  />    
    </div>
  )
}

export default App