import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const CreateTarif:React.FC = ()=>{
    
    document.title = "Добавление тарифа";
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" placeholder="Название"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="number" />
                    <Form.Text>Введите цену в рублях</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Размер</Form.Label>
                    <Form.Control type="number" />
                    <Form.Text>Введите размер в мегабайтах</Form.Text>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Row>
                        <Col>
                            <Button variant="success" className="w-100" type="submit">Добавить</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" className="w-100">Очистить форму</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default CreateTarif;