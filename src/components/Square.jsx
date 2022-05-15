import React from "react";
import "./common.css";

const Square = ({ class_name, state, clickHanldler, index }) => {
  return (
    <div onClick={() => clickHanldler(index)} className={`box ${class_name}`}>
      {state}
    </div>
  );
};

export default Square;
