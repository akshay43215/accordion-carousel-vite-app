import React from 'react'
import './Accordion.css'
import { useState } from 'react'

export const Accordion = ({post}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="accordion-container">
      
      <div className="accordion-title">
        <h2>{post.title}</h2>
      <button onClick={()=>setToggle(!toggle)}> {toggle ?'-':'+'} </button>
      </div>
      { toggle &&
      <div className="accordion-body">
        <p>{post.body}</p>
      </div>
      }
    </div>
  )
}
