import React, { ChangeEvent, FormEvent, useState } from "react";
import { Modal, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";

const RegisterWindow: React.FC = observer(() => {
    const rootStore = useStore();
    const { headerStore, userStore } = rootStore!;
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: ''
    });

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = ev.currentTarget;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        await userStore.register(formData);
    };

    return (
        <Modal style={{ marginRight: '10px' }} show={headerStore.isRegisterModal} onHide={() => headerStore.closeRegisterModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Регистрация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="fromBasicName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Имя" name="name" onChange={handleChange} />
                        <Form.Text className="text-muted">Введите ваше имя</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicSurname">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" placeholder="Фамилия" name="surname" onChange={handleChange} />
                        <Form.Text className="text-muted">Введите вашу фамилию</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPatronymic">
                        <Form.Label>Отчество</Form.Label>
                        <Form.Control type="text" placeholder="Отчество" name="patronymic" onChange={handleChange} />
                        <Form.Text className="text-muted">Введите ваше отчество</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control type="email" placeholder="Почта" name="email" onChange={handleChange} />
                        <Form.Text className="text-muted">Введите вашу почту</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" name="password" onChange={handleChange} />
                        <Form.Text className="text-muted">Введите ваш пароль</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col xs="6">
                                <Button className="w-100" type="submit" variant="success">Регистрация</Button>
                            </Col>
                            <Col xs="6">
                                <Button className="w-100" onClick={() => headerStore.closeRegisterModal()} variant="danger">Закрыть</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                    {userStore.status && (
  <Alert className="mt-2" variant={userStore.statusCode >= 200 && userStore.statusCode < 300 ? 'success' : 'danger'}>
    {userStore.status}
  </Alert>)
}
                </Form>
            </Modal.Body>
        </Modal>
    );
});

export default RegisterWindow;