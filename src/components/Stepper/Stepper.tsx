import { useMemo, useCallback } from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "./styles.scss";

interface StepperProps {
  width: string;
  height: string;
  totalSteps: number;
  currentStep: number;
}
interface StepProps {
  accomplished: string;
  index: number;
}
function Stepper({ totalSteps, currentStep, width, height }: StepperProps) {
  const getPercentage = useCallback(
    (totalSteps: number, currentStep: number): number => {
      const gaps = totalSteps - 1;
      const perGapPercentage = 100 / gaps;
      let totalPercentage = 0;
      for (let step = 1; step <= currentStep; step++) {
        if (step === 1 || step === totalSteps)
          totalPercentage += perGapPercentage / 2;
        else totalPercentage = totalPercentage + perGapPercentage;
      }

      return totalPercentage;
    },
    [currentStep]
  );

  const steps = useMemo(() => {
    let indents = [];
    for (var i = 0; i < totalSteps; i++) {
      indents.push(
        <Step>
          {({ accomplished, index }: StepProps) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null}`}
            >
              <span>{index + 1}</span>
            </div>
          )}
        </Step>
      );
    }
    return indents;
  }, [currentStep, totalSteps]);

  return (
    <div>
      <ProgressBar
        width={width}
        height={height}
        filledBackground="#664de5"
        percent={getPercentage(totalSteps, currentStep)}
      >
        {steps}
      </ProgressBar>
    </div>
  );
}

export default Stepper;
