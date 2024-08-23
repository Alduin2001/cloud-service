import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { useStore } from "../../config/context";
import { Card, Container } from "react-bootstrap";
const TarifOne:React.FC = observer(()=>{
    document.title = 'Тариф';
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    const [item,setItem] = useState([]);
    const {id} = useParams();
    console.log();
    useEffect(()=>{
        setItem(tarifStore.tarifs.filter((el:any)=>el._id===id));
    },[]);
    return(
        <Container fluid>
            {
                item.map((el:any,i)=><Card className="mt-2" key={i}>
                    <Card.Header>{el.name}</Card.Header>
                <Card.Body>
                    <Card.Text>Цена: {el.price} рублей</Card.Text>
                    <Card.Text>Размер: {el.size} мб</Card.Text>
                    <Card.Text>{el.description}</Card.Text>
                </Card.Body>
                </Card>)
            }
        </Container>
    )
})
export default TarifOne;