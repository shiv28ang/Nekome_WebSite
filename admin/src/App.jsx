import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"


export default function App() {
  return (
   <BrowserRouter>
   <ToastContainer/>
    <Navbar/>
    <hr />
    <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/orders" element={<Orders />}/>
      </Routes>
    </div>
   </BrowserRouter>
  )
}