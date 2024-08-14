import React from "react";
import { Carousel } from "react-bootstrap";
import cloud1 from '../../cloud1.jpeg';
import cloud2 from '../../cloud2.jpg';
import cloud3 from '../../cloud3.jpg';
const Slider:React.FC = ()=>{
    return(
        <>
        <Carousel>
            <Carousel.Item style={{'height':'600px'}}>
                <img className="w-100" src={cloud1}/>
                <Carousel.Caption>
                    <h1>Cloud1</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'600px'}}>
                <img className="w-100" src={cloud2}/>
                <Carousel.Caption>
                    <h1>Cloud2</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'600px'}}>
                <img className="w-100" src={cloud3}/>
                <Carousel.Caption>
                    <h1>Cloud3</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
};

export default Slider;