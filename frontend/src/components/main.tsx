import React from "react";
import Home from "./home/home";
import { Routes, Route } from "react-router-dom";

const Main:React.FC = ()=>{
    return(
        <main>
            <Routes>
                <Route path="/" Component={Home}/>
            </Routes>
        </main>
    );
}

export default Main;