import React,{useEffect} from "react";
import { Container, Row, Alert } from "react-bootstrap";
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
                {tarifStore.tarifs.length>0 ? tarifStore.tarifs.map((el:any,i:number)=><TarifItem key={i} _id={el._id} name={el.name} price={el.price} size={el.size} />) : (<Alert variant="danger">Тарифов нет</Alert>)}
            </Row>
        </Container>
    )
})

export default ManageTarif;