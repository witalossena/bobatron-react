import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import Estoque from "./components/estoque";
import Funcionario from "./components/funcionarios";
import Home from "./components/home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Navbar variant="light">
          <Navbar.Brand ><Link to="/">Bobatron</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <div className="p-3">
              <Link to="/">Home</Link>
            </div>
            <div className="p-3">
              <Link to="/estoque">estoque</Link>
            </div>
            <div className="p-3">
              <Link to="/funcionarios">Funcionarios</Link>
            </div>
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
      </Container>
    </Router>
  );
}

export default App;
