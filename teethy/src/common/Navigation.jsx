import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";

const Navigation = () => {
    return <Navbar variant={'light'} expand={'md'} bg={'light'}>
        <Container>
            <Navbar.Brand href="/">
                {/*<img src='https://teethy.cz/wp-content/uploads/2018/08/teethy.png'/>*/}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav activeKey="/" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                    <Nav.Item>
                        <Nav.Link href="/">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Navigation;