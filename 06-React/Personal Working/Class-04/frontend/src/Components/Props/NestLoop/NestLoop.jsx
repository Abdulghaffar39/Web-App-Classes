import React from 'react'
import Collages from '../Collages/Collages'

export default function NestLoop({ collages }) {

    return (
        
        <div style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "start", gap: "10px" }}>

            {
                collages.map((collage) => (

                    <div style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "start", backgroundColor: "black", padding: "0px 20px", borderRadius: "8px", textAlign: "start" }}>


                        <h2>Collage: {collage.name}</h2>

                        <ul>
                            <li>{collage.city}</li>
                            <li>{collage.website}</li>

                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "start" }} >

                                <li>Students</li>

                                {collage.student.map((student) => (

                                    <ul>
                                        <li>{student.name}</li>
                                    </ul>

                                ))}

                            </div>

                        </ul>

                    </div>


                ))
            }

        </div>
    )
}
