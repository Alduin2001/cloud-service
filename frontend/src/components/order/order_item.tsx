import React from "react";
import { Button, Card, CardBody, Col, Row, Form } from "react-bootstrap";
import moment from "moment";
interface OrderOption{
    user:{
        name:string,
        surname:string,
        patronymic:string
    },
    tarif:{
        name:string,
        size:number,
        price:number
    },
    description:string,
    createdAt:string
}
const OrderItem:React.FC<OrderOption> = ({user,tarif,description,createdAt})=>{

    return(
        <Col>
            <Card>
                <Card.Header>{user.surname} {user.name} {user.patronymic}</Card.Header>
                <CardBody>
                    <Card.Text>Тариф:</Card.Text>
                    <Card.Text>{tarif.name}</Card.Text>
                    <Card.Text>{tarif.price} рублей</Card.Text>
                    <Card.Text>{tarif.size} мб</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Form>
                    <Row>
                        <Col>
                            <Button variant="success" className="w-100">Подтвердить</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" className="w-100">Удалить</Button>
                        </Col>
                    </Row>
                    </Form>
                </CardBody>
                <Card.Footer>{moment(createdAt).format('d.MM.yyyy, H:mm')}</Card.Footer>
            </Card>
        </Col>
    )
}
export default OrderItem;