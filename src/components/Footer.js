import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col classname="text-center py-3">Copyright &copy; ProShop</Col>
            {/* not centered */}
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
