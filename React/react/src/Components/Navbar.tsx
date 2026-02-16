import React from 'react'
import Button from './Button'

const Navbar = () => {
    
  return (
    <div>
      {/* SECTION */}
      <div>
       <div>Main</div>
       <div>About</div>
       <div>Contact</div>
      </div>
      {/* SECTION */}
      <div>
       <Button size={'sm'} varient={'Primary'} Disabled={true} >jk</Button>
       <Button size={'md'} varient={'Secondary'} Disabled={true} >jk</Button>
       
      </div>
    </div>
  )
}

export default Navbar
