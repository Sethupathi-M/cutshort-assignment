import React from "react";
import { Button } from "react-bootstrap";
import { BsCheck } from "react-icons/bs";
import FormHeadings from "../../../components/FormHeadings";
interface OnboardingCompletionProps {
  styles?: React.CSSProperties;
}
function OnboardingCompletion({ styles }: OnboardingCompletionProps) {
  return (
    <div style={{ ...styles }}>
      <div
        className="mb-4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="primary-bg"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 60,
            height: 60,
            borderRadius: "50%",
          }}
        >
          <BsCheck size="25" color="white"></BsCheck>
        </div>
      </div>
      <FormHeadings
        subTitle="You have completed onboarding, you can start using the Eden!"
        title="Congratulations, Eren!"
      />
      <Button className="ws-submit" type="submit">
        Launch Eden
      </Button>
    </div>
  );
}

export default OnboardingCompletion;
