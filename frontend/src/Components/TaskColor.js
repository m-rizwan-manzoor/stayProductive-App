import React from "react";

function TaskColor(props) {
  return (
    <p style={{backgroundColor: `${props.color}`}} className="rounded-pill ml-3 px-3">Critical</p>
  );
}

export default TaskColor;
