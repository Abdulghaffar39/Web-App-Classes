import React from 'react'

export default function LoopUser({data}) {
    return (
        <div style={{width:"auto", borderRadius:"12px", border:"1px solid gray", display:"flex", flexDirection:"column", justifyContent:"between", alignItems:"start", margin:"10px", padding:"20px"}}>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.Email}</p>
            <p>Password: {data.password}</p>
        </div>
    )
}
