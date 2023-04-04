import React, { useState } from "react";
import MainText from "./MainText";
import SelectRating from "./SelectRating";
import Star from "./Star";
import Submit from "./Submit";
import Icon from "./Icon";
import YourSelect from "./YourSelect";
import Thanks from "./Thanks";

function MainBox({ clickRating, clickView, rating }) {
  return (
    <div className="container">
      <Star />
      <MainText />
      <SelectRating clickRating={clickRating} rating={rating} />
      <Submit clickView={clickView} />
    </div>
  );
}

export default MainBox;
