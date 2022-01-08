import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import  Home  from "./views/Home"
import { Login } from "./views/Login"
import { NotFound } from "./views/Notfound"
import { Profile } from "./views/Profile"

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>    
                <Route exact path="/profile"  element={<Profile/>}>
                    <Profile/>
                </Route> 
                <Route exact path="/login"  element={<Login/>}>
                    <Login/>
                </Route>
                <Route exact path="/"  element={<Home/>} >
                    <Home/>
                </Route>
                <Route  element={NotFound} />
            </Routes>
        </BrowserRouter> 
    );
};
export default Layout;

/*import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    } from "react-router-dom";
  
  // ...
  
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}>
            <Home/>
        </Route>
        </Routes>
    </BrowserRouter>*/