import React, { useState } from "react";
import { Button, Col, Form, Container, Row } from "react-bootstrap";
import axios from "axios";

function EstoqueForm() {
  const [artista, setArtista] = useState("");
  const [album, setAlbum] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  async function sendData() {
    try {
        await axios.post(
        "https://app-bobatron.herokuapp.com/adiciona-estoque",
        {
          cod: Math.floor(Math.random() * 100),
          artista: artista,
          album: album,
          quantidade: quantidade,
          valor: valor,
        }
      );   
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form className="pb pt-5" onSubmit={sendData}>
            <Form.Row className="justify-content-left">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Artista</Form.Label>
                <Form.Control
                  type="nome"
                  value={artista}
                  onChange={e => setArtista(e.target.value)}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridemail">
                <Form.Label>Album</Form.Label>
                <Form.Control
                  type="text"
                  value={album}
                  onChange={e => setAlbum(e.target.value)}
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formValor">
                <Form.Label>Valor</Form.Label>
                <Col md="3 p-0">
                  <Form.Control
                    type="text"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formQuantidade">
                <Form.Label>Quantidade</Form.Label>
                <Col md="3 p-0">
                  <Form.Control
                    type="text"
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EstoqueForm;
