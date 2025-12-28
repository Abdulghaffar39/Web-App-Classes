import { useState } from 'react'

export default function DropDown() {

    const [province, setProvince] = useState('Sindh')

    return (
        <div>

            <h1>Drop Down</h1>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                <h2>Select City</h2>

                <select onChange={(e)=>setProvince(e.target.value)}
                
                defaultValue={"Sindh"}>
                    <option value="Sindh">Sindh</option>
                    <option value="KPK">KPK</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Balochistan">Balochistan</option>
                </select>

                <h4>Selected Province: {province}</h4>

            </div>

        </div>
    )
}
