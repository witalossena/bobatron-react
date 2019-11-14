import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Estoque from "./components/estoque";
import Funcionario from "./components/funcionarios";
import Home from "./components/home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Bobatron</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/estoque">estoque</Link></Nav.Link>
            <Nav.Link><Link to="/funcionarios">Funcionarios</Link></Nav.Link>
          </Nav>      
        </Navbar>  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/estoque">
              <Estoque />
            </Route>
            <Route path="/funcionarios">
              <Funcionario />
            </Route>
          </Switch>
      </Router>
    </Container>
  );
}

export default App;
