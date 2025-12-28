import React, { useEffect, useState } from 'react'

export default function DigitalClock() {

    const [time, setTime] = useState(new Date())
    const [color, setColor] = useState("")
    const [bgColor, setBgColor] = useState("")

    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timeId)
        }
    }, [])

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;

        return () => {
            document.body.style.backgroundColor = null;
        };
    }, [bgColor]);

    return (
        <div>

            <h1 style={{
                background: "linear-gradient(90deg, gray, white)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "40px",
                fontWeight: "bold",
                padding: "10px"
            }}>Digital Clock</h1>
            <h2 style={{ color: color }}>{time.toLocaleTimeString()}</h2>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <label style={{
                        background: "linear-gradient(90deg, gray, white)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                        padding: "10px"
                    }} htmlFor="">Clock Color</label>
                    <select onChange={(e) => setColor(e.target.value)} style={{ textTransform: "capitalize" }}>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="orange">orange</option>
                        <option value="green">green</option>
                        <option value="purple">purple</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <label style={{
                        background: "linear-gradient(90deg, gray, white)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                        padding: "10px"
                    }} htmlFor="" > BG Color</label>
                    <select onChange={(e) => setBgColor(e.target.value)} style={{ textTransform: "capitalize" }}>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="orange">orange</option>
                        <option value="green">green</option>
                        <option value="purple">purple</option>
                    </select>
                </div>
            </div>
        </div >
    )
}
