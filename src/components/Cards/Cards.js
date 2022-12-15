import React, { useState } from 'react'
import { MoreHorizontal, Clock, CheckSquare } from 'react-feather';
import Chips from '../Chips/Chips';
import "./Cards.css"
import Dropdown from '../DropDown/DropDown'
import CardsInfo from './CardsInfo/CardsInfo';

const Cards = (props) => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='card' draggable
      onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
      onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
      onClick={() => { showModal ? setShowModal(false) : setShowModal(true) }}

    >
      {
        showModal && (
          <CardsInfo onClose={() => setShowModal(false)} />

        )
      }
      <div className='card_top'>
        <div className='card_top_labels'>
          {
            props.card?.labels?.map((item, index) =>
              <Chips key={index}
                text={item.text}
                color={item.color} />
            )
          }
          {/* <Chips text="frontend" color="yellow"/> */}
          {/* <Chips close text="frontend" color="skyblue"/> */}
        </div>


        <div className='card_top_more' onClick={() => { showDropdown ? setShowDropdown(false) : setShowDropdown(true) }}
        >
          <MoreHorizontal />
          {showDropdown && (

            <Dropdown >
              <div className='card_dropdown'>
                <p onClick={() => props.removeCard
                  (props.card?.id, props.boardId)} >Delete card</p>
              </div>
            </Dropdown>
          )}
        </div>


      </div>
      <div className='card_title'>
        {props.card?.title}
      </div>
      <div className='card_footer'>

        {/* applying check  */}
        {
          props.card?.date &&
          <p> <Clock />
            {props.card?.date}
          </p>
        }
        <p> <CheckSquare /> 1/4 </p>
      </div>
    </div>
  )
}
export default Cards;
