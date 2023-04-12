import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import { AvatarCart } from "./AvatarCart";
import LoginForm from "./LoginForm";

const AdminPage = () => {
  return (
    <>
      <Row className="mt-5">
         <Col><LoginForm /></Col>
        <Col>
          <h1>Administracion</h1> <AvatarCart />
        </Col>
      
      </Row>
      <Row className="mt-5">
        <Col>
          <h1>Datos</h1>
        </Col>
      </Row>
    </>
  );
};

export default AdminPage;
