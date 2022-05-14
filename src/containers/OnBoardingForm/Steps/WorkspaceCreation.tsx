import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import FormHeadings from "../../../components/FormHeadings";

interface WorkspaceCreationProps {
  styles?: React.CSSProperties;
}

function WorkspaceCreation({ styles }: WorkspaceCreationProps) {
  const { register } = useFormContext();
  return (
    <div style={{ ...styles }}>
      <FormHeadings
        subTitle="You can always create another workspace later."
        title="Let's set up a home for all your work"
      />

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            {...register("workspaceName")}
            type="text"
            placeholder="Eden"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label htmlFor="basic-url">
            Workspace URL <em>(optional)</em>
          </Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://eden.com/
            </InputGroup.Text>
            <FormControl
              {...register("workspaceUrl")}
              placeholder="Example"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default WorkspaceCreation;
