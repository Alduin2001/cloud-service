import React from "react";
import Slider from "./slider";
import Cards from "./cards";
const Home:React.FC = ()=>{
    return(
        <section>
            <Slider/>
            <Cards/>
        </section>
    )
};

export default Home;