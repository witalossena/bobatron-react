import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import Estoque from "./components/estoque";
import Funcionario from "./components/funcionarios";
import Home from "./components/home";
import "./App.css";
import Menu from './components/navigation';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/estoque">
          <Estoque />
        </Route>

        <Route path="/funcionarios">
          <Funcionario/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
