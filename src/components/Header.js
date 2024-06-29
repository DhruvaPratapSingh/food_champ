import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { SignedOut,SignInButton,SignedIn,SignUpButton,UserButton } from "@clerk/clerk-react";
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
               <li className="" >
                <header>
    <div className="flex items-center flex-wrap text-sm md:text-lg ">
    <SignedOut>
      <SignInButton className="bg-slate-500 rounded-2xl m-2 p-2 hover:text-white hover:bg-red-500 font-medium" />
      <SignUpButton className="bg-slate-500  rounded-2xl m-2 p-2 hover:text-white hover:bg-green-300 font-medium"/>
    </SignedOut>
    </div>
    <div>
    <SignedIn >
      <UserButton />
    </SignedIn>
    </div>
  </header>

               </li>
            </ul>
           </div>
        </div>
    )
}
export default Header;