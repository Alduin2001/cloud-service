import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const RegisterWindow:React.FC = observer(()=>{
    const rootStore = useStore();
    const {headerStore} = rootStore!;

    return(
        <Modal style={{marginRight:'10px'}} show={headerStore.isRegisterModal} onHide={()=>headerStore.closeRegisterModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Авторизоваться</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group controlId="fromBasicName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Имя"/>
                        <Form.Text className="text-mutted">Введите ваше имя</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicSurname">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Фамилия"/>
                        <Form.Text className="text-mutted">Введите ваше фамилия</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPatronymic">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control type="text" placeholder="Отчество"/>
                        <Form.Text className="text-mutted">Введите ваше отчество</Form.Text>
                    </Form.Group>
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
                        <Button className="w-100" onClick={()=>headerStore.closeRegisterModal()} variant="danger">Закрыть</Button>
                        </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
})
export default RegisterWindow;