import { useContext } from "react"

interface Toggle{
    blub:boolean
}

export const Blub = useContext<Toggle>(false)