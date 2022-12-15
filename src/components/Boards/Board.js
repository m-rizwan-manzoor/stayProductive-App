import React, { useState } from 'react'
import "./Board.css"
import { MoreHorizontal } from 'react-feather'
import Card from '../Cards/Cards'
import Editable from '../Editable/Editable'
import Dropdown from '../DropDown/DropDown'


const Board = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className='board'>
            <div className='board_top'>
                <div className='board_top_title'>
                    <p className='board_top_title'>
                        {/* if board is undefined then ? this symbol will ignore it                  */}

                        {props.board?.title}

                        <span> {props.board?.cards?.length}</span>
                    </p>

                    {/* for dropDown when pressed on svg*/}

                    <div className='board_top_more' onClick={() => { showDropdown ? setShowDropdown(false) : setShowDropdown(true) }}
                    >
                        <MoreHorizontal />
                        {showDropdown && (

                            <Dropdown >
                                <div className='board_dropdown'>
                                    <p onClick={() => props.removeBoard(props.board?.id)}>Delete Board</p>
                                </div>
                            </Dropdown>
                        )}


                    </div>
                </div>
                <div className='board_cards custom-scroll'>
                    {props.board?.cards?.map((item) =>
                        <Card key={item.id} card={item}

                            // removing a card 
                            removeCard={props.removeCard}
                            // board Id 
                            boardId={props.board?.id}

                            handleDragEnter={props.handleDragEnter}
                            handleDragEnd={props.handleDragEnd}
                        />

                    )}
                    {/* <Card /> */}
                    {/* for testing  */}
                    {/* <Card/> */}
                    <Editable
                        displayClass="board_cards_add"
                        text="+ Add Card"
                        placeholder="Enter Card Title"
                        onSubmit={(value) => props.addCard(value, props.board?.id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Board
