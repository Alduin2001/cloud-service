import React from "react";
import Card_Item from "./card_item";
import cloud1 from '../../cloud1.jpeg';
import cloud2 from '../../cloud2.jpg';
import cloud3 from '../../cloud3.jpg';
import { Container, Row } from "react-bootstrap";

const Cards:React.FC = ()=>{
    const cards_array = [
        {
        image:cloud1,
        header:'Минимальный',
        body:'5MB файлов за 250рублей/месяц'
    },
    {
        image:cloud2,
        header:'Пользовательский',
        body:'15MB файлов за 400рублей/месяц'
    },
    {
        image:cloud3,
        header:'Бизнес-тариф',
        body:'25MB файлов за 1000рублей/месяц'
    },
];
    return(
        <Container>
        <h1 className="text-center">Наши предложения для вас</h1>
        <Row className="gap-2">
        {cards_array.map((el,i)=><Card_Item key={i} image={el.image} header={el.header} body={el.body}/>)}
        </Row>
        
        </Container>
    );
}

export default Cards;