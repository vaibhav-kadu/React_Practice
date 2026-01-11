import React from 'react';
import "../task2/Student.css";

export const Student = () => {

  const data = [
    {name:"Vaibhav",course:"Java",city:"warje"},
    {name:"Kadu",course:"Python",city:"warje"},
    {name:"Vaibhav",course:"C++",city:"karve"}
  ]
  return (
  <>
  <div className='container'>
  <div className='cards'>
      {
        data.map((item, key)=>(
          <div className='card' key={key}>
            <h2>{item.name}</h2>
            <h3>Course: {item.course}</h3>
            <h4>City: {item.city}</h4>
          </div>
        ))
      }
      </div>
      </div>
           
    </>
  )
}
