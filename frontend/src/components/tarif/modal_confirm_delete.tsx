import React, { FormEvent, useEffect } from "react";
import { Button, Form, Modal, Row, Col, Alert } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";

const ConfirmDeleteTarif:React.FC = observer(()=>{
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    
    const submitForm = async (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        tarifStore.delete(tarifStore.selectedTarif!);
    }
    useEffect(()=>{
        tarifStore.status = 0;
        tarifStore.statusMessage = '';
    },[]);
    return(
        <Modal show={tarifStore.isOpenDelModal} onHide={()=>tarifStore.closeDelModal()}>
            <Modal.Header closeButton>Подтвердить удаление</Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitForm}>
                    <Form.Group className="mt-2">
                        <Row>
                            <Col>
                                <Button variant="success" type="submit" className="w-100">Подтвердить</Button>
                            </Col>    
                            <Col>
                                <Button variant="danger" onClick={()=>tarifStore.closeDelModal()} className="w-100">Отменить</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
                {tarifStore.status>=200 && tarifStore.status<400 && (<Alert variant="success" className="mt-2">{tarifStore.statusMessage}</Alert>)}
            </Modal.Body>
        </Modal>
    )
})

export default ConfirmDeleteTarif;