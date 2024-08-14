import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthWindow from "./authwindow";
import RegisterWindow from "./registerwindow";
import { useStore } from "../../config/context";
import { observer } from "mobx-react";
import { publicRoute } from "../../config/routes";
const HeaderComponent:React.FC = observer(() => {
    const rootStore = useStore();
    const {headerStore} = rootStore!;
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="ms-2" as={Link} to="/">
                <h1>CloudWare</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {publicRoute.map((el,i)=><Nav.Link key={i} as={Link} to={el.path}>{el.name}</Nav.Link>)}
                </Nav>
                <Nav className="ms-auto">
                    <Button className="me-2" variant="primary" onClick={()=>headerStore.showRegisterModal()}>Регистрация</Button>
                    <Button className="me-2" variant="primary" onClick={()=>headerStore.showAuthModal()}>Авторизация</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {headerStore.isAuthModal && (<AuthWindow/>)}
        {headerStore.isRegisterModal && (<RegisterWindow/>)}
        </>
    );
});

export default HeaderComponent;