import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation = () => {
    return <Navbar variant={'light'} expand={'md'} bg={'light'}>
        <Container>
            <Navbar.Brand href="/">
                <img src="https://teethy.cz/wp-content/uploads/2018/08/teethy.png"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse>
                <Nav className="justify-content-end">

                    <Nav.Item>
                        <Nav.Link href="/produkt/1">Sada na bělení zubů</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/obchod">Seznam produktů</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/vysledky">Recenze a výsledky</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                    </Nav.Item>

                    {/*<Nav.Item>*/}
                    {/*    <button className="btn btn-outline-primary">Koupit</button>*/}
                    {/*</Nav.Item>*/}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Navigation;