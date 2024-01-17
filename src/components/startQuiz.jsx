import { useState, useEffect } from "react";
import Form from "./steps/Form";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import FinalStep from "./steps/FinalStep";
import { Progress } from "./steps/ProgressBar";
import { LoadingScreen } from "./steps/LoadingScreen";

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState(""); // State to store the name
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Start with loading screen for 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleStepChange = (newStep, newName) => {
    if (newName !== undefined) {
      setName(newName); // Set the name if provided
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
    setStep(newStep);
  };

  const changeBg = () => {
    return step === 1 ? "bg-primary" : "bg-primary";
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen bgColor={changeBg()} />
      ) : (
        <>
          <Progress currentStep={step} totalSteps={6} />
          <div className="wrapper sm:w-[480px] w-full h-full overflow-scroll border-gray-200 border">
            <div className="p-2 px-4">
              {step === 1 && <Form stepChange={handleStepChange} />}
              {step === 2 && (
                <Step2 stepChange={handleStepChange} name={name} />
              )}
              {step === 3 && <Step3 stepChange={handleStepChange} />}
              {step === 4 && <Step4 stepChange={handleStepChange} />}
              {step === 5 && <Step5 stepChange={handleStepChange} />}
              {step === 6 && <FinalStep stepCase={1} />}
              {step === 7 && <FinalStep stepCase={2} />}
              {step === 8 && <FinalStep stepCase={3} />}
            </div>
          </div>
        </>
      )}
    </>
  );
}

// export default Quiz;
