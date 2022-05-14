import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

interface UserDetailsProps {
  styles?: React.CSSProperties;
}
function UserDetails({ styles }: UserDetailsProps) {
  const { register } = useFormContext();

  return (
    <div style={{ ...styles }}>
      <h2>Welcome! First things first... </h2>
      <p>You can always change them later.</p>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="fullName.input">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            {...register("fullName")}
            placeholder="Steve Jobs"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="displayName.input">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            {...register("displayName")}
            type="text"
            placeholder="Steve"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default UserDetails;
