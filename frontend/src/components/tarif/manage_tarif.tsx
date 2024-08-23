import React,{useEffect, useState} from "react";
import { Container, Row, Button } from "react-bootstrap";
import TarifItem from "./tarif_item";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const ManageTarif:React.FC = observer(()=>{
    document.title = 'Управление тарифами';
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    useEffect(()=>{
        tarifStore.get();
    },[]);
    
    return(
        <Container fluid>
            <h1 className="text-center">Управление тарифами</h1>
            <Row>
                {tarifStore.tarifs.map((el,i)=><TarifItem key={i} name={el.name} price={el.price} size={el.size}/>)}
            </Row>
        </Container>
    )
})

export default ManageTarif;