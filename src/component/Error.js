
//useRouteError this hooks gives us by the react router dom
import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err =useRouteError();
    console.log(err);
    return(
        <div>
            <h1>oops something went wrong 😮</h1>
        </div>
    )
}
export default Error;