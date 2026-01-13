import React from 'react'

export const DateTime = () => {
    const now= new Date();
  return (
    <div className='container'>
        <div className='container'>
            <h1>DateTime</h1>
            <h1> </h1>
            <h1>{now.toLocaleString()} </h1>
        </div>
    </div>
  )
}
