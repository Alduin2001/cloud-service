import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import TarifItem from "./tarif_item";
const ManageTarif:React.FC = ()=>{
    document.title = 'Управление тарифами';
    const tarifs = [
        {name:'Минимальный',price:250,size:5},
        {name:'Стандарт',price:500,size:15},
        {name:'Бизнес',price:1000,size:50},
    ];
    return(
        <Container fluid>
            <h1 className="text-center">Управление тарифами</h1>
            <Row>
                {tarifs.map((el,i)=><TarifItem key={i} name={el.name} price={el.price} size={el.size}/>)}
            </Row>
        </Container>
    )
}

export default ManageTarif;