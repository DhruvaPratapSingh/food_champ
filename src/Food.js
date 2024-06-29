import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { ClerkProvider} from "@clerk/clerk-react";
// import Grocery from "./components/Grocery";
// chunking
// code bundeling
// code splitting
// lazy loading
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PUBLISHABLE_KEY ="pk_test_Y2VydGFpbi1yZWRmaXNoLTQwLmNsZXJrLmFjY291bnRzLmRldiQ";
const Grocery = lazy(()=> import("./components/Grocery"));
const AppLayout = () => {
    const [userName,setuserName]=useState();
    useEffect(()=>{
        const data={
            name:"Dhruva thakur",
        };
        setuserName(data.name);
    },[]);
    return ( 
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
        <div>
           <Header />
            {/* <Body /> */} 
            <Outlet/> 
        </div>
     </UserContext.Provider> 
     </Provider>
    );
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
                {
                path:'/',
                element:
                    <Body/>
                },
               {
                path:'/about',
                element:<About/>
               },
               {
               path:'/contact',
               element:<Contact/>
               },
               {
               path:'/grocery',
               element:(
               <Suspense fallback={<h1>Loading....</h1>}>
               <Grocery/>
               </Suspense>
               
               )
               },
            {
                path:'restaurants/:resid',
                element:
                    <RestaurantMenu/>
               
            },
            {
                path:"/cart",
                element: 
                    <Cart/>
            },
            {
                path:'/login',
                // element:
                // <Login/>

            }
        ],
        errorElement:<Error/>
    }]);
// Ensure you have the correct import for createRoot
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider
     router={appRouter}/>
    </ClerkProvider>
  </React.StrictMode>,
    
);
