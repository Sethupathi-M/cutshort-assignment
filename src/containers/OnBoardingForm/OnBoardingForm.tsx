import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  UserDetails,
  WorkspaceCreation,
  WorkspaceDetails,
  OnboardingCompletion,
} from "../OnBoardingForm/Steps";

interface OnBoardingFormProps {
  onStepChange: Function;
}
function OnBoardingForm({ onStepChange }: OnBoardingFormProps) {
  const methods = useForm();
  const [step, setStep] = useState(1);

  useEffect(() => {
    onStepChange(step);
  }, [onStepChange, step]);

  const onSubmit = (data: any) => {
    const url = "www.eden.com/" + data["workspaceUrl"];
    const output = { ...data, workspaceUrl: url };
    console.log({ output });
  };

  const incrementStep = () => setStep(step + 1);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <UserDetails
              goToNext={incrementStep}
              styles={step === 1 ? { display: "block" } : { display: "none" }}
            />
            <WorkspaceCreation
              goToNext={incrementStep}
              styles={step === 2 ? { display: "block" } : { display: "none" }}
            />
            <WorkspaceDetails
              goToNext={incrementStep}
              styles={step === 3 ? { display: "block" } : { display: "none" }}
            />
            <OnboardingCompletion
              styles={step === 4 ? { display: "block" } : { display: "none" }}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default OnBoardingForm;
