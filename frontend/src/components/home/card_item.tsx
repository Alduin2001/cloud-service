import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CardOption{
    image:string,
    name:string,
    price:number,
    size:number
}
const Card_Item:React.FC<CardOption> = ({image,name,price,size})=>{
    return(
        <Col> 
        <Card>
            <Card.Img style={{maxHeight:"300px",objectFit:'cover'}} variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Цена: {price} рублей</Card.Text>
                <Card.Text>Размер: {size} мб</Card.Text>
                <Card.Link as={Link} to="/about">Смотреть подробнее</Card.Link>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default Card_Item;