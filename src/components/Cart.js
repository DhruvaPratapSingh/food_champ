import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import {clearCart}  from "../utils/cardSlice";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart());
}
  return (
    <div className='text-center m-16 p-4'>
    <div className="w-6/12 m-auto">
    <div className="border-b-2 border-gray-500">
    <button className="bg-black rounded-lg text-white py-2 px-4 mb-4 shadow-2xl shadow-red-500" onClick={handleClearCart}>
          Clear Cart
        </button>
        </div>
     <CartItems items={cartItems}/>
     {cartItems.length==0?<Link className='style-none' to="/"><h1 className='text-2xl text-center py-4 hover:text-blue-400'>click here to add items</h1></Link>:""}
    </div>
    </div>
  )
}

export default Cart
