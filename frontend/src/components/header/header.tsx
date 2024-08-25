import React from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AuthWindow from "./authwindow";
import RegisterWindow from "./registerwindow";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
import {motion} from 'framer-motion';
import { publicRoute, adminRoutes, authRoutes } from "../../config/routes";
const HeaderComponent:React.FC = observer(() => {
    const navigate = useNavigate();
    const rootStore = useStore();
    const {headerStore, userStore} = rootStore!;
    const Logout = ()=>{
        userStore.logout();
        navigate('/');
    }
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="ms-2" as={Link} to="/">
                <h1>CloudWare</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {publicRoute.filter((el)=>!el.name.includes('Тариф один')).map((el,i)=><Nav.Link key={i} as={Link} to={el.path}>{el.name}</Nav.Link>)}
                </Nav>
                <Nav className="ms-auto me-2">
                {/* Auth dropdown */}
                {userStore.token && (
                <Dropdown className="ms-2">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Личный кабинет</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {authRoutes.map((el,i)=><Dropdown.Item key={i} as={Link} to={el.path}>{el.name}</Dropdown.Item>)}
                        <Dropdown.Item onClick={Logout}>Выйти</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                )}
                {/* Admin dropdown */}
                {userStore.role=='admin' && (
                    <Dropdown className="ms-2">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Администрирование</Dropdown.Toggle>
                        <Dropdown.Menu>
                        {adminRoutes.map((el,i)=><Dropdown.Item key={i} as={Link} to={el.path}>{el.name}</Dropdown.Item>)}
                    </Dropdown.Menu>
                    </Dropdown>
                )}
                </Nav>
                {!userStore.role && (
                <Nav className="ms-auto">
                    <Dropdown className="me-2">
                        <Dropdown.Toggle variant="primary">Аутентификация</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>headerStore.showRegisterModal()}>Регистрация</Dropdown.Item>
                            <Dropdown.Item onClick={()=>headerStore.showAuthModal()}>Авторизация</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
        {headerStore.isAuthModal && (<AuthWindow/>)}
        {headerStore.isRegisterModal && (<RegisterWindow/>)}
        </>
    );
});

export default HeaderComponent;