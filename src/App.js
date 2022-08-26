import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
          <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login/>}/>
            </Routes>
          </BrowserRouter>
          <ToastContainer/>
        </>
    );
}

export default App;
