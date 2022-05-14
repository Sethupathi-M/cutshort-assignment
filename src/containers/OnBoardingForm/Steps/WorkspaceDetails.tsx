import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { RiUserFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { useFormContext } from "react-hook-form";
import FormHeadings from "../../../components/FormHeadings";
import RadioButton from "../../../components/RadioButton";

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

  const UserTypeCard = ({ icon, title, details }: any) => {
    return (
      <>
        {icon}
        <h6>{title}</h6>
        <p className="fs-6 fw-lighter">{details}</p>
      </>
    );
  };
  return (
    <div style={{ ...styles }}>
      <FormHeadings
        subTitle="We'll streamline your setup experience accordingly"
        title="How are you planning to use Eden?"
      />
      <Form className="form-container">
        <div className="div-center">
          <div className="row mb-3">
            <RadioButton
              id="userType1"
              className={`ws-user ${radioValue === "single" && "active"}`}
              name="userType"
              value="single"
              currentValue={radioValue}
              onRadioButtonChange={async () => setRadioValue("single")}
            >
              <UserTypeCard
                icon={
                  <RiUserFill
                    color={`${radioValue === "single" ? "#664de5" : "black"}`}
                    size={24}
                    className="mb-2"
                  />
                }
                title={"For myself"}
                details={" Write better. Think more clearly. Stay organized."}
              ></UserTypeCard>
            </RadioButton>
            <RadioButton
              id="userType2"
              className={`ws-user ${radioValue === "multi" && "active"}`}
              name="userType"
              value="multi"
              currentValue={radioValue}
              onRadioButtonChange={async () => setRadioValue("multi")}
            >
              <UserTypeCard
                icon={
                  <HiUserGroup
                    size={25}
                    color={`${radioValue === "multi" ? "#664de5" : "black"}`}
                    className="mb-2"
                  />
                }
                title={"With my team"}
                details={"Wikis, docs, tasks & projects, all in one place."}
              ></UserTypeCard>
            </RadioButton>
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
