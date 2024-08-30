import React,{MouseEvent, useState} from "react";
import { Button, Card, CardBody, Col, Row, Form, Alert } from "react-bootstrap";
import moment from "moment";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
interface OrderOption{
    _id:string,
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
const OrderItem:React.FC<OrderOption> = observer(({_id, user,tarif,description,createdAt})=>{
    const rootStore = useStore();
    const {orderStore} = rootStore!;
    const allowOrder = async (ev:MouseEvent<HTMLButtonElement>)=>{
        ev.preventDefault();
        await orderStore.changeStatus(_id,{status:'Одобрено'});
    }
    const dissalowOrder = async (ev:MouseEvent<HTMLButtonElement>)=>{
        ev.preventDefault();
        await orderStore.changeStatus(_id,{status:'Отклонено'});
    }
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
                            <Button variant="success" className="w-100" onClick={allowOrder}>Подтвердить</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" className="w-100" onClick={dissalowOrder}>Отклонить</Button>
                        </Col>
                    </Row>
                    </Form>
                </CardBody>
                <Card.Footer>{moment(createdAt).format('d.MM.yyyy, H:mm')}</Card.Footer>
            </Card>
        </Col>
    )
})
export default OrderItem;