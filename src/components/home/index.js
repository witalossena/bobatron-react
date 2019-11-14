import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, P } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [estoque, setEstoque] = useState([]);
  const [resp, setResp] = useState();

  async function Getestoque() {
    try {
      const response = await axios.get(
        "https://app-bobatron.herokuapp.com/estoque"
      );
      setEstoque(response.data);
      setResp(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    Getestoque();
  }, []);

  return (
    <Container>
      <Row>
        {estoque.map(item => (
          <Card key={item._id} style={{ width: "18rem" }} className="mr-2 mb-2 mt-2">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              album
              <Card.Title>{item.album}</Card.Title>
              <Card.Text>
                valor   <br/>  
                {item.valor}          
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
