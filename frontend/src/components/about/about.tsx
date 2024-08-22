import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const About:React.FC = ()=>{
    document.title = "О нас";
    return(
        <Container className="bg-secondary p-2 text-white mt-2">
            <h1>Мы крупнейшая компания, предоставляющая облачные решения для бизнеса</h1>
            <Row className="gap-2">
                <Col>
                    <Card>
                        <Card.Header>Надёжность</Card.Header>
                        <Card.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate odit molestias consectetur, animi corporis hic doloremque debitis quidem magnam voluptatum atque obcaecati ipsum recusandae eius rem nobis unde similique.
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Header>Быстрое размещение</Card.Header>
                        <Card.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate odit molestias consectetur, animi corporis hic doloremque debitis quidem magnam voluptatum atque obcaecati ipsum recusandae eius rem nobis unde similique.
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Header>Удобство</Card.Header>
                        <Card.Body>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate odit molestias consectetur, animi corporis hic doloremque debitis quidem magnam voluptatum atque obcaecati ipsum recusandae eius rem nobis unde similique.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default About;