import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{
    const {loggedInUser}=useContext(UserContext);
    const {resdata}=props;
    const {cuisines,cloudinaryImageId,name,avgRating,costForTwo}=resdata?.info;
    // const imageUrl = CDN_URL + cloudinaryImageId;
    
    // console.log('Image URL:', imageUrl);
    // const {loggedInUser}=useContext(UserContext);
    return(
        <div className="mx-auto bg-slate-200 min-w-64 min-h-80 rounded-md p-1 m-2 border-[1px] border-transparent hover:border-[1px] hover:border-black cursor-pointer hover:overflow-hidden">
         <img className="foodimg" src={CDN_URL+cloudinaryImageId} alt={name}/>
         <div className="">
            <h3 className="text-2xl">{name}</h3>
            <h4 className="text-wrap font-normal ">{cuisines.join(" , ")}</h4>
            <div className="food-info">
            <h5>{avgRating}⭐</h5>
            <h5>{resdata.info.sla.deliveryTime}min</h5>
            <h5>{costForTwo}</h5>
            </div>
            <h4 className="text-start font-medium text-wrap">user:<span className="text-blue-500">{loggedInUser}</span></h4>
            </div>
        </div>
    )
};


export const withPromotedlebel=(RestaurantCard)=>{
    return(props)=>{
    return(
        <div>
           <label className="absolute bg-green-600 text-white ml-[20px] mt-2 p-2 rounded-lg block">Open</label>
           <RestaurantCard {...props}/>
        </div>
    )
}
}

export default RestaurantCard;

