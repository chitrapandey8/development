import React from 'react'

const Admin  = () => <div>This is admin page</div>
const user  = () => <div>This is user page</div>

const Adminatuserpanel = ({data}:{
    data:"user" | "admin"
}
) => {
  return data === 'admin' ? Admin() : user()
}

export default Adminatuserpanel
