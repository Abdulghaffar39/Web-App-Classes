import React from 'react'

export default function Wrapper({children, color='black'}) {
    return (
        <div style={{backgroundColor: "white", color:color , padding: "20px", margin: "10px"}}>{children}</div>
    )
}
