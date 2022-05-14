import React from "react";
import { BsCheck } from "react-icons/bs";
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
      <div className="mb-4">
        <h3>Congratulations, Eren!</h3>
        <p className="fw-light">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
    </div>
  );
}

export default OnboardingCompletion;
