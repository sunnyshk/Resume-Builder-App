import { useState } from "react";
import {BsFillCalendar2CheckFill} from 'react-icons/bs'
import "bootstrap/dist/css/bootstrap.min.css";
import Serach from "../components/serach";
// import "./App.css";
import { Button, Col, Row, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center"><BsFillCalendar2CheckFill/> Appointments</h1>
          <Serach/>
          <div className="d-grid gap-2">
          <Button size="sm">Hello World</Button>

          </div>

          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <h3>Hello Bootstrap</h3>
          </Col>
          <Col md={3}>
            <h3>Hello Bootstrap</h3>
          </Col>
          <Col md={3}>
            <h3>Hello Bootstrap</h3>
          </Col>
          <Col md={3}>
            <h3>Hello Bootstrap</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
