import React from "react";
import { Card, Container } from "react-bootstrap";

const NotFound:React.FC = ()=>{
    document.title = 'ошибка 404';
    return(
        <Container>
            <Card className="mt-2 text-danger">
                <Card.Header>Страница не найдена</Card.Header>
                <Card.Body>
                    <Card.Text>Простите, но что-то пошло не так</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default NotFound;