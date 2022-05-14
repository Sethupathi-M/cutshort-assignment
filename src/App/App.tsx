import React, { useState } from "react";
import OnBoardingForm from "../containers/OnBoardingForm/OnBoardingForm";
import logo from "../assets/logo.png";
import "./App.scss";
import { Col, Container, Row } from "react-bootstrap";
import Stepper from "../components/Stepper";

function App() {
  const [currentStep, changeStep] = useState(1);
  const handleFormChange = (step: number) => {
    changeStep(step);
  };
  return (
    <div className="App p-4">
      <Container fluid>
        <Row>
          <Col className="div-center">
            <img src={logo} alt="Eden Logo" />
          </Col>
        </Row>
        <Row style={{ marginTop: "60px" }}>
          <Col className="div-center">
            <Stepper
              currentStep={currentStep}
              totalSteps={4}
              height="2px"
              width="300px"
            ></Stepper>
          </Col>
        </Row>
        <Row style={{ marginTop: "60px" }}>
          <OnBoardingForm onStepChange={handleFormChange} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
