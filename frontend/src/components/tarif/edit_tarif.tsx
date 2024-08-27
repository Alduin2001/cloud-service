import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const EditTarif:React.FC = observer(()=>{
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    const [formData,setFormData] = useState({
        name:'',
        price:'',
        size:'',
        description:''
    });
    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = ev.currentTarget;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const submitForm = (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
    }
    return(
        <Modal show={tarifStore.isOpenEditModal} onHide={()=>tarifStore.closeEditModal()}>
            <Modal.Header closeButton>Форма редактирования тарифа</Modal.Header>
            <Form>
                <Form.Group>
                    <Form.Label>Идентификатор</Form.Label>
                    <Form.Control value={tarifStore.selectedTarif}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Название</Form.Label>
                    <Form.Control name="name" value={formData.name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Цена в рублях</Form.Label>
                    <Form.Control name="price" value={formData.price} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Размер в мб</Form.Label>
                    <Form.Control name="size" value={formData.size} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} rows={5}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Button variant="success">Редактировать</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
})

export default EditTarif;