import React from 'react'
import "./Modal.css";

const Modal = (props) => {
    return (
        <div className='Modal'
            onClick={() => props.onClose ? props.onClose() : ""}
        >
            <div className='Modal_content custom-scroll'
                onClose={(event) => event.stopPagination()}
            >
                {props.children}
            </div>

        </div>
    )
}

export default Modal
