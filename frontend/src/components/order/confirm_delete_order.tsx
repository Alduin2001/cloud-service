import { observer } from "mobx-react";
import React, { FormEvent } from "react";
import { useStore } from "../../config/context";
import { Col, Modal, Row, Button, Form } from "react-bootstrap";

const ConfirmDeleteOrder:React.FC = observer(()=>{
    const rootStore = useStore();
    const {orderStore} = rootStore!;
    const submitForm = async (ev:FormEvent<HTMLFormElement>)=>{
        await orderStore.deleteOrder();
    }
    return(
        <Modal show={orderStore.isDeleteModal} onHide={()=>orderStore.closeModal()}>
            <Modal.Header closeButton>Подтвердите удаление</Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitForm}>
                    <Form.Group>
                        <Form.Label>Идентификатор заказа</Form.Label>
                        <Form.Control placeholder="Заказанный тариф" value={orderStore.selectedID} readOnly/>
                    </Form.Group>
                    <Row className="mt-2">
                        <Col>
                            <Button type="submit" className="w-100" variant="success">Подтвердить</Button>
                        </Col>
                        <Col>
                            <Button className="w-100" variant="danger" onClick={()=>orderStore.closeModal()}>Отменить</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
});

export default ConfirmDeleteOrder;