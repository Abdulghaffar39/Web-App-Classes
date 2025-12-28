import React from 'react'
import Button from '../../Components/Props/button/button'
import ObjectVal from '../../Components/Props/ObjectVal/ObjectVal'
import Collages from '../../Components/Props/Collages/Collages'
import User from '../../Components/Props/User/User'
import Wrapper from '../../Components/Props/Wrapper/Wrapper'

export default function Props() {

    let UserObject = {

        name: "Abdul Ghaffar",
        age: 21,
        email: "abdulghaffar@gmail.com"
    }

    let UserObject2 = {

        name: "Talha",
        age: 22,
        email: "MuhammadTalha@gmail.com"
    }

    let names = ['DJ', 'SMIU', 'CMA', 'Commers']

    return (

        <>
            <h1>Props</h1>
            {/* <h3>Objects</h3>
            <Button value="Clear" />
            <hr />
            <ObjectVal User={UserObject}/>
            <hr />
            <ObjectVal User={UserObject2}/>
            <hr /> */}

            {/* <h3>Array</h3>
            <Collages center={names[0]} />
            <Collages center={names[1]} />
            <Collages center={names[2]} />
            <Collages center={names[3]} /> */}

            {/* <h3>Default Name / Auto Update Name</h3>
            <User fullName='Abdul ghaffar' />
            <User fullName='Talha' />
            <User />
            <User />
            <User /> */}

            <Wrapper color="green">
                <h1>Abdul Ghaffar</h1>
            </Wrapper>

            <Wrapper>
                <h1>Abdul Ghaffar</h1>
                <p>Lorem</p>
            </Wrapper>

            <Wrapper>
                <h1>Abdul Ghaffar</h1>
                <p>Lorem</p>
            </Wrapper>

        </>

    )
}
