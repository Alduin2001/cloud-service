import React, {ChangeEvent, useState,useEffect, FormEvent} from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
const OrderTarif:React.FC = observer(()=>{
    document.title = 'Заказать тариф';
    const rootStore = useStore();
    const {tarifStore,orderStore} = rootStore!;
    const [formData,setFormData] = useState({
        tarif:'',
        description:''
    });
    useEffect(()=>{
        tarifStore.get();
    },[]);
    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = ev.currentTarget;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const submitForm = async (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        await orderStore.create(formData);
    }
    
    return(
        <Container>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Необходимо выбрать тариф</Form.Label>
                    <Form.Control as="select" name="tarif" value={formData.tarif} onChange={handleChange}>
                        <option>Выберите тариф</option>
                        {
                            tarifStore.tarifs.map((el:any,i)=>(<option key={i} value={el._id}>{el.name}</option>))
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" name="description" rows={5} placeholder="Описание" value={formData.description} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Button variant="success" type="submit" className="w-100 mt-2">Заказать</Button>
                </Form.Group>
            </Form>
            {orderStore.statusCode>=200 && orderStore.statusCode<400 && (<Alert variant="success" className="mt-2">{orderStore.statusMessage}</Alert>)}
        </Container>
    )
})
export default OrderTarif;