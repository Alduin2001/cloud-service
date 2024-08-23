import React,{useEffect} from "react";
import Card_Item from "./card_item";
import cloud1 from '../../cloud1.jpeg';
import { Container, Row } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const Cards:React.FC = observer(()=>{
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    useEffect(()=>{
        tarifStore.get();
    },[]);

    return(
        <Container>
        <h1 className="text-center">Наши предложения для вас</h1>
        <Row className="gap-2">
        {tarifStore.tarifs.map((el:any)=><Card_Item key={el._id} _id={el._id} image={cloud1} name={el.name} price={el.price} size={el.size}/>)}
        </Row>
        
        </Container>
    );
})

export default Cards;