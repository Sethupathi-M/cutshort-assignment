import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { RiUserFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { useFormContext } from "react-hook-form";
import FormHeadings from "../../../components/FormHeadings";

interface WorkspaceDetailsProps {
  styles?: React.CSSProperties;
  goToNext: Function;
}

type UserType = "single" | "multi";
function WorkspaceDetails({ styles, goToNext }: WorkspaceDetailsProps) {
  const [radioValue, setRadioValue] = useState<UserType>("single");
  const { trigger, setValue } = useFormContext();
  const [isInValid, setIsInValid] = useState(false);

  const onClickValidation = async () => {
    const result = await trigger(["usersType"]);
    if (result) {
      setIsInValid(false);
      goToNext();
    } else setIsInValid(true);
  };

  useEffect(() => {
    setValue("usersType", radioValue);
  }, [setValue, radioValue]);

  return (
    <div style={{ ...styles }}>
      <FormHeadings
        subTitle="We'll streamline your setup experience accordingly"
        title="How are you planning to use Eden?"
      />
      <Form className="form-container">
        <div className="div-center">
          <div className="row mb-3">
            <ButtonGroup
              className={`mb-2 col ws-user ${
                radioValue === "single" && "active"
              }`}
            >
              <ToggleButton
                className="text-start"
                id={`userType-radio1`}
                type="radio"
                name="userType"
                value={"single"}
                checked={radioValue === "single"}
                onChange={(e) => setRadioValue("single")}
              >
                <RiUserFill
                  color={`${radioValue === "single" ? "#664de5" : "black"}`}
                  size={24}
                  className="mb-2"
                />
                <h6>For myself</h6>
                <p className="fs-6 fw-lighter">
                  Write better. Think more clearly. Stay organized.
                </p>
              </ToggleButton>
            </ButtonGroup>
            <ButtonGroup
              className={`mb-2 col ws-user ${
                radioValue === "multi" && "active"
              }`}
            >
              <ToggleButton
                id={`userType-radio2`}
                className="text-start"
                type="radio"
                name="userType"
                value={"multi"}
                checked={radioValue === "multi"}
                onChange={(e) => setRadioValue("multi")}
              >
                <HiUserGroup
                  size={25}
                  color={`${radioValue === "multi" ? "#664de5" : "black"}`}
                  className="mb-2"
                />
                <h6>With my team </h6>
                <p className="fs-6 fw-lighter">
                  Wikis, docs, tasks & projects, all in one place.
                </p>
              </ToggleButton>
            </ButtonGroup>
            <Button className="ws-submit" onClick={onClickValidation}>
              Create Workspace
            </Button>
          </div>
          <div className="text-center">
            {isInValid && (
              <span className="text-danger fw-lighter">
                Please enter valid details
              </span>
            )}
          </div>
        </div>
      </Form>
    </div>
  );
}

export default WorkspaceDetails;
