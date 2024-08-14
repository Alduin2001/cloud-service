import React from "react";
import { Card, Col } from "react-bootstrap";

interface CardOption{
    image:string,
    header:string,
    body:string
}
const Card_Item:React.FC<CardOption> = ({image,header,body})=>{
    return(
        <Col xs={3}> 
        <Card>
            <Card.Img style={{maxHeight:"300px",height:"100%",objectFit:"cover"}} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{header}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default Card_Item;