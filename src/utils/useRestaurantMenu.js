import { useEffect,useState } from "react"
import { MENU_API } from "./constant";


const useRestaurantMenu=(resid)=>{
    const [resinfo, setResinfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

const fetchData=async()=>{
    const data=await fetch(MENU_API+resid);
    const json =await data.json();
    console.log(json);
    setResinfo(json.data);
}
return resinfo;
}
export default useRestaurantMenu;