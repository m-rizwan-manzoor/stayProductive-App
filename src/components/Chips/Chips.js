import React from 'react'
import "./Chips.css"
import { X } from 'react-feather'
const Chips = (props) => {
  return (
    <div className='chip' style={{backgroundColor: props.color}}>
      {props.text}
      {props.close && <X/>}
    </div>
  )
}

export default Chips
