import React from 'react';
import { CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBContainer } from 'cdbreact';

const DropDown = () => {
  return (
    <CDBContainer>
      <CDBDropDown>
        <CDBDropDownToggle className='bg-transparent p-0 m-0'>
        <img
              alt="panelImage"
              src="img/pane/dots.png"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
        </CDBDropDownToggle>
        <CDBDropDownMenu>Edit</CDBDropDownMenu>
      </CDBDropDown>
    </CDBContainer>
  );
};

export default DropDown;