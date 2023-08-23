import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    //check online status
const[onlinestatus, setOnlinestatus]=useState(true)
    useEffect(()=>{
window.addEventListener("offline" ,()=>{
    setOnlinestatus(false)
})

window.addEventListener("online" ,()=>{
    setOnlinestatus(true)
})

    },[])
    return onlinestatus;
}
export default useOnlineStatus