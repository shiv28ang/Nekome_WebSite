import React, { useContext, useState } from "react";
import { FaBasketShopping, FaCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi"; // Importing the package icon
import { MdClose, MdMenu } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/nekomelogo.png";
import { ShopContext } from "../context/ShopContext";
import Navbar from "./Navbar";

const Header = ({ setShowLogin }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  const { cartItems, getTotalCartAmount, token, setToken } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate the total number of items in the cart
  const totalItems = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <header className="fixed right-0 left-0 mx-auto z-10">
      <div className="max-padd-container bg-white">
        <div className="flexBetween py-4 max-xs:px-2">
          <div className="flexCenter gap-x-20">
            {/* Logo */}
            <Link to={"/"} className="bold-24">
              <img src={logo} alt="logoImg" height={100} width={100} />
            </Link>
            {/* Navbar for Desktop */}
            <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
          </div>
          {/* Buttons */}
          <div className="flexCenter gap-x-6">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="md:hidden cursor-pointer hover:text-secondary text-2xl"
              />
            )}

            <div className="flexBetween gap-x-2 sm:gap-x-5">
              <Link to={"/cart"} className="flex">
                <FaBasketShopping className="text-[22px]" />
                {totalItems > 0 && (
                  <span className="relative flexCenter w-4 h-4 rounded-full bg-secondary text-white medium-14 -top-1 -right-2">
                    {totalItems}
                  </span>
                )}
              </Link>
              {!token ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="btn-outline rounded-full ml-4"
                >
                  Login
                </button>
              ) : (
                <div className="group relative">
                  <FaCircleUser className="text-2xl" />
                  <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">
                    <li
                      onClick={() => navigate('/myorders')}
                      className="flex items-center gap-x-2 p-2 hover:bg-white cursor-pointer"
                    >
                      <FiPackage className="text-[29px]" />
                      <p>Orders</p>
                    </li>
                    <hr className="my-2" />
                    <li
                      onClick={logout}
                      className="flex items-center gap-x-2 p-2 hover:bg-white cursor-pointer"
                    >
                      <TbLogout className="text-[29px]" />
                      <p>LogOut</p>
                    </li>
                    {/* Add more menu items here if needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Navbar for Mobile */}
        {menuOpened && (
          <Navbar
            containerStyles={`md:hidden flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-200`}
          />
        )}
      </div>
    </header>
  );
};

export default Header;



// import React, { useContext, useState } from "react";
// import { FaBasketShopping, FaCircleUser } from "react-icons/fa6";
// import { FiPackage } from "react-icons/fi"; // Importing the package icon
// import { MdClose, MdMenu } from "react-icons/md";
// import { TbLogout } from "react-icons/tb";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/nekomelogo.png";
// import { ShopContext } from "../context/ShopContext";
// import Navbar from "./Navbar";

// const Header = ({ setShowLogin }) => {
// const [menuOpened, setMenuOpened] = useState(false);
// const toggleMenu = () => setMenuOpened(!menuOpened);
// const { getTotalCartAmount, token,setToken } = useContext(ShopContext);
// const navigate=useNavigate();
// const {totalItems} = Object.values(cartItems).reduce((acc, count) => acc + count, 0);


//   const logout =()=>{
//     localStorage.removeItem("token")
//     setToken("")
//     navigate("/")
//   }

//   return (
//     <header className="fixed right-0 left-0 mx-auto z-10">
//       <div className="max-padd-container bg-white">
//         <div className="flexBetween py-4 max-xs:px-2">
//           <div className="flexCenter gap-x-20">
//             {/* Logo */}
//             <Link to={"/"} className="bold-24">
//               <img src={logo} alt="logoImg" height={100} width={100} />
//             </Link>
//             {/* Navbar for Desktop */}
//             <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
//           </div>
//           {/* Buttons */}
//           <div className="flexCenter gap-x-6">
//             {!menuOpened ? (
//               <MdMenu
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             ) : (
//               <MdClose
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             )}
            
