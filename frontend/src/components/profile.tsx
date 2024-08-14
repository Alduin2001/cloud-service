import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Profile:React.FC = ()=>{
    document.title = "Профиль";
    return(
        <Container className="mt-2">
            <h1 className="text-center">Профиль</h1>
            <Form className="p-2 border border-primary rounded">
                <Form.Group>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="Имя"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" placeholder="Фамилия"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control type="text" placeholder="Отчество"/>
                </Form.Group>
                <Form.Group>
                    <Row className="mt-2">
                        <Col>
                            <Button variant="success" className="w-100" type="submit">Поменять</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" className="w-100" type="submit">Удалить</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Profile;