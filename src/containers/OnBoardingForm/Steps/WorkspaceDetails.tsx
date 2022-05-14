import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card, ToggleButton } from "react-bootstrap";
import { RiUserFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { useFormContext } from "react-hook-form";
import FormHeadings from "../../../components/FormHeadings";

interface WorkspaceDetailsProps {
  styles?: React.CSSProperties;
}
function WorkspaceDetails({ styles }: WorkspaceDetailsProps) {
  const [radioValue, setRadioValue] = useState("1");
  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("usersType", radioValue);
  }, [radioValue]);

  return (
    <div style={{ ...styles }}>
      <FormHeadings
        subTitle="We'll streamline your setup experience accordingly"
        title="How are you planning to use Eden?"
      />
      <div className="form-container div-center">
        <div className="row">
          <ButtonGroup className="mb-2 col ws-user">
            <ToggleButton
              className="text-start"
              id={`radio-1`}
              type="radio"
              name="radio"
              value={"1"}
              checked={radioValue === "1"}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <RiUserFill color="#664de5" size={24} className="mb-2" />
              <h6>For myself</h6>
              <p className="fw-lighter">
                Write better. Think more clearly. Stay organized.
              </p>
            </ToggleButton>
          </ButtonGroup>
          <ButtonGroup className="mb-2 col ws-user">
            <ToggleButton
              id={`radio-2`}
              className="text-start"
              type="radio"
              name="radio"
              value={"2"}
              checked={radioValue === "2"}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              <HiUserGroup size={25} color="#664de5" className="mb-2" />
              <h6>With my team </h6>
              <p className="fs-6 fw-lighter">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </ToggleButton>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceDetails;
