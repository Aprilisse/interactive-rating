import React, { useState } from "react";

function SelectRating({ clickRating, rating }) {
  const variableRating = [1, 2, 3, 4, 5];

  // className={`circle ${props === 'cos tam' ? 'active' : ''}`}

  return (
    <div className="select-rating">
      {variableRating.map((x) => (
        <div
          className={`circle ${rating === x ? "active-circle" : ""}`}
          key={x}
          onClick={() => clickRating(x)}
        >
          {x}
        </div>
      ))}
    </div>
  );
}

export default SelectRating;
