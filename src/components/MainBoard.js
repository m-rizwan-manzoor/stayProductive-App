import React, { useState } from 'react'
import Board from "./Boards/Board"
import "./MainBoard.css"
import { AlignJustify, Search } from 'react-feather'
import Editable from './Editable/Editable'
const MainBoard = () => {

    const [boards, setBoards] = useState([
        {
            id: Date.now() + Math.random() * 2,
            title: "To Do",
            cards: [
                {
                    id: Date.now() + Math.random(),
                    title: "Card 1",
                    tasks: [],
                    labels: [{
                        text: "frontend",
                        color: "pink",
                    }],
                    desc: "this is description",
                    date: "01-july-1999",
                },
                {
                    id: Date.now() + Math.random(),
                    title: "Card 2",
                    tasks: [],
                    labels: [{
                        text: "backendend",
                        color: "aqua",
                    }],
                    desc: "this is description",
                    date: "",
                },
                {
                    id: Date.now() + Math.random(),
                    title: "Card 3",
                    tasks: [],
                    labels: [{
                        text: "full stack",
                        color: "skyblue",
                    }],
                    desc: "this is description",
                    date: "",
                },
                {
                    id: Date.now() + Math.random(),
                    title: "Card 4",
                    tasks: [],
                    labels: [{
                        text: "full stack",
                        color: "yellow",
                    }],
                    desc: "this is description",
                    date: "12-April-2022",
                },
                {
                    id: Date.now() + Math.random(),
                    title: "Card 5",
                    tasks: [],
                    labels: [{
                        text: "mern stack",
                        color: "chartreuse",
                    }],
                    desc: "this is description",
                    date: "",
                }
            ]
        }
    ])
    // state for drag and drop function 

    const [target, setTarget] = useState({
        cid: "",
        bid: "",
    })

    // add card 
    // bid = board id 
    // cid = card id 
    const addCard = (title, bid) => {
        const card = {
            id: Date.now() + Math.random(),
            title: title,
            labels: [],
            tasks: [],
            date: "",
            desc: "",
        }
        const index = boards.findIndex((item) => item.id === bid)
        if (index < 0) return;
        const tempBoard = [...boards];
        console.log(tempBoard[0].cards)
        tempBoard[index].cards.push(card);
        setBoards(tempBoard)
    }


    // for Remove card 
    const removeCard = (cid, bid) => {
        const bIndex = boards.findIndex((item) => item.id === bid)
        if (bIndex < 0) return;
        const tempBoard = [...boards];
        const cards = tempBoard[bIndex].cards
        const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid)
        if (cIndex < 0) return
        cards.splice(cIndex, 1);
        setBoards(tempBoard)
        console.log(setBoards);
    }
    // add boards 
    const addBoard = (title) => {
        setBoards([
            ...boards,
            {
                id: Date.now() + Math.random(),
                title,
                cards: [],
            }
        ])
    }
    // remove board 
    const removeBoard = (bid) => {
        const tempBoard = boards.filter((item) => item.id !== bid)
        setBoards(tempBoard)
    }


    // drag End function 

    const handleDragEnd = (cid, bid) => {
        let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

        s_bIndex = boards.findIndex((item) => item.id === bid)
        if (s_bIndex < 0) return

        s_cIndex = boards[s_bIndex]?.cards?.findIndex((item) => item.id === cid)
        if (s_cIndex < 0) return;

        t_bIndex = boards.findIndex((item) => item.id === target.bid)
        if (t_bIndex < 0) return;

        t_cIndex = boards[t_bIndex]?.cards.findIndex((item) => item.id === target.cid)
        if (t_cIndex < 0) return;

        const tempBoard = [...boards];
        const tempCard = tempBoard[s_bIndex].cards[s_cIndex]
        // for remove 
        tempBoard[s_bIndex]?.cards?.splice(s_cIndex, 1)
        tempBoard[t_bIndex]?.cards?.splice(t_cIndex, 0, tempCard)
        setBoards(tempBoard)
    }
    // drag Enter function 

    const handleDragEnter = (cid, bid) => {
        setTarget({
            cid,
            bid,
        })

    }


    return (
        <div className="app">
            <div className="app_nav">
                <h1>  <AlignJustify color='white' />  Board </h1>
            </div>


            <div className='app_boards_container'>

                <div className='app-outer'>

                    <div className='app_boards'>
                        {boards.map((item) =>
                            <Board key={item.id} board={item}
                                removeBoard={removeBoard}
                                addCard={addCard}
                                removeCard={removeCard}
                                handleDragEnter={handleDragEnter}
                                handleDragEnd={handleDragEnd}
                            />
                        )}

                        <div className='app_boards_board'>
                            <Editable
                                displayClass="app_boards_board_add"
                                text="Add Board"
                                placeholder="Enter the Board"
                                onSubmit={(value) => addBoard(value)}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBoard
