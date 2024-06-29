/*
import RestaurantCard, { withPromotedlebel } from "./RestaurantCard";
// import resobj from "../utils/resobj";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const [listofRestaurant,setlistofRestaurant]=useState([]);
   const [searchtext,setsearchtext]=useState("");
   const [filteredrestaura,setfilteredrestaura]=useState([]);
   const RestaurantCardPromoted=withPromotedlebel(RestaurantCard);
// console.log(listofRestaurant);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json= await(data.json());
    //   console.log(json);
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //   console.log(restaurants)
        setlistofRestaurant(restaurants);
            setfilteredrestaura(restaurants);
    };
    const onlineStatus=useOnlineStatus();
    if(!onlineStatus)return <h1 className="text-center font-semibold">Looking like you're offline !!</h1>

    const {loggedInUser,setuserName}=useContext(UserContext);
    // conditional rendering
    // if(listofRestaurant.length===0){
    //     return <Shimmer/>
    // }
    // console.log("body render");

    return listofRestaurant.length === 0 ? <Shimmer/>:(
        <>
            <div className="body mt-10">
                <div className="flex items-center gap-10 ml-5">
                <div className="search">
                <button className="text-2xl  hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600" onClick={()=>{
                    console.log("search text");
                    const filterres=listofRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                    setfilteredrestaura(filterres);
                    }}>search: </button>
                    <input type="text" className="rounded-lg text-center border-2 border-black text-xl shadow-xl" placeholder="search here" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value)
                    }}/>
                   
                </div>
                   <button className="border-2 border-black font-medium
                   hover:border-blue-600 m-3 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-60 hover:bg-slate-300 " onClick={()=>{
                   let filteredata=listofRestaurant.filter((res)=>res.info.avgRating>4);
                    setfilteredrestaura(filteredata);
                   }}>Top rated Restaurants</button>
                    <div>
      <label className="text-xl shadow-2xl">userName:</label>
      <input
        type="text"
          className="border-2 rounded-lg m-2 text-center text-xl
          focus:border-0
         focus:border-blue-600
          focus:bg-blue-100"
        value={loggedInUser}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
    </div>
                </div>
                <div className="flex flex-wrap">
                    // { <RestaurantCard resdata={resobj[i]}/> }
                    {
                      //  /*filteredrestaura.map(restaurant=>
                      // <RestaurantCard  resdata={restaurant} key={restaurant.info.id}/> )*/
//                     } 
//                     {filteredrestaura.map(restaurant => (
//                     <Link className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600 
//                     " key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
//                     {
//                         restaurant.info.isOpen ?
//                         <RestaurantCardPromoted resdata={restaurant}/>:<RestaurantCard  resdata={restaurant} />
//                     }
                  
//                   </Link>
//                    ))}
//                 </div>
//             </div> 
//         </>
//     )
// }
// export default Body;*/

import React, { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import RestaurantCard, { withPromotedlebel } from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constant";

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedlebel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setuserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `${SWIGGY_API}?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListofRestaurant(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!onlineStatus) {
    return <h1 className="text-center font-semibold">Looks like you're offline!!</h1>;
  }

  return listofRestaurant.length === 0 ? <Shimmer /> : (
    <>
      <div className="mt-10">
        <div className="flex items-center gap-10 ml-5">
          <div className="search">
            <button
              className="text-2xl hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600"
              onClick={() => {
                const filteredRes = listofRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRes);
              }}
            >
              Search:
            </button>
            <input
              type="text"
              className="rounded-lg text-center border-2 border-black text-xl shadow-xl"
              placeholder="search here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button
            className="border-2 border-black font-medium hover:border-blue-600 m-3 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-60 hover:bg-slate-300"
            onClick={() => {
              const filteredData = listofRestaurant.filter((res) => res.info.avgRating > 4);
              setFilteredRestaurants(filteredData);
            }}
          >
            Top rated Restaurants
          </button>
          <div>
            <label className="text-xl shadow-2xl">userName:</label>
            <input
              type="text"
              className="border-2 rounded-lg m-2 text-center text-xl focus:border-0 focus:border-blue-600 focus:bg-blue-100"
              value={loggedInUser}
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14 justify-center m-4 items-center">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600 flex items-center justify-center"
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted resdata={restaurant} />
              ) : (
                <RestaurantCard resdata={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
