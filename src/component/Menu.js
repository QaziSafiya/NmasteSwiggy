import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import Restaurentcategory from "./Restaurentcategory";
import Usercontext from "../utils/Usercontext";
const Menu = () => {
  const { resId } = useParams();

  const [showindex, setShowindex] = useState(null);

  const { logged } = useContext(Usercontext);
  console.log(logged);

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4871462&lng=73.8200227&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* <h3></h3> */}
      <h2>Menu</h2>

      <h3>{logged}</h3>
      {categories.map((ele, index) => (
        // {/* controlled component */}
        <Restaurentcategory
          data={ele?.card?.card}
          show={index === showindex ? true : false}
          setShowindex={() => setShowindex(index)}
        />
      ))}
    </div>
  );
};

export default Menu;
