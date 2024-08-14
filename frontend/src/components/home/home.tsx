import React from "react";
import Slider from "./slider";
import Cards from "./cards";
import { Container } from "react-bootstrap";
const Home:React.FC = ()=>{
    document.title = "Главная";
    return(
        <Container className="mt-2">
        <Slider/>
        <Cards/>
        </Container>
    )
};

export default Home;