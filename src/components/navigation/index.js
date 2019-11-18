import React from "react";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Bobatron</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/funcionarios">Funcionarios</Nav.Link>
          <Nav.Link href="/estoque">Estoque</Nav.Link>
        </Nav>   
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
