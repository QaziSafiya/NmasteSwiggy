import { CDN_LINK } from "../utils/constant";
// import Usercontext from "../utils/Usercontext";
// import { useContext } from "react";
const Restruentcard = (props) => {
  const { res } = props;

  // const { logged } = useContext(Usercontext);
  //destructuring the data
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = res.info;
  return (
    <div className="card">
      <div className="card-img">
        <img className="foodimg" src={CDN_LINK + cloudinaryImageId} alt="" />
      </div>
      <div className="description">
        <p className="Name">{name}</p>
        <p className="cusine">{cuisines.join(",")}</p>
        <p>{avgRating}⭐</p>

        <p>{costForTwo}</p>
        <p>{logged}</p>
      </div>
    </div>
  );
};

export const withpromotedlabel = (Restruentcard) => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <Restruentcard {...props} />
      </div>
    );
  };
};
export default Restruentcard;