//             <div className="flexBetween gap-x-2 sm:gap-x-5">
//               <Link to={"/cart"} className="flex">
//                 <FaBasketShopping className="text-[22px]" />
//                 <span
//                   className={
//                     getTotalCartAmount() > 0
//                       ? "relative flexCenter w-2 h-2 rounded-full bg-secondary text-white medium-14 -top-1"
//                       : "w-2 h-2 rounded-full bg-transparent"
//                   }
//                 ></span>
//               </Link>
//               {!token ? (
//                 <button
//                   onClick={() => setShowLogin(true)}
//                   className="btn-outline rounded-full ml-4"
//                 >
//                   Login
//                 </button>
//               ) : (
//                 <div className="group relative">
//                   <FaCircleUser className="text-2xl" />
//                   <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden">
//                   <li onClick={()=>navigate('/myorders')} className="flex items-center gap-x-2 p-2 hover:bg-white cursor-pointer">
//                       <FiPackage className="text-[29px]"/>
//                       <p>Orders</p>
//                     </li>
//                     <hr className="my-2"/>
//                     <li onClick={logout} className="flex items-center gap-x-2 p-2 hover:bg-white cursor-pointer">
//                       <TbLogout className="text-[29px]"/>
//                       <p>LogOut</p>
//                     </li>
//                     {/* Add more menu items here if needed */}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Navbar for Mobile */}
//         {menuOpened && (
//           <Navbar
//             containerStyles={`md:hidden flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-200`}
//           />
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useContext, useState } from "react";
// import { FaBasketShopping, FaCircleUser } from "react-icons/fa6";
// import { FiPackage } from "react-icons/fi";
// import { MdClose, MdMenu } from "react-icons/md";
// import { Link } from "react-router-dom";
// import logo from "../assets/nekomelogo.png";
// import { ShopContext } from "../context/ShopContext";
// import Navbar from "./Navbar";

// const Header = ({ setShowLogin }) => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const toggleMenu = () => setMenuOpened(!menuOpened);
//   const { getTotalCartAmount, token, setToken } = useContext(ShopContext);

//   return (
//     <header className="fixed right-0 left-0 mx-auto z-10">
//       <div className="max-padd-container bg-white">
//         <div className="flexBetween py-4 max-xs:px-2">
//           <div className="flexCenter gap-x-20">
//             {/* Logo */}
//             <Link to={"/"} className="bold-24">
//               <img src={logo} alt="logoImg" height={100} width={100} />
//             </Link>
//             {/* Navbar for Desktop */}
//             <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />
//             {/* Navbar for Mobile */}
//             <Navbar
//               containerStyles={`${
//                 menuOpened
//                   ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-200"
//                   : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300-right-[100%]"
//               }`}
//             />
//           </div>
//           {/* Buttons */}
//           <div className="flexCenter gap-x-6">
//             {!menuOpened ? (
//               <MdMenu
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             ) : (
//               <MdClose
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             )}
//             <div className="flexBetween gap-x-2 sm:gap-x-5">
//               <Link to={"/cart"} className="flex">
//                 <FaBasketShopping className="text-[22px]" />
//                 <span
//                   className={
//                     getTotalCartAmount() > 0
//                       ? "relative flexCenter w-2 h-2 rounded-full bg-secondary text-white medium-14 -top-1"
//                       : "w-2 h-2 rounded-full bg-transparent"
//                   }
//                 ></span>
//               </Link>
//               {!token ? (
//                 <button
//                   onClick={() => setShowLogin(true)}
//                   className="btn-online rounded-full"
//                 >
//                   Login
//                 </button>
//               ) : (
//                 <div className="group relative">
//                   <FaCircleUser className="text-2xl" />
//                   <ul className="absolute right-0 bg-white shadow-lg rounded-lg p-2 hidden group-hover:block">
//                     <li className="flex items-center gap-x-2 p-2 hover:bg-gray-100 cursor-pointer">
//                       <FiPackage />
//                       <p>Orders</p>
//                     </li>
//                     {/* Add more menu items here if needed */}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React,{useContext,useState} from "react";
// import {Link} from "react-router-dom"
// import logo from "../assets/nekomelogo.png"
// import Navbar from "./Navbar"
// import { MdClose,MdMenu } from "react-icons/md";
// import { FaBasketShopping,FaCircleUser } from "react-icons/fa6";
// import { ShopContext } from "../context/ShopContext";

// const Header=({setShowLogin})=>{
//   const[menuOpened,setMenuOpened]=useState(false);
//   const toggleMenu=()=>setMenuOpened(!menuOpened);
//   const {getTotalCartAmount,token,setToken}=useContext(ShopContext)
// }

// return(
//   <header className="fixed right-0 left-0 mx-auto z-10">
//   <div className="max-padd-container bg-white">
//     <div className="flexBetween py-4 max-xs:px-2">
//       <div className="flexCenter gap-x-20">
//         {/*logo */}
//         <Link to={"/"} className="bold-24">
//         <img src={logo} alt="logoImg" height={100} width={100} />
//         </Link>
//         {/*Navbar Desktop */}
//         <Navbar
//         containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
//         {/*Navbar Mobile */}
//         <Navbar
//         containerStyles={`${
//           menuOpened
//           ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-200" :
//           "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300-right-[100%]"
//         }`}/>
//       </div>
//       {/* buttons */}
//       <div className="flexCenter gap-x-6">
//         {
//           !menuOpened ?(
//             <MdMenu
//             onClick={toggleMenu}
//             className="md:hidden cursor-pointer hover:text-secondary text:2xl"/>
//           ) :
//           (
//             <MdClose
//             onClick={toggleMenu}
//             className="md:hidden cursor-pointer hover:text-secondary text-2xl"/>
//           )}
//         <div className="flexBetween gap-x-2 sm:gap-x-5">
//           <Link to={'/cart'} className="flex">
//           <FaBasketShopping className="text-[22px]"/>
//           <span className={getTotalCartAmount()>0 ?
//             "relative flexCenter w-2 h-2 rounded-full bg-secondary text-white medium-14 -top-1"
//             :"w-2 h-2 rounded-full bg-transparent"}></span>
//           </Link>
//           {!token ? (<button onClick={()=>setShowLogin(true)}
//           className="btn-online rounded-full">Login<button/>):
//           (
//             <div className="group relative">
//               <FaCircleUser className="text-2xl"/>
//               <ul>
//                 <li>
//                   <FiPackage/>
//                   <p>Orders</p>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
//   </header>
// )



