import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { email, name, address, id } = props.users;
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
            <Card.Text>{address.city}</Card.Text>
          </Card.Body>
          <Link to={"/about/" + id}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Products;
