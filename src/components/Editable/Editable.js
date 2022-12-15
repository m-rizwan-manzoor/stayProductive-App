import React, { useState } from 'react'
import { X } from 'react-feather'
import "./Editable.css"

const Editable = (props) => {

    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState( "");
   
    return (
        <div className='editable'>
            {showEdit ? (
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (props.onSubmit) props.onSubmit(inputValue);
                        setShowEdit(false);
                        setInputValue("");
                    }}
                    className={`editable_edit ${props.editClass || ""}`}>

                    <input type="text"
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={props.placeholder || "Enter Item"}
                    // defaultValue={props.text}
                    />
                    <div className='editable_edit_footer'>
                        <button type='submit'>
                            {props.buttonText || "Add"
                            }</button>
                        <X onClick={() => setShowEdit(false)} />
                    </div>
                </form>) : <p className={`editable_display ${props.displayClass}`} onClick={() => setShowEdit(true)} >
                {props.text || "Add Items"}
            </p>}



        </div>
    )
}

export default Editable
