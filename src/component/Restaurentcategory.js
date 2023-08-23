import React, { useState } from "react";
import Itemlist from "./Itemlist";

const Restaurentcategory = ({ data, show, setShowindex }) => {
  const handleclick = () => {
    setShowindex();
  };
  return (
    <div className="item">
      <div onClick={handleclick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>{show && <Itemlist item={data.itemCards} />}</div>
    </div>
  );
};

export default Restaurentcategory;
