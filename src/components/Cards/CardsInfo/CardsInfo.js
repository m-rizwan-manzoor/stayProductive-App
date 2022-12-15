import React ,{useState} from 'react'
import { Calendar, Clock, Edit, List, Tag, Type } from 'react-feather'
import Editable from '../../Editable/Editable';
import Modal from '../../Modals/Modal'
import "./CardsInfo.css";

const CardsInfo = (props) => {


    const colors = [
        "#a8193d",
        "#4fcc25",
        "#1ebffa",
        "#8da377",
        "#9975bd",
        "#cf61a1",
        "#240959",
    ];
    
const [activeColor , setActiveColor]=useState("");
    return (
        <div>
            <Modal onClose={() =>
                props.onClose()
                //   console.log("close")
            }  >
                <div className='cardinfo'>

                    <div className='cardinfo_box'>
                        <div className='cardinfo_box_title'>
                            <Type /> Title no. 1
                        </div>

                        <div className='check'>
                            <Editable
                                displayClass="Modal_cards_add"
                                text="hello"
                                paceholder="Enter the Title"
                                butttonText="add title"

                            />
                        </div>

                    </div>

                    <div className='cardinfo_box'>
                        <div className='cardinfo_box_title'>
                            <List /> Description
                        </div>

                        <div className='check'>
                            <Editable
                                displayClass="Modal_cards_add"
                                text="Your Description here"
                                paceholder="Enter Your Description"
                                butttonText="Set Description"

                            />
                        </div>

                    </div>

                    <div className='cardinfo_box'>
                        <div className='cardinfo_box_title'>
                            <Calendar /> Date
                        </div>

                        <div className='check'>
                            <input type="date" />
                        </div>

                    </div>
                    <div className='cardinfo_box'>
                        <div className='cardinfo_box_title'>
                            <Tag /> Labels
                        </div>
                        <div className='card_box_color'>
                            {colors.map((item, index) => <li key={index} 
                            style={{ backgroundColor: item }} 
                            className={item===activeColor}
                            onClick={()=> setActiveColor(item)}
                            />)}
                        </div>
                        <div className='check'>
                            <Editable
                                displayClass="Modal_cards_add"
                                text="Your Labels"
                                paceholder="Enter The Labels"
                                butttonText="add label"
                            />
                        </div>

                    </div>
                    <div className='cardinfo_box'>
                        <div className='cardinfo_box_title'>
                            <Edit /> Tasks
                        </div>

                        <div className='check'>
                            <Editable
                                displayClass="Modal_cards_add"
                                text="Add Labels"
                                paceholder="Enter The Labels"
                            />
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CardsInfo
