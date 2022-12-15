import React, { useEffect, useRef } from 'react'
import "./DropDown.css"

function Dropdown(props) {

    const dropdownRef = useRef();

    const handleClick = (event) => {

        //for checking  
        // console.log(dropdownRef,event)
        
        if (
            dropdownRef && 
            !dropdownRef?.current?.contains(event?.target)
            && 
            props.onClose
            )
            props.onClose();
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick  )
        }
    }, [])
    return (
        <div 
        style={{
            position:"absolute",
            top:"100%",
            right:"0",
            fontFamily:"cursive"
        }}
         ref={dropdownRef} 
        className={`dropDown custom-scroll ${props.class ? props.class : ""}`}
        
        >
            {props.children}

        </div>
    )
}

export default Dropdown
