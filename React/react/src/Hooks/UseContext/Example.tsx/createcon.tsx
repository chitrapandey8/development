import { createContext, useContext, type Dispatch, type SetStateAction } from "react"

interface Toggle{
    toggle:boolean
    settoggle: Dispatch<SetStateAction<boolean>>
        
    

}

export const Blub = createContext<Toggle>({
    toggle:false,
    settoggle() {}
})