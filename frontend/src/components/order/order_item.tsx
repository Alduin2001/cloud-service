import React from "react";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";

interface OrderOption{
    user:string,
    tarif:string,
    description:string,
    createdAt:string
}
const OrderItem:React.FC<OrderOption> = ({user,tarif,description,createdAt})=>{

    return(
        <Col>
            <Card>
                <Card.Header>Пользователь {user}</Card.Header>
                <CardBody>
                    <p>Тариф: {tarif}</p>
                    <p>{description}</p>
                    <Row>
                        <Col>
                            <Button variant="primary" className="w-100">Редактировать</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" className="w-100">Удалить</Button>
                        </Col>
                    </Row>
                </CardBody>
                <Card.Footer>{createdAt}</Card.Footer>
            </Card>
        </Col>
    )
}
export default OrderItem;