import React, { useState } from "react";
import Icon from "./Icon";
import YourSelect from "./YourSelect";
import Thanks from "./Thanks";

function SecondBox({ rating }) {
  return (
    <div className="container">
      <Icon />
      <YourSelect rating={rating} />
      <Thanks />
    </div>
  );
}

export default SecondBox;
