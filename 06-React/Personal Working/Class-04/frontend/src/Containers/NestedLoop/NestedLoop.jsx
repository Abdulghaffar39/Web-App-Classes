import React from 'react'

export default function NestedLoop() {

    let collages = [

        {
            name: "DJ",
            city: "karachi",
            website: "www.dj.com",
            student: [
                {
                    name: "Adeel",
                    age: "23",
                    email: "adeel@gmail.com"
                },
                {
                    name: "Aseel",
                    age: "23",
                    email: "aseel@gmail.com"
                },
                {
                    name: "Akeel",
                    age: "23",
                    email: "akeel@gmail.com"
                },
            ]
        },

        {
            name: "SM",
            city: "karachi",
            website: "www.sm.com",
            student: [
                {
                    name: "Adeel",
                    age: "23",
                    email: "adeel@gmail.com"
                },
                {
                    name: "Aseel",
                    age: "23",
                    email: "aseel@gmail.com"
                },
                {
                    name: "Akeel",
                    age: "23",
                    email: "akeel@gmail.com"
                },
            ]
        },

        {
            name: "AR",
            city: "karachi",
            website: "www.ar.com",
            student: [
                {
                    name: "Adeel",
                    age: "23",
                    email: "adeel@gmail.com"
                },
                {
                    name: "Aseel",
                    age: "23",
                    email: "aseel@gmail.com"
                },
                {
                    name: "Akeel",
                    age: "23",
                    email: "akeel@gmail.com"
                },
            ]
        },
    ]

  return (

    <div>
        <h1>Nested Loop</h1>
    </div>
  )
}
