import React, { useEffect, useState, useContext } from "react";
import Restruentcard, { withpromotedlabel } from "./Restruentcard";
import resData from "../utils/Data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

import Usercontext from "../utils/Usercontext";
const Body = () => {
  // const { logged } = useContext(Usercontext);

  const { logged, setUser } = useContext(Usercontext);

  const [res, setRes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //search bar functionality
  const [search, setSearch] = useState("");

  const Restaurentpromoted = withpromotedlabel(Restruentcard);

  //fteching data
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4726817&lng=77.7085091&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const convertdata = await data.json();

    setRes(
      convertdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFiltered(
      convertdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(convertdata);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) return <h1>you are offline</h1>;

  //Loading functionality
  if (res?.length <= 0) {
    return <Shimmer />;
  }

  return (
    <div className="restrobody">
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="searchbar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            onClick={() => {
              const searchitem = res.filter((ele) =>
                ele.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFiltered(searchitem);
            }}
          >
            Search
          </button>
        </div>

        {/* <input
          type="text"
          value={logged}
          onChange={(e) => setUser(e.target.value)}
        /> */}
        <button
          className="filter-btn"
          onClick={() => {
            const reslist = res.filter((ele) => ele.info.avgRating >= 4);
            setFiltered(reslist);
          }}
        >
          Top rated resturent
        </button>

        {/* <label>username</label> */}
        {/* <input
          type="text"
          value={logged}
          onChange={(e) => setUser(e.target.value)}
        /> */}

        {/* <li>{logged}</li> */}
        {/* hello */}
      </div>
      <div className="res-container">
        {filtered?.map((ele) => {
          return (
            <div>
              <Link to={"/restaurant/" + ele.info.id}>
                {ele.info.promoted ? (
                  <Restaurentpromoted res={ele} />
                ) : (
                  <Restruentcard res={ele} />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
