import React from 'react'
import { CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cardSlice';
const ItemList = ({items}) => {
    // console.log(items);
    const dispatch=useDispatch();
    const handleadditem=(item)=>{
      // dispatch an action
      dispatch(addItem(item))
    }
  return (
    <div className='border-b-2  ml-4'>
    {items.map((item) => (
        <div key={item?.card?.info?.id} className='p-2 m-2 flex justify-between border-gray-500 border-b-2 text-left'>
          <div className='w-9/12'>
            <div className='py-2'>
              <span className='text-[20px]'>{item?.card?.info?.name}</span>
              <span className='text-[20px]'> — ₹{(item?.card?.info?.price)/100 || (item?.card?.info?.defaultPrice)/100}</span>
              <br/>
          </div>
            <span className='text-sm '>{item?.card?.info?.description}</span>
            </div>
          <div className='w-3/12 p-4'>
          <div className='absolute'>
          <button className='p-1 rounded-lg text-xl bg-green-400' onClick={()=>handleadditem(item)}>add+</button>
          </div>
          <img className='w-full  rounded-md' src={CDN_URL+item?.card?.info?.imageId} 
          />
          </div>
          </div>
        ))}
    </div>
  )
}

export default ItemList
