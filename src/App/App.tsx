import React from "react";
import OnBoardingForm from "../containers/OnBoardingForm/OnBoardingForm";
import logo from "../assets/logo.png";
import "./App.scss";
import { Col, Container, Row } from "react-bootstrap";
import Stepper from "../components/Stepper";

function App() {
  return (
    <div className="App p-4">
      <Container fluid>
        <Row>
          <Col className="div-center">
            <img src={logo} />
          </Col>
        </Row>
        <Row style={{ marginTop: "60px" }}>
          <Col className="div-center">
            <Stepper
              currentStep={3}
              totalSteps={4}
              height="2px"
              width="300px"
            ></Stepper>
          </Col>
        </Row>
        <Row style={{ marginTop: "60px" }}>
          <OnBoardingForm />
        </Row>
      </Container>
    </div>
  );
}

export default App;
