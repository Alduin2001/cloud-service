import React from "react";
import { Button, Card, Col } from "react-bootstrap";

interface CardOption{
    image:string,
    header:string,
    body:string
}
const Card_Item:React.FC<CardOption> = ({image,header,body})=>{
    return(
        <Col> 
        <Card>
            <Card.Img style={{maxHeight:"300px",objectFit:'cover'}} variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{header}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <Button variant="warning" className="text-white">Смотреть подробнее</Button>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default Card_Item;