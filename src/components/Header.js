import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
const Header=()=>{
    const [btntext,setbtntext]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const handleButtonClick = () => {
        setbtntext(prevText => prevText === "Login" ? "Logout" : "Login");
    };
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };
    const {loggedInUser}=useContext(UserContext);
    // console.log(data);
    const cartitems=useSelector((store)=>store.cart.items);
    console.log(cartitems);
    return (

        <div className="w-full flex flex-shrink justify-between  shadow-2xl font-sans font-extralight border rounded-lg  text-lg  bg-gray-100 cursor-pointer">
        
           <div className="w-3/12 ">
            <img className="w-[150px] h-full object-cover" src={LOGO_URL}/>
           </div>
           <div className="w-9/12 text-[24px]  m-4">
           <div className="sm:hidden" onClick={handleMenuToggle}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            <ul className={`flex flex-row justify-between sm:flex-row sm:items-center sm:space-x-1 my-6 ${menuOpen ? "flex" : "hidden"} sm:flex`}>
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
               <li className="" > <Link to="/login"><button className=" font-sans border border-black rounded-lg text-2xl h-8 w-20 bg-red-500 cursor-pointer text-center font-normal focus:bg-green-500" onClick={handleButtonClick}>{btntext}</button></Link>

               </li>
            </ul>
           </div>
        </div>
    )
}
export default Header;