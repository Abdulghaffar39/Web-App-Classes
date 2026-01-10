import React from 'react'
import "../ExternelStyle.css"
import "./ModuleCSS.css"
import InlineStyle from './InlineCss/InlineStyle'

export default function Styling() {

  return (
    <div>
      
      <h1>Inline CSS</h1>
      <div style={{color:"black", fontSize:"8px"}}>
        <h1>Inline CSS jo Opening Tag ke undar use ho</h1>
      </div>
      
      <h1>External CSS</h1>
      <div>
        <h1 className='ExternelStyle'>External CSS jis me ek alag file bana kar CSS dalte hai jo sarae components me use ho sakti hai</h1>
      </div>
      
      <h1>CSS Module</h1>
      <div>
        <h1 className='ModuleCSS'>Module CSS jis me ek component ke liye specific file banate hai</h1>
      </div>
      
      <h1>Style Components</h1>
      <div>
        <h1>Style Components html element se bhir component ek undar jo style karte hai wo style component hai</h1>
      </div>
      
      <h1>Utility-First Libraries</h1>
      <div>
        <ul style={{textAlign:"start"}}>
          <li>Material UI</li>
          <li>React bootstrap</li>
          <li>Taiwind CSS etc</li>
        </ul>
      </div>

      <InlineStyle />

    </div>
  )
}
