import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from "react-hook-form";
import {
  UserDetails,
  WorkspaceCreation,
  WorkspaceDetails,
  OnboardingCompletion,
} from "../OnBoardingForm/Steps";

function OnBoardingForm() {
  const methods = useForm();
  const data = useWatch({ control: methods.control });

  const [step, setStep] = useState(1);

  const onSubmit = (data: any) => {
    console.log({ data });
  };

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
            <pre>{JSON.stringify(data)}</pre>
            <UserDetails
              styles={step === 1 ? { display: "block" } : { display: "none" }}
            />
            <WorkspaceCreation
              styles={step === 2 ? { display: "block" } : { display: "none" }}
            />
            <WorkspaceDetails
              styles={step === 3 ? { display: "block" } : { display: "none" }}
            />
            <OnboardingCompletion
              styles={step === 4 ? { display: "block" } : { display: "none" }}
            />
            <div>
              {step < 4 ? (
                <Button
                  className="ws-submit"
                  onClick={() => setStep((step) => step + 1)}
                >
                  Create Workspace
                </Button>
              ) : (
                <Button className="ws-submit" type="submit">
                  Launch Eden
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default OnBoardingForm;
