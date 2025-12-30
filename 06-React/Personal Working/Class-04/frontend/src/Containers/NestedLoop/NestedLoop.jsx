import React from 'react'
import NestLoop from '../../Components/Props/NestLoop/NestLoop'

export default function NestedLoop() {

    let collages = [

        {
            name: "DJ",
            city: "karachi",
            website: "www.dj.com",
            student: [
                {
                    name: "Ibrahim",
                    age: "23",
                    email: "Ibrahim@gmail.com"
                },
                {
                    name: "Huzaifa",
                    age: "23",
                    email: "Huzaifa@gmail.com"
                },
                {
                    name: "Ismail",
                    age: "23",
                    email: "Ismail@gmail.com"
                },
            ]
        },

        {
            name: "SM",
            city: "karachi",
            website: "www.sm.com",
            student: [
                {
                    name: "Ibrahim",
                    age: "23",
                    email: "Ibrahim@gmail.com"
                },
                {
                    name: "Huzaifa",
                    age: "23",
                    email: "Huzaifa@gmail.com"
                },
                {
                    name: "Ismail",
                    age: "23",
                    email: "Ismail@gmail.com"
                },
            ]
        },

        {
            name: "AR",
            city: "karachi",
            website: "www.ar.com",
            student: [
                {
                    name: "Ibrahim",
                    age: "23",
                    email: "Ibrahim@gmail.com"
                },
                {
                    name: "Huzaifa",
                    age: "23",
                    email: "Huzaifa@gmail.com"
                },
                {
                    name: "Ismail",
                    age: "23",
                    email: "Ismail@gmail.com"
                },
            ]
        },
    ]

  return (

    <div>
        <h1>Nested Loop</h1>
        <NestLoop collages={collages} />
    </div>
  )
}
