import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import {clearCart}  from "../utils/cardSlice";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart());
}
  return (
    <div className='text-center m-4 p-4'>
    <div className="w-6/12 m-auto">
    <button className="bg-black text-white py-2 px-4 mb-4" onClick={handleClearCart}>
          Clear Cart
        </button>
     <ItemList items={cartItems}/>
    </div>
    </div>
  )
}

export default Cart
