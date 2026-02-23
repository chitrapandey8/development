import { createContext } from "react"

interface IUser{
    name:string
    age:number
}

export const Data = createContext<IUser>({
    name:"",
    age:0
})