import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const FilterOrder:React.FC = ()=>{

    return(
        <Form>
            <Form.Group>
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control type="text" placeholder="Имя"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Дата заказа</Form.Label>
                <Row>
                    <Col>
                        <Form.Control type="date"/>
                    </Col>
                    <Col>
                        <Form.Control type="date"/>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group className='mt-2'>
                <Row>
                    <Col>
                        <Button type="submit" variant='success' className='w-100'>Поиск</Button>
                    </Col>
                    <Col>
                        <Button type="submit" variant='danger' className='w-100'>Сбросить</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}

export default FilterOrder;