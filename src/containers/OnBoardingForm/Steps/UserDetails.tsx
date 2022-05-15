import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import FormHeadings from "../../../components/FormHeadings";

interface UserDetailsProps {
  styles?: React.CSSProperties;
  goToNext: () => void;
}
function UserDetails({ styles, goToNext }: UserDetailsProps) {
  const { register, trigger } = useFormContext();
  const [isInValid, setIsInValid] = useState(false);

  const onClickValidation = async () => {
    const result = await trigger(["fullName", "displayName"]);
    if (result) {
      setIsInValid(false);
      goToNext();
    } else setIsInValid(true);
  };

  return (
    <div style={{ ...styles }}>
      <FormHeadings
        subTitle="You can always change them later."
        title="Welcome! First things first... "
      />
      <div className="form-container">
        <Form.Group className="mb-3" controlId="fullName.input">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            {...register("fullName", { required: true, minLength: 3 })}
            placeholder="Steve Jobs"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="displayName.input">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            required
            {...register("displayName", { required: true, minLength: 3 })}
            type="text"
            placeholder="Steve"
          />
        </Form.Group>
        <Button className="ws-submit" onClick={onClickValidation}>
          Create Workspace
        </Button>
        <div className="text-center">
          {isInValid && (
            <span className="text-danger fw-lighter">
              Please enter valid details
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
