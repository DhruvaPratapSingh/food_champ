import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
 // check if online
const [onlineStatus,setonlineStatus]=useState(true);
useEffect (()=>{
window.addEventListener("offline",()=>{
setonlineStatus(false);
})  
window.addEventListener("online",()=>{
setonlineStatus(true);
})  
},[]);

//  boolean value
    return onlineStatus;
}
export default useOnlineStatus;