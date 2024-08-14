import React,{useState} from "react";
import { Button, Form, Modal, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent:React.FC = () => {
    const [show,setShow] = useState(false);
    const handleShow = ()=> setShow(true);
    const handleClose = ()=> setShow(false);
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="ms-2" as={Link} to="/">
                <h1>CloudWare</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link as={Link} to="/">Главная</Nav.Link>
                    <Nav.Link as={Link} to="/about">О нас</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Button className="me-2" variant="primary" onClick={handleShow}>Регистрация</Button>
                    <Button className="me-2" variant="primary" onClick={handleShow}>Авторизация</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Modal style={{marginRight:'10px'}} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Авторизоваться</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control type="email" placeholder="Почта"/>
                        <Form.Text className="text-mutted">Введите вашу почту</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль"/>
                        <Form.Text className="text-mutted">Введите ваш пароль</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col xs="6">
                        <Button className="w-100" type="submit" variant="success">Авторизоваться</Button>
                        </Col>
                        <Col xs="6">
                        <Button className="w-100" onClick={handleClose} variant="danger">Закрыть</Button>
                        </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>

        </Modal>
        </>
    );
};

export default HeaderComponent;