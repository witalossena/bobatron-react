import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";

function FormUser() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cargo, setCargo] = useState("");
  const [nasc, setNasc] = useState("");

  async function sendData() {
    try {
      const response = await axios.post( "https://app-bobatron.herokuapp.com/novo-funcionario", {
        nome: nome,
        matricula: Math.floor(Math.random() * 100),
        email: email,
        endereco: endereco,
        dataNasc: nasc,
        cargo: cargo,
      });
      Getdata()
      
    } catch (error) {
      console.error(error)
    }
  }

  async function Getdata() {
    try {
      await axios.get("https://app-bobatron.herokuapp.com/funcionarios" ); 
    } catch (error) {}
  }

  return (
    <Form className="pb" onSubmit={sendData}>
      <Form.Row className="justify-content-left">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridemail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridEndereço1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          type="text"
          value={endereco}
          onChange={e => setEndereco(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Cargo</Form.Label>
          <Form.Control
            as="select"
            value={cargo}
            onChange={e => setCargo(e.target.value)}
            required
          >
            <option></option>
            <option>Gerente</option>
            <option>Vendedor</option>
            <option>Caixa</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGridNasc">
          <Form.Label>Nascimento</Form.Label>
          <Form.Control
            type="date"
            value={nasc}
            onChange={e => setNasc(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormUser;
