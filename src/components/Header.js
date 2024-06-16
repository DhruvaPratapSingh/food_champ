import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
const Header=()=>{
    const [btntext,setbtntext]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const handleButtonClick = () => {
        setbtntext(prevText => prevText === "Login" ? "Logout" : "Login");
    };

    const {loggedInUser}=useContext(UserContext);
    // console.log(data);
    const cartitems=useSelector((store)=>store.cart.items);
    console.log(cartitems);
    return (
        <div className="w-full flex justify-between  border-b-2  shadow-2xl font-sans font-extralight border border-black rounded-lg  text-lg  bg-gray-100 cursor-pointer">
           <div className="w-3/12 ">
            <img className="w-[150px] h-full object-cover" src={LOGO_URL}/>
           </div>
           <div className="w-9/12 text-[24px] m-4 sm:">
            <ul className="flex justify-between items-center my-10">
            <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600">
                Online status:{
                onlineStatus ? "✅":"❓"
                }
            </li>
                <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600"><Link to="/">Home</Link> </li>
                <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600"><Link to="/about">About us </Link> </li>
                <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600"><Link to="/contact">contact</Link></li>
                <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600"><Link to="/grocery">Grocery</Link></li>
                <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600"><Link to="/cart">
                <sup>({cartitems.length})<FaCartShopping /></sup></Link></li>
                <li className="hover:bg-blue-100 hover:shadow-2xl rounded-lg text-center py-1 px-2 shadow-xl hover:border-b-2 hover:border-blue-600">{loggedInUser}</li>
               <li className="" > <button className=" font-sans border border-black rounded-lg text-2xl h-8 w-20 bg-red-500 cursor-pointer text-center font-normal focus:bg-green-500" onClick={handleButtonClick}>{btntext}</button>

               </li>
            </ul>
           </div>
        </div>
    )
}
export default Header;