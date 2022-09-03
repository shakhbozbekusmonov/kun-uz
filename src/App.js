import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './sass/main.scss';
import {ToastContainer} from "react-toastify";
import AdminMenus from "./pages/AdminMenus";
import AdminNews from "./pages/AdminNews";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import Uz from "./pages/Uz";
import Ru from "./pages/Ru";
import En from "./pages/En";
import Home from "./pages/Home";


function App() {
    return (
        <>
          <Router>
              <Routes>
                  <Route element={<PrivateRoutes/>}>
                      <Route path='/' index element={<Home/>}/>
                      <Route element={<AdminMenus/>} path="/admin/menus" exact/>
                      <Route element={<AdminNews/>} path="/admin/news" exact/>
                  </Route>
                  <Route path='uz' element={<Uz/>}/>
                  <Route path='ru' element={<Ru/>}/>
                  <Route path='en' element={<En/>}/>
                  <Route element={<Login/>} path='/login'/>
              </Routes>
              <ToastContainer autoClose={2000}/>
          </Router>
        </>
    );
}

export default App;
