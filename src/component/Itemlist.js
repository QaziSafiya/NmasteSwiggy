import React from "react";
import { CDN_LINK } from "../utils/constant";

const Itemlist = ({ item }) => {
  return (
    <div>
      {item.map((ele) => (
        <div key={ele.card.info.id}>
          <div>
            <img
              className="itemimg"
              src={CDN_LINK + ele.card.info.imageId}
              alt=""
            />{" "}
            <button className="addbtn">add</button>
          </div>
          <div>
            <li>
              <span>{ele.card.info.name}</span>{" "}
              <span>{ele.card.info.price}</span>
            </li>
          </div>
          <p className="description">{ele.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
