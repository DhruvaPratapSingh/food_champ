import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showitems,setshowindex}) => {
    // console.log(data);
    // const [showitems,setshowitems]=useState(false);
    // const handleclick=()=>{
    //  setshowitems(!showitems)
    // }
    const handleclick=()=>{
        setshowindex();
       }
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg rounded-lg">
        <div className=" flex justify-between p-2  cursor-pointer " onClick={handleclick}>
         <span className="font-bold text-xl">{data?.title} ({data?.itemCards?.length})</span>
         <span>🔽</span>
        </div>
        {/* {accordian body} */}
        {showitems && <ItemList items={data?.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory;
