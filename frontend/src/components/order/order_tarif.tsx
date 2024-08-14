import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const OrderTarif:React.FC = ()=>{
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Необходимо выбрать тариф</Form.Label>
                    <Form.Control as="select">
                        <option>Выберите тариф</option>
                        <option>Тариф минимальный</option>
                        <option>Тариф стандарт</option>
                        <option>Тариф бизнес</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Описание"/>
                </Form.Group>
                <Form.Group>
                    <Button variant="success" className="w-100 mt-2">Заказать</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default OrderTarif;