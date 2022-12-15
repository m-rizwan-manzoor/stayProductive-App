import React, { useState } from 'react'
import { X } from 'react-feather'
import "./Editable.css"

const Editable = (props) => {

    const [showEdit, setShowEdit] = useState(false);
    return (
        <div className='editable'>
            {showEdit ? (
                <form
                    className='editable_edit'>
                    onSubmit={(e)=>{
                        e.preventDefault();
                        if(props.onSubmit) props.onSubmit();
                    }}
                    <input type="text"
                        placeholder={props.placeholder}
                        defaultValue={props.text} />
                    <div className='editable_edit_footer'>
                        <button type='submit'>
                            {props.buttonText || "Add"
                            }</button>
                        <X onClick={()=>setShowEdit(false)}/>
                    </div>
                </form>) : <p className={`editable_display`} onClick={()=>setShowEdit(true)} >
                {props.text || "Add Items"}
            </p>}



        </div>
    )
}

export default Editable
