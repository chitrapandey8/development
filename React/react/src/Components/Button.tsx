import React, { type ReactNode } from 'react'

type Buttonsize = Record<ButtonVarientsTypes,string>
type ButtonVariant = Record<ButtonVarients,string>
type ButtonVarientsTypes = "sm" | "md" | "lg"
type ButtonVarients = "Primary" | "Secondary"
const Button = ({children,size,varient,Disabled}:{
    children:ReactNode
    size:ButtonVarientsTypes
    varient:ButtonVarients
    Disabled:boolean
}) => {


 const colors:Buttonsize = {
  "sm":"w-15 h-8 px-5 px-5 border rounded-md",
  "md":"w-20 h-5 px-5 px-5 border rounded-md",
  "lg":"w-20 h-5 px-5 px-5 border rounded-md"
 }
 const varientt:ButtonVariant = {
  "Primary":"bg-red-600 hover:bg-yellow-500 border-2",
  "Secondary":"bg-cyan-500 text-black hover:bg-pink-500"
 } 


  return (
    <button className={`${colors[size]} ${varientt[varient]}`} >
        {children}
    </button>
  )
}

export default Button

 