import dr from '../assets/hello.jpg'
import React from 'react'

type PersonInfo = {
  title: string;
  description: string;
};

const ambedkarData: PersonInfo[] = [
  {
    title: "Introduction",
    description:
      "Dr. Bhimrao Ramji Ambedkar (1891–1956), popularly known as Babasaheb Ambedkar, was a great leader, social reformer, and the chief architect of the Indian Constitution."
  },
  {
    title: "Early Life and Education",       
    description:
      "He was born on 14 April 1891 in Mhow, Madhya Pradesh. Despite facing social discrimination, he completed higher education from Columbia University and the London School of Economics."
  }
];

const Mainpage = () => {

  return (
    <div className=' flex'>
    <div className='  h-screen w-1/2  px-8 py-10 '>
      <img className=' w-full h-full object-cover rounded-2xl shadow-lg shadow-gray-600' src={dr} alt='snjj'></img> 
    </div>
    <div className=' flex  w-1/2 items-center flex-col justify-evenly'>
       {
        ambedkarData.map(({title, description})=>(
          <div key={title}>
            <div>{title}</div>
            <div>{description}</div>
          </div>
        ))
       }
    </div>
    </div>
  )
}

export default Mainpage
