import React, { useEffect, useState } from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { MENU_API } from '../utils/constant';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  // const [resinfo, setResinfo] = useState(null);
  // const { resid } = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(
  //      MENU_API+resid
  //     );
  //     const json = await data.json();
  //     console.log(json);
  //     setResinfo(json.data);
  //   } catch (error) {
  //     console.error('Error fetching menu:', error);
  //   }
  // };

   const {resid}=useParams();
   const resinfo=useRestaurantMenu(resid);
   const [showindex,setshowindex]=useState(null);

// console.log(resinfo);
  if (resinfo == null) return <Shimmer />;

  const restaurantInfo = resinfo?.cards?.find(card => card?.card?.card?.info);
  const { name, cuisines, costForTwo } = restaurantInfo?.card?.card?.info || {};

  const menuGroup = resinfo?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const itemCards = menuGroup?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(card => card?.card?.card?.itemCards)?.card?.card?.itemCards || [];
  // console.log(resinfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);
  return (
    <div className='text-center'>
      <h1 className='font-bold my-5 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines ? cuisines.join(", ") : ""} - {costForTwo}</p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.length === 0 ? (
          <li>No items available</li>
        ) : (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}
              {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </li>
          ))
        )}
      </ul> */}
      <p>
      {
                categories && categories.length > 0 ? (
                    categories.map((category, index) => (
                        <RestaurantCategory
                            key={index}
                            data={category?.card?.card}
                            showitems={index === showindex}
                            setshowindex={() => setshowindex(index)}
                        />
                    ))
                ) : (
                    <p>No categories available</p>
                )
            }
      </p>
    </div>
  );
};

export default RestaurantMenu;
