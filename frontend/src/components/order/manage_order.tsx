import React from "react";
import { Button, Container, Pagination, Row } from "react-bootstrap";
import OrderItem from "./order_item";
import FilterOrder from "./filter_orders";
const ManageOrders:React.FC = ()=>{
    document.title = 'Управление заказами';
    const orders = [
        {user:'User',tarif:'Бизнес',description:'Lorem ipsum',createdAt:'12.04.2020'},
        {user:'User',tarif:'Бизнес',description:'Lorem ipsum',createdAt:'12.04.2020'},
        {user:'User',tarif:'Бизнес',description:'Lorem ipsum',createdAt:'12.04.2020'},
    ]
    return(
        <Container>
            <h1 className="text-center">Управление заказами</h1>
            <FilterOrder/>
            <Row className="mt-2">
                {orders.map((el,i)=><OrderItem key={i}
                 user={el.user} tarif={el.tarif}
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
}
export default ManageOrders;