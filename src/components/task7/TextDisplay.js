import React, { useState } from 'react'

export default function TextDisplay() {
    const [text,setText]=useState("")
  return (
    <div className='container'>
        <div className='cards'>
            <div className='card'>
                <h2>Dynamic Text Display</h2>
                <input name='text' placeholder='Enter Text' value={text} 
                onChange={(e)=> setText(e.target.value)}/>
                <p>You Enter : {text}</p>
            </div>
        </div>
    </div>
  )
}
