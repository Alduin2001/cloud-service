import React,{ChangeEvent, FormEvent, useState} from "react";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import { observer } from "mobx-react";
import { useStore } from "../../config/context";
const CreateTarif:React.FC = observer(()=>{
    const rootStore = useStore();
    const {tarifStore} = rootStore!;
    const [formData,setFormData] = useState({
        name:'',
        price:0,
        size:0,
        description:''
    });
    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = ev.currentTarget;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const submitForm = async (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        await tarifStore.create(formData);
        clearForm();
    }
    const clearForm = ()=>{
        setFormData({
            name:'',
            price:0,
            size:0,
            description:''
        })
    }
    document.title = "Добавление тарифа";
    return(
        <Container>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Название"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="number" name="price" value={formData.price} onChange={handleChange}/>
                    <Form.Text>Введите цену в рублях</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Размер</Form.Label>
                    <Form.Control type="number" name="size" value={formData.size} onChange={handleChange}/>
                    <Form.Text>Введите размер в мегабайтах</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control as="textarea" rows={5} name="description" value={formData.description} onChange={handleChange}/>
                    <Form.Text>Введите описание для пользователей, которое должно информативности дать</Form.Text>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Row>
                        <Col>
                            <Button variant="success" className="w-100" type="submit">Добавить</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={clearForm} className="w-100">Очистить форму</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            {
    tarifStore.status >= 200 && tarifStore.status < 300 && tarifStore.statusMessage && (
        <Alert className="mt-2" variant={'success'}>{tarifStore.statusMessage}</Alert>
    )
}
{
    tarifStore.status >= 400 && tarifStore.statusMessage && (
        <Alert className="mt-2" variant={'danger'}>{tarifStore.statusMessage}</Alert>
    )
}
        </Container>
    )
})

export default CreateTarif;