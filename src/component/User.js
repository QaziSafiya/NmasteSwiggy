const User = (props) => {
  const { name, location } = props;
  return (
    <div>
      <h1>About us</h1>
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    </div>
  );
};
export default User;

/*

/// pass the props in class component we use the constructor
class based component

import React from "react"
class Userclass extends React.Component{

    constructor(props)
    super(props)
    // we can acess the props with this key word
    render(
         return ()
       {
         <div>
        <h1>About us</h1>
<div className="user-card"><h2>Safiya siddiqui 
//as {this .props.name}
</h2>
<h3>location:muzaffarnagar</h3></div>
        </div>
       }
    
    )
}

*/
