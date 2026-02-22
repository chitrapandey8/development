import React, { useEffect, useState } from 'react'
interface Iuser{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}


const Datafetching = () => {

    const [data, setdata] =  useState<Iuser[]>([])
    useEffect(()=>{
        async function main(){
            const data1 = await fetch('https://jsonplaceholder.typicode.com/todos')
            const res = await data1.json();

            if(res){
                setdata(res)
            }
        }
        main()
    },[])
  return (
    <div>
        {
            data.map((m)=>{
                return <div>{m.title}</div>
            })
        }

      
    </div>
  )
}

export default Datafetching
