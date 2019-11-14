import React, { useEffect, useState } from "react";
import axios from "axios";
import FormUser from "./form";


import { Container, Table, Button, Row, Col } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Funcionario() {
  const [funcionario, setFuncionario] = useState([]);
  const [resp, setResp] = useState();

  async function Getdata() {
    try {
      const response = await axios.get(
        "https://app-bobatron.herokuapp.com/funcionarios"
      );
      setFuncionario(response.data);
      setResp(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    Getdata();
  }, []);

  async function handleClick(id) {
    try {
      await axios.delete(
        "https://app-bobatron.herokuapp.com/funcionario/" + id
      );
      Getdata();
    } catch (error) {}
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <FormUser />             
        </Col>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Matricula</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Nascimento</th>
                <th>Cargo</th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {funcionario.map(item => (
                <tr key={item._id}>
                  <td>{item.matricula}</td>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.endereco}</td>
                  <td>{item.dataNasc}</td>
                  <td>{item.cargo}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleClick(item._id)}>
                      delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
export default Funcionario;
