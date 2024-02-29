import React, { useContext } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { CartContext } from "../CartContext";

export const ProductsCard = ({ product }) => {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card key={product.id} className="mx-2" style={{ textAlign: "center" }}>
      <Card.Body>
        <img src={product.image} style={{ width: "100px" }} />
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>₹ {product.price}</Card.Title>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            onClick={() => cart.addOneToCart(product.id)}
            variant="outline-secondary"
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
