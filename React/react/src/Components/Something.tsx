import React, { type ReactNode } from 'react'

type Varients = "primary" | "secondary"
type Size = "sm" | "md" | "lg" 

type SizeType = Record<Size,string>
type VarientsType = Record<Varients,string>

Array.from

const Something = ({children,size,varient}:{
    children:ReactNode
    size:Size
    varient:Varients
}) => {


    const sizes:SizeType = {
        "sm":"w-10 h-5  ",
        "md":"w-20 h-5 px-5 py-5 flex justify-between items-center rounded-lg ",
        "lg":"w-30 h-5 ",
    }

    const varients:VarientsType = {
        "primary":" bg-orange-500",
        "secondary":" bg-blue-500"
    }

  return (
    <button className={`${varients[varient]} ${sizes[size]}`}>
        {children}
    </button>
  )
}

export default Something
