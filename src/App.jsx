import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

import { Progress } from "./components/ProgressBar";
const Quiz = () => {
  const [step, setStep] = useState(1);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  return (
    <div>
      <Progress currentStep={step} totalSteps={4} />
      {step === 1 && <Step1 handleStepChange={handleStepChange} />}
      {step === 2 && <Step2 handleStepChange={handleStepChange} />}
      {step === 3 && <Step3 handleStepChange={handleStepChange} />}
      {step === 4 && <Step4 handleStepChange={handleStepChange} />}
    </div>
  );
};

export default Quiz;
