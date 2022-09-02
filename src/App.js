import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home";
import AdminMenus from "./pages/AdminMenus";
import AdminNews from "./pages/AdminNews";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import Navbar from "./components/Navbar";
import Uz from "./pages/Uz";
import Ru from "./pages/Ru";



function App() {
    return (
        <>
          <Router>
              <Navbar/>
              <Routes>
                  <Route element={<PrivateRoutes/>}>
                      <Route element={<Home/>} path="/" exact/>
                      <Route element={<AdminMenus/>} path="/admin/menus" exact/>
                      <Route element={<AdminNews/>} path="/admin/news" exact/>
                  </Route>
                  <Route path='uz' element={<Uz/>}/>
                  <Route path='ru' element={<Ru/>}/>
                  <Route element={<Login/>} path='/login'/>
              </Routes>
              <ToastContainer/>
          </Router>
        </>
    );
}

export default App;
