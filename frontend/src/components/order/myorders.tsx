import React, {useEffect} from "react";
import { Button, Container, Table } from "react-bootstrap";
import { observer } from "mobx-react";
import { useStore } from "../../config/context";
const MyOrders:React.FC = ()=>{
    document.title = "Мои заказы";
    const rootStore = useStore();
    const {orderStore} = rootStore!;
    useEffect(()=>{
        orderStore.getMyOrders();
    },[]);
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
                    {orderStore.orders.map((el:any,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{el.tarif.name}</td>
                            <td>{el.tarif.price} рублей</td>
                            <td>На рассмотрении</td>
                            <td><Button variant="danger">Удалить</Button></td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default MyOrders;