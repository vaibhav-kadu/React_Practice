import React from 'react'

export default function Loginbtn() {
    const handelLogin =()=>{
        console.log("Login Button Clicked");
        
    }
    const handelRegister =()=>{
        console.log("Register Button Clicked");
        
    }
  return (
    <div className='container'>
        <div className='cards'>
            <button onClick={handelLogin}>Login</button>
            <button onClick={handelRegister}>Register</button>
        </div>
    </div>
  )
}
