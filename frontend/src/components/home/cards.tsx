import React from "react";
import Card_Item from "./card_item";
import cloud1 from '../../cloud1.jpeg';
import cloud2 from '../../cloud2.jpg';
import cloud3 from '../../cloud3.jpg';
import { Container, Row } from "react-bootstrap";

const Cards:React.FC = ()=>{
    const cards_array = [
        {
        image:cloud1,
        header:'Header1',
        body:'Lorem ispum huynya'
    },
    {
        image:cloud2,
        header:'Header1',
        body:'Lorem ispum huynya'
    },
    {
        image:cloud3,
        header:'Header1',
        body:'Lorem ispum huynya'
    },
];
    return(
        <Container>
        <h1 className="text-center">Наши готовы решения</h1>
        <Row className="gap-2">
        {cards_array.map((el,i)=><Card_Item key={i} image={el.image} header={el.header} body={el.body}/>)}
        </Row>
        
        </Container>
    );
}

export default Cards;