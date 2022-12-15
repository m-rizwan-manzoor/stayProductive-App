import React from 'react'
import "./Board.css"
import { MoreHorizontal } from 'react-feather'
import Card  from '../Cards/Cards'
import Editable from '../Editable/Editable'
const Board = () => {
    return (
        <div className='board'>
            <div className='board_top'>
                <div className='board_top_title'>
                    <p className='board_top_title'> To Do
                        <span> 2</span>
                    </p>
                        <MoreHorizontal />
                </div>
                <div className='board_cards custom-scroll'>
                 
                    <Card/>
                    <Card/>
                    <Card/>
                    
                    <Editable/>
                </div>
            </div>
        </div>
    )
}

export default Board
