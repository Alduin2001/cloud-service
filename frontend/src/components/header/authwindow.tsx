import React, { ChangeEvent, FormEvent, useState } from "react";
import { Modal, Form, Row, Col, Button, Toast } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const AuthWindow:React.FC = observer(()=>{
    const rootStore = useStore();
    const {headerStore,userStore} = rootStore!;
    const [error,setError] = useState('');
    const [toast,setToast] = useState(false);
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });
    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = ev.currentTarget;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }
    const submitForm = async (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        await userStore.login(formData)
        .then(res=>headerStore.closeAuthModal())
        .catch(error=>{
            setError('Неверно введены данные')
            setToast(true);
        });
        clearForm();
    }
    const clearForm = ()=>{
        setFormData({
            email:'',
            password:''
        })
    }
    return(
        <Modal style={{marginRight:'10px'}} show={headerStore.isAuthModal} onHide={()=>headerStore.closeAuthModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Авторизоваться</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitForm}>
                    <Form.Group controlId="fromBasicEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control type="email" placeholder="Почта" name="email" value={formData.email} onChange={handleChange}/>
                        <Form.Text className="text-mutted">Введите вашу почту</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" name="password" value={formData.password} onChange={handleChange}/>
                        <Form.Text className="text-mutted">Введите ваш пароль</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Row>
                            <Col xs="6">
                        <Button className="w-100" type="submit" variant="success">Авторизоваться</Button>
                        </Col>
                        <Col xs="6">
                        <Button className="w-100" onClick={()=>headerStore.closeAuthModal()} variant="danger">Закрыть</Button>
                        </Col>
                        </Row>
                    </Form.Group>
                </Form>
                {error.length>0 && (
                    <Toast className="mt-2 bg-danger text-white w-100 alert alert-danger" delay={4000} onClose={()=>setToast(false)} show={toast} autohide>
                    <Toast.Body>
                    {error}
                    </Toast.Body>
                    </Toast>
                )}
            </Modal.Body>
        </Modal>
    )
})
export default AuthWindow;