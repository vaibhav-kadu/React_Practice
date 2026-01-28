import React, { useState } from 'react'

export default function ShowMessage() {
    const [message,setMessage]=useState("")
  return (
        <div className='cards'>
            <div className='card'>
                <h2>ShowMessage</h2>
                <div className='card'>
                    <button onClick={()=>setMessage("Welcome To React Programming")}>Show Message</button>
                    <p>{message}</p>
                </div>
            </div>
        </div>
  )
}
