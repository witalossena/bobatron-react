import React, { useState, useEffect} from "react";
import EstoqueForm from "./estoqueForm";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import axios from 'axios';


function Estoque() {
    const [estoque, setEstoque] = useState([]);

    async function Getdata() {
        try {
          const response = await axios.get(
            "https://app-bobatron.herokuapp.com/estoque"
          );
          setEstoque(response.data);  
        } catch (error) {
          console.error(error)
        }
      }

      useEffect(() => {
        Getdata();
      }, []);

      async function handleClick(id) {
        try {
          await axios.delete(
            "https://app-bobatron.herokuapp.com/estoque/" + id
          );
          Getdata();
        } catch (error) {}
      }

  return (
    <Container>
        <EstoqueForm />
      <Row>    
        <Col xs={6} sm={12} md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Artista</th>
                <th>Album</th>
                <th>Valor</th>
                <th>Quantidade</th>             
                <th></th>
              </tr>
            </thead>
            <tbody>
              {estoque.map(item => (
                <tr key={item._id}>
                  <td>{item.artista}</td>
                  <td>{item.album}</td>
                  <td>{item.valor}</td>
                  <td>{item.quantidade}</td>                
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleClick(item._id)}
                    >
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
export default Estoque;
