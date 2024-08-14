import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer:React.FC = ()=>{
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand as={Link} className="ms-2" to="/"><h1>CloudWare</h1></Navbar.Brand>
            <Nav className="ms-auto me-auto text-white">&copy; Все права защищены</Nav>
        </Navbar>
    );
}
export default Footer;