import { useState } from 'react'

export default function RadioBtn() {

    const [gender, setGender] = useState("Male")

    return (

        <div style={{display:"flex", flexDirection:"column", alignItems:"start"}}>

            <h1>Radio Button</h1>

            <div>
                <h2>Selected Gender: {gender}</h2>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    <input onChange={(e)=> setGender(e.target.value)
                    } type="radio" id='male' name="gender" value="Male" />
                    <label htmlFor="male">Male</label>
                </div>

                <div>
                    <input onChange={(e)=> setGender(e.target.value)}  type="radio" id='female' name="gender" value="Female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>


        </div>

    )
}
