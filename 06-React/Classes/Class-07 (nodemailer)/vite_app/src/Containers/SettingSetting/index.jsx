import React from 'react'
import { userContextData } from '../Context/Auth/Authcontext'

export default function Setting() {

    const { users } = userContextData()
    // const Data = JSON.parse(sessionStorage.getItem("Data"));
    

  return (
    <div>
        <p>Full Name: {users}</p>
    </div>
  )
}
