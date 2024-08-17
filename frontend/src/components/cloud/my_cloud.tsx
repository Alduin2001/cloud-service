import React from "react";
import { Button, Col, Container, ListGroup, Pagination, Row } from "react-bootstrap";
import MyCloudItem from "./my_cloud_item";
import cloud from '../../cloud1.jpeg';
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
import AddFileWindow from "./addfilewindow";
const MyCloud:React.FC = observer(()=>{
    document.title = "Моё облако";
    const cloud_data = [
        {image:cloud,header:'Header',body:'Body'},
        {image:cloud,header:'Header',body:'Body'},
        {image:cloud,header:'Header',body:'Body'},
    ];
    const rootStore = useStore();
    const {cloudStore} = rootStore!;
    return(
        <Container fluid>
            <Row className="mt-2">
                <Col md={10}>
                    <h1>Мои файлы</h1>
                </Col>
                <Col md={2}>
                    <Button variant="primary" onClick={()=>cloudStore.showModal()}>+</Button>
                </Col>
            </Row>    
            <Row>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>Все</ListGroup.Item>
                        <ListGroup.Item>Документы</ListGroup.Item>
                        <ListGroup.Item>Архив</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                <Row>
                    {cloud_data.map((el,i)=><MyCloudItem key={i} image={el.image} header={el.header} body={el.body}/>)}
                    <Pagination className="mt-2 justify-content-center">
                        <Pagination.Item>
                            <Button variant="primary">1</Button>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Button variant="primary">2</Button>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Button variant="primary">3</Button>
                        </Pagination.Item>
                        <Pagination.Item>
                            <p>...</p>
                        </Pagination.Item>
                        <Pagination.Item>
                            <Button variant="primary">133</Button>
                        </Pagination.Item>
                    </Pagination>
                </Row>
                </Col>
            </Row>

            {cloudStore.isOpenModal && (<AddFileWindow/>)}
        </Container>
    )
});

export default MyCloud;