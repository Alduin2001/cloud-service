import React,{useEffect} from "react";
import { Button, Container, Pagination, Row, Form, Col } from "react-bootstrap";
import OrderItem from "./order_item";
import { observer } from "mobx-react";
import { useStore } from "../../config/context";
import { Toast } from "react-bootstrap";
const ManageOrders:React.FC = observer(()=>{
    document.title = 'Управление заказами';
    const rootStore = useStore();
    const {tarifStore,orderStore} = rootStore!;
    useEffect(()=>{
        tarifStore.get();
        orderStore.get();
    },[]);
    return(
        <Container>
            <h1 className="text-center">Управление заказами</h1>
            <Form>
            <Form.Group>
                <Form.Label>Тариф</Form.Label>
                <Form.Select>
                    {tarifStore.tarifs.map((el:any,i)=>(<option key={i} value={el._id}>{el.name}</option>))}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Дата заказа</Form.Label>
                <Row>
                    <Col>
                        <Form.Control type="date"/>
                    </Col>
                    <Col>
                        <Form.Control type="date"/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mt-2'>
                <Row>
                    <Col>
                        <Button type="submit" variant='success' className='w-100'>Поиск</Button>
                    </Col>
                    <Col>
                        <Button type="submit" variant='danger' className='w-100'>Сбросить</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
            <Row className="mt-2">
                {orderStore.orders.map((el:any,i)=><OrderItem key={i}
                 user={el.user} tarif={el.tarif} _id={el._id}
                 description={el.description} createdAt={el.createdAt}/>)}
            </Row>
            <Pagination className="justify-content-center mt-2">
                <Pagination.Item>
                    <Button variant="primary">1</Button>
                </Pagination.Item>
                <Pagination.Item>
                    <Button variant="primary">2</Button>
                </Pagination.Item>
                <Pagination.Item>
                    <Button variant="primary">3</Button>
                </Pagination.Item>
                <Pagination.Item>
                    <p>...</p>
                </Pagination.Item>
                <Pagination.Item>
                    <Button variant="primary">133</Button>
                </Pagination.Item>
            </Pagination>
        </Container>
    )
})
export default ManageOrders;