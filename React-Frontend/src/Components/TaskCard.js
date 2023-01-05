import React from "react";
import DropDown from "./DropDown";
import TaskColor from "./TaskColor";

const TaskCard = () => {
  return (
    <div className="card-bg w-100 border d-flex flex-column mb-2 rounded">
      <div className="pl-3 pt-3 d-flex flex-column h-100">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="h5 font-weight-bold text-dark">Card Title</h4>
          <div>
            <DropDown></DropDown>
          </div>
        </div>
        <p className="pr-5 text-dark">
          Lorem ipsum dolor sit amet, eiusmod ut labore et dolore magna aliqua.
        </p>
        <div className="row">
          <TaskColor color="pink" />
          <h6 className="text-dark mx-2 pt-1">18-Dec-2022</h6>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
