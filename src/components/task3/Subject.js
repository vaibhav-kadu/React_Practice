import React from 'react'

export const Subject = () => {
    const subject=["JAVA", "REACT", "SPRING BOOT"];
  return (
    <div className='cards'>
        <h2>Subjects List</h2>
        <ul>
            {
                subject.map((sub,key)=>(
                    <li key={key}>{sub}</li>
                ))
            }
        </ul>
    </div>
  )
}
