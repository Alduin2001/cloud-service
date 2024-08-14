import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";

interface CloudOption{
    image:string,
    header:string,
    body:string
}
const MyCloudItem:React.FC<CloudOption> = ({image,header,body})=>{
    return(
        <Col md={4}>
            <Card>
                <Card.Img className="w-100" style={{maxHeight:"300px"}} src={image} variant="top"/>
                <Card.Header>{header}</Card.Header>
                <Card.Body>{body}</Card.Body>
                <Row>
                    <Col>
                        <Button variant="success" className="w-100 mt-2">Скачать</Button>
                    </Col>
                    <Col>
                        <Button variant="danger" className="w-100 mt-2">Удалить</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
export default MyCloudItem;