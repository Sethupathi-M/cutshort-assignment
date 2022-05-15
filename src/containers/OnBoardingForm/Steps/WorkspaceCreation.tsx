import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import FormHeadings from "../../../components/FormHeadings";

interface WorkspaceCreationProps {
  styles?: React.CSSProperties;
  goToNext: () => void;
}

function WorkspaceCreation({ styles, goToNext }: WorkspaceCreationProps) {
  const { register, trigger } = useFormContext();
  const [isInValid, setIsInValid] = useState(false);

  const onClickValidation = async () => {
    const result = await trigger(["workspaceName", "workspaceUrl"]);
    if (result) {
      setIsInValid(false);
      goToNext();
    } else setIsInValid(true);
  };
  return (
    <div style={{ ...styles }}>
      <FormHeadings
        subTitle="You can always create another workspace later."
        title="Let's set up a home for all your work"
      />

      <div className="form-container">
        <Form.Group className="mb-3" controlId="workspaceNameControl">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            {...register("workspaceName", { required: true, minLength: 3 })}
            type="text"
            placeholder="Eden"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="workspaceUrlControl">
          <Form.Label>
            Workspace URL <em className="fw-lighter">(optional)</em>
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text className="fw-lighter">
              https://eden.com/
            </InputGroup.Text>
            <FormControl
              {...register("workspaceUrl", { required: true, minLength: 3 })}
              placeholder="Example"
            />
          </InputGroup>
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

export default WorkspaceCreation;
