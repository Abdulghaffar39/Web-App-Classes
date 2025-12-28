import React from 'react'

export default function ObjectVal({ User }) {
  return (

    <div>
      <h5>Name: {User.name}</h5>
      <h5>Age: {User.age}</h5>
      <h5>Email: {User.email}</h5>
    </div>

  )
}
