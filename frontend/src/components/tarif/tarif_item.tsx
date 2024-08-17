import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";

interface TarifOption{
    name:string,
    price:number,
    size:number
}
const TarifItem:React.FC<TarifOption> = ({name,price,size})=>{

    return(
        <Col>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <p>Цена:{price} рублей</p>
                    <p>Размер:{size}МБ</p>
                    <Row>
                        <Col>
                            <Button variant="primary" className="w-100">Редактировать</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" className="w-100">Удалить</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default TarifItem;