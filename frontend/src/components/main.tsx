import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoute } from "../config/routes";

const Main:React.FC = ()=>{
    return(
        <main>
            <Routes>
                {publicRoute.map((el,i)=><Route key={i} path={el.path} Component={el.component}/>)}
            </Routes>
        </main>
    );
}

export default Main;