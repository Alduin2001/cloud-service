import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const MyOrders:React.FC = ()=>{
    document.title = "Мои заказы";
    return(
        <Container>
            <Table className="mt-2" striped hover>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Тариф</th>
                        <th>Цена</th>
                        <th>Статус</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Стандарт</td>
                        <td>500 рублей</td>
                        <td>На рассмотрении</td>
                        <td><Button variant="danger">Удалить</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Стандарт</td>
                        <td>500 рублей</td>
                        <td>На рассмотрении</td>
                        <td><Button variant="danger">Удалить</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Стандарт</td>
                        <td>500 рублей</td>
                        <td>На рассмотрении</td>
                        <td><Button variant="danger">Удалить</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default MyOrders;