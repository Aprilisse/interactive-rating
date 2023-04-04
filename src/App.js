import logo from "./logo.svg";
import MainBox from "./components/MainBox";
import "./App.css";
import React, { useState } from "react";
import SecondBox from "./components/SecondBox";

function App() {
  const [view, setView] = useState("view1");
  const [rating, setRating] = useState(0);

  const clickView = (view) => {
    setView(view);
  };

  const clickRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      {view === "view1" ? (
        <MainBox
          clickView={clickView}
          clickRating={clickRating}
          rating={rating}
        />
      ) : (
        <SecondBox rating={rating} />
      )}
    </div>
  );
}

export default App;
