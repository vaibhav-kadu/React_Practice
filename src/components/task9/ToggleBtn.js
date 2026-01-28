import React, { useState } from 'react'

export default function ToggleBtn() {
    const [show,setShow] =useState(false);
  return (
    <div className='container'>
        <div className='cards'>
            <div className='card'>
                <h2>Toggle Button</h2>
                <button type='toggle'  onClick={()=>setShow(!show)}>{show ? "Hide Paragraph" : "Show Paragraph" }</button>
                {show && (<p>I am VAibhav Kadu , React JAva Developer</p>)}
            </div>
        </div>
    </div>
  )
}
