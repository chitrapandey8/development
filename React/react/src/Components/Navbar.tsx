import React from 'react'
import Button from './Button'

const Navbar = () => {
    
  return (
    <div className=' flex justify-between items-center px-5 py-2.5 bg-pink-500' >
      {/* SECTION */}
      <div className='  flex justify-between gap-x-6 text-[1.4rem] font-serif' >
       <div>Main</div>
       <div>About</div>
       <div>Contact</div>
      </div>
      {/* SECTION */}
      <div>                              
         {/* jk yaha children h jo jo button mai pass karre h  */}
       <Button size={'sm'} varient={'Primary'} Disabled={true} >Sign up</Button>  
       <Button size={'sm'} varient={'Primary'} Disabled={true} >jk</Button>
       
      </div>
    </div>
  )
}

export default Navbar
