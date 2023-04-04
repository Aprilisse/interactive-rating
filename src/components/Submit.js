import React from "react";

function Submit({ clickView }) {
  return (
    <div>
      <button onClick={() => clickView("view2")}>SUBMIT</button>
    </div>
  );
}

export default Submit;
