// // import React from 'react';
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Header from "./components/Header";
// // import Order from "./components/Order";
// // import Cart from "./pages/Cart";
// // import Home from "./pages/Home";
// // import MyOrders from "./pages/MyOrders";
// // import Product from "./pages/Product";
// // import Verify from "./pages/Verify";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Header /> 
// //       <Routes>
// //         <Route path= "/" element={<Home />} />
// //         <Route path="/product">
// //           <Route index element={<Product />} />
// //           <Route path=":productId" element={<Product />} />
// //         </Route>
// //         <Route path="/cart" element={< Cart />} />
// //         <Route path="/order" element={<Order />} />
// //         <Route path="/verify" element={<Verify />} />
// //         <Route path="/myorders" element={<MyOrders />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//     <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//  export default App;
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LoginPopup from './components/LoginPopup';
import Cart from './pages/Cart';
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <BrowserRouter>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <Header setShowLogin={setShowLogin} /> 
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/product">
          <Route index element={<Product />} />
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        {/*<Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

