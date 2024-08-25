import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../config/context";
import { Col, Modal, Row, Button } from "react-bootstrap";

const ConfirmDeleteOrder:React.FC = observer(()=>{
    return(
        <Modal show={true}>
            <Modal.Header>Подтвердите удаление</Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Button className="w-100" variant="success">Подтвердить</Button>
                    </Col>
                    <Col>
                        <Button className="w-100" variant="danger">Отменить</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
});

export default ConfirmDeleteOrder;