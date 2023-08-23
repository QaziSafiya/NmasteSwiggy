
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
const useRestaurantsMenu=(resId)=>{
    // fetch the data

    const[resInfo , setResInfo]= useState(null)
    useEffect(()=>{
        fetchMenu();
          },[])
        
          const fetchMenu=async()=>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data)
          };



return resInfo
}
export default useRestaurantsMenu;