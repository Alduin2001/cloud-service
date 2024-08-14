import React from "react";
import { Carousel, Image } from "react-bootstrap";
import cloud1 from '../../cloud1.jpeg';
import cloud2 from '../../cloud2.jpg';
import cloud3 from '../../cloud3.jpg';
const Slider:React.FC = ()=>{
    return(
        <>
        <Carousel style={{maxHeight:'600px'}}>
            <Carousel.Item style={{maxHeight:'600px'}}>
                <Image className="d-block w-100" src={cloud1} fluid/>
                <Carousel.Caption>
                    <h1>Добро пожаловать на наш сайт!</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{maxHeight:'600px'}}>
                <Image className="d-block w-100" src={cloud2} fluid/>
                <Carousel.Caption>
                    <h1>Здесь вы найдёте много для себя очень интересных решений</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{maxHeight:'600px'}}>
                <Image className="d-block w-100" src={cloud3} fluid/>
                <Carousel.Caption>
                    <h1>У нас подобраны тарифы облачных решений для вас!</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
};

export default Slider;