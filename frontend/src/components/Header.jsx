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
import React, { useContext, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/nekomelogo.png";
import { ShopContext } from "../context/ShopContext";
import Navbar from "./Navbar";

const Header = ({setShowLogin}) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { cartItems } = useContext(ShopContext);
  const totalItems = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

  return (
    <header className="fixed right-0 left-0 mx-auto z-10">
      <div className="max-padd-container bg-white">
        <div className="flexBetween py-4 max-xs:px-2">
          <div className="flexCenter gap-x-20">
            {/* Logo */}
            <Link to={"/"}>
              <img src={logo} alt="logoImg" height={100} width={100} />
            </Link>

            {/* Desktop Nav Bar */}
            <div className="hidden md:flex gap-x-5 xl:gap-x-10">
              <Navbar containerStyles="desktop-nav" />
            </div>

            {/* Mobile Nav Bar */}
            {menuOpened && (
              <div
                className="flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              >
                <Navbar containerStyles="mobile-nav" />
              </div>
            )}
          </div>
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
              <Link className="flex">
                <FaBasketShopping className="text-[22px]" />
                {totalItems > 0 && (
                  <span className="relative flexCenter w-4 h-4 rounded-full bg-secondary text-white medium-14 -top-1 -right-2">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button onClick={()=>setShowLogin(true)}
              className="btn-outline rounded-full ml-4">LogIn</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