// import React, { useContext, useState } from "react";
// import { FaBasketShopping } from "react-icons/fa6";
// import { MdClose, MdMenu } from "react-icons/md";
// import { Link } from "react-router-dom";
// import logo from "../assets/nekomelogo.png";
// import Navbar from "./Navbar";
// import { ShopContext } from "../context/ShopContext";

// const Header = () => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const toggleMenu = () => setMenuOpened(!menuOpened);
//   const {cartItems}=useContext(ShopContext)
//   return (
//     <header className="fixed right-0 left-0 mx-auto z-10">
//       <div className="max-padd-container bg-white">
//         <div className="flexBetween py-4 max-xs:px-2">
//           <div className="flexCenter gap-x-20">
//             {/* Logo */}
//             <Link to={"/"}>
//               <img src={logo} alt="logoImg" height={100} width={100} />
//             </Link>

//             {/* Desktop Nav Bar */}
//             <div className="hidden md:flex gap-x-5 xl:gap-x-10">
//               <Navbar />
//             </div>

//             {/* Mobile Nav Bar */}
//             {menuOpened && (
//               <div
//                 className="flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//               >
//                 <Navbar />
//               </div>
//             )}
//           </div>
//           <div className="flexCenter gap-x-6">
//             {!menuOpened ? (
//               <MdMenu
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             ) : (
//               <MdClose
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             )}
//             <div className="flexBetween gap-x-2 sm : gap-x-5">
//               <Link className="flex">
//                 <FaBasketShopping className="text-[22px]"/>
//                 <span className="relative flexcenter w-2 h-2 rounded-full bg-secondary text-white medium-14 -top-1"></span>
//               </Link>
//               <button className="btn-outline rounded-full ml-4">LogIn</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useContext, useState } from "react";
// import { FaBasketShopping } from "react-icons/fa6";
// import { MdClose, MdMenu } from "react-icons/md";
// import { Link } from "react-router-dom";
// import logo from "../assets/nekomelogo.png";
// import { ShopContext } from "../context/ShopContext";
// import Navbar from "./Navbar";

// const Header = ({setShowLogin}) => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const toggleMenu = () => setMenuOpened(!menuOpened);
//   const { cartItems,getTotalCartAmount,token,setToken} = useContext(ShopContext);
//   const {totalItems} = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

//   return (
//     <header className="fixed right-0 left-0 mx-auto z-10 h-20">
//       <div className="max-padd-container bg-white">
//         <div className="flexBetween py-4 max-xs:px-2">
//           <div className="flexCenter gap-x-20">
//             {/* Logo */}
//             <Link to={"/"} className="bold-24">
//               <img src={logo} alt="logoImg" height={100} width={100} />
//             </Link>

//             {/* Desktop Nav Bar */}
//             <div className="hidden md:flex gap-x-5 xl:gap-x-10">
//               <Navbar containerStyles="desktop-nav" />
//             </div>

//             {/* Mobile Nav Bar */}
//             {menuOpened && (
//               <div
//                 className="flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//               >
//                 <Navbar containerStyles="mobile-nav" />
//               </div>
//             )}
//           </div>
//           <div className="flexCenter gap-x-6">
//             {!menuOpened ? (
//               <MdMenu
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             ) : (
//               <MdClose
//                 onClick={toggleMenu}
//                 className="md:hidden cursor-pointer hover:text-secondary text-2xl"
//               />
//             )}
//             <div className="flexBetween gap-x-2 sm:gap-x-5">
//               <Link to={'/cart'} className="flex">
//                 <FaBasketShopping className="text-[22px]" />
//                 {totalItems > 0 && (
//                   <span className="relative flexCenter w-4 h-4 rounded-full bg-secondary text-white medium-14 -top-1 -right-2">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//               <button onClick={()=>setShowLogin(true)}
//               className="btn-outline rounded-full ml-4">LogIn</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
