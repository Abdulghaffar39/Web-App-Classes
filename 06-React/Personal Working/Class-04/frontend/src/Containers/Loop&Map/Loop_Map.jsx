import React from 'react'
import LoopUser from '../../Components/Props/Loop_Map/Loop_Map'

export default function Loop() {

  let Array = [
    {
      id: 1,
      name: "Abdul Ghaffar",
      Email: "abdulghaffar@gmail.com",
      password: 'abdulghaffar123',
    },
    {
      id: 2,
      name: "Muhammad Talha",
      Email: "talha@gmail.com",
      password: 'talha123',
    },
    {
      id: 3,
      name: "Muhammad Anus",
      Email: "anus@gmail.com",
      password: 'anus123',
    },
    {
      id: 4,
      name: "Muhammad Mohsin",
      Email: "mohsin@gmail.com",
      password: 'mohsin123',
    },
    {
      id: 5,
      name: "Muhammad Zareef",
      Email: "zareef@gmail.com",
      password: 'zareef123',
    },

  ]

  return (
    <div>

      <h1>Your Table</h1>

      <h3>Dynamic Table</h3>

      <table border="1">

        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
          </tr>
        </thead>

        <tbody>
          {
            Array.map((user) => (

              <tr style={{ textAlign: "start" }} key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.Email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          }
        </tbody>

      </table>


      <h3>Dummy Table</h3>

      <table border="1">

        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Abdul</td>
            <td>abdul@gmail.com</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>2</td>
            <td>talha</td>
            <td>talha@gmail.com</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>3</td>
            <td>anus</td>
            <td>anus@gmail.com</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>4</td>
            <td>mohsin</td>
            <td>mohsin@gmail.com</td>
            <td>1111</td>
          </tr>
          <tr>
            <td>5</td>
            <td>zareef</td>
            <td>zareef@gmail.com</td>
            <td>1111</td>
          </tr>
        </tbody>

      </table>


      <h1>Reuse Component in Loop</h1>
      {
        Array.map((user) => (

          <div>
            <LoopUser data={user} />
          </div>
        ))
      }

    </div>
  )
}
