import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const AddFileWindow:React.FC = observer(()=>{
    const rootStore = useStore();
    const {cloudStore} = rootStore!;
    return(
        <Modal show={cloudStore.isOpenModal} onHide={()=>cloudStore.closeModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Добавление файла</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Добавить файл</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Заголовок</Form.Label>
                        <Form.Control type="text" placeholder="Введите заголовок"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Введите описание"/>
                    </Form.Group>
                    <Form.Group className="mt-2">
                        <Button variant="success" className="w-100" type="submit">Добавить</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
});

export default AddFileWindow;