import React from "react";
import { Col, Card, Row, Button } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
import ConfirmDeleteTarif from "./modal_confirm_delete";
interface TarifOption{
    _id:string,
    name:string,
    price:number,
    size:number
}
const TarifItem:React.FC<TarifOption> = observer(({_id,name,price,size})=>{
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    return(
        <>
        {tarifStore.isOpenDelModal && (<ConfirmDeleteTarif/>)}
        <Col>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Card.Text>Цена:{price} рублей</Card.Text>
                    <Card.Text>Размер:{size}МБ</Card.Text>
                    <Row>
                        <Col>
                            <Button variant="primary" className="w-100">Редактировать</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={()=>tarifStore.showDelModal(_id)} className="w-100">Удалить</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
        </>
    )
})
export default TarifItem;