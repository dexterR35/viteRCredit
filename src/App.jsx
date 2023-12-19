import { useState } from "react";
import Form from "./components/Form";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import FinalStep from "./components/FinalStep";
import { Progress } from "./components/ProgressBar";
import { LoadingScreen } from "./components/LoadingScreen";

const Quiz = () => {
  const [step, setStep] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const handleStepChange = (newStep) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
    setStep(newStep);
  };
  return (
    <>
      <div className="wrapper sm:w-[480px] w-full bg-white border-gray-300 border">
        <div className=" w-full h-full relative">
          <Progress currentStep={step} totalSteps={6} />
          <div className="p-2 px-4">
            {isLoading ? (
              <LoadingScreen />
            ) : (
              <>
                {step === 1 && <Form handleStepChange={handleStepChange} />}
                {step === 2 && <Step2 handleStepChange={handleStepChange} />}
                {step === 3 && <Step3 handleStepChange={handleStepChange} />}
                {step === 4 && <Step4 handleStepChange={handleStepChange} />}
                {step === 5 && <Step5 handleStepChange={handleStepChange} />}
                {step === 6 && (
                  <FinalStep handleStepChange={handleStepChange} />
                )}
              </>
            )}
          </div>
        </div>
        {/* <footer className="flex items-center justify-center text-[12px] relative bottom-0 left-0 w-full h-[40px] text-center">
        ObtineCredit.ro
      </footer> */}
      </div>
    </>
  );
};

export default Quiz;
