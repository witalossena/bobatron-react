import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Estoque from "./components/estoque";
import Funcionario from "./components/funcionarios";
import Home from "./components/home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <Container className="text-center">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/estoque">estoque</Link>
            </li>
            <li>
              <Link to="/funcionarios">Funcionarios</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>

    </Container>



  );
}

export default App;
