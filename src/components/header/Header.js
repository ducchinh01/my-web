import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Logo from'./img/Logo.png'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
  render(){
    return (
      <div>
      <Navbar bg="dark" variant="dark" className="navar-fixed-top">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <img src={Logo} style={{width:60}} />
      <Nav className="mr-auto" style={{marginLeft:40}} >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search..." className="mr-lg-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    </div>
    );
  }
}

export default Header;