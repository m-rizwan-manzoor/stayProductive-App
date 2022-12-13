import React from 'react'
import { MoreHorizontal ,Clock,  CheckSquare} from 'react-feather';
import Chips from '../Chips/Chips';
import "./Cards.css"
const Cards = () => {
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_top_labels'>

      <Chips text="frontend" color="skyblue"/>
      {/* <Chips close text="frontend" color="skyblue"/> */}
            </div>
            <MoreHorizontal/>
        </div>
        <div className='card_title'>

        </div>
        <div className='card_footer'>
            <p> <Clock/>28 sept </p>
            <p> <CheckSquare/> 1/4 </p>
        </div>
    </div>
  )
}
export default Cards;
