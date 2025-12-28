import React, { useState } from 'react'

export default function CheckBoxes() {

    const [skills, setSkills] = useState([])

    const handleFuction = (event) => {

        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills([...skills.filter((item) => item != event.target.value)])
        }

    }

    return (

        <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

            <h1>Select Your Skills</h1>

            <div>
                <input onChange={handleFuction} type="checkbox" id='php' value="php" />
                <label htmlFor="php">PHP</label>
            </div>

            <div>
                <input onChange={handleFuction} type="checkbox" id='js' value="js" />
                <label htmlFor="js">Javascript</label>
            </div>

            <div>
                <input onChange={handleFuction} type="checkbox" id='node' value="node" />
                <label htmlFor="node">Node.js</label>
            </div>

            <div>
                <input onChange={handleFuction} type="checkbox" id='react' value="react" />
                <label htmlFor="react">React</label>
            </div>

            <h1>{skills.toString()}</h1>

        </div>
    )
}
