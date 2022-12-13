import React from 'react'
import Board from "./Boards/Board"
import "./MainBoard.css"
import { AlignJustify, Search } from 'react-feather'
const MainBoard = () => {
    return (
        <div className="app">
            <div className="app_nav">
                <h1>  <AlignJustify color='white' />  Board </h1>
            </div>


            <div className='app_boards_container'>

                <div className='app-outer'>

                    <div className='app_boards'>

                        <Board />
                        <Board />
                        <Board />
                        <Board />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBoard
