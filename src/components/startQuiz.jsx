import { useState, useEffect } from "react";
import Form from "./Form";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import FinalStep from "./FinalStep";
import { Progress } from "./ProgressBar";
import { LoadingScreen } from "./LoadingScreen";
import { IoCloseOutline } from "react-icons/io5";

const Quiz = ({ onClose, isQuizVisible }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Start with loading screen for 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleStepChange = (newStep) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
    setStep(newStep);
  };

  const changeBg = () => {
    return step === 1 ? "bg-primary" : "bg-white";
  };

  return (
    <>
      {isQuizVisible && (
        <div className="wrapper sm:w-[480px] w-full bg-white border-gray-300 border">
          <div className="  relative">
            <button
              onClick={onClose}
              className="p-3 px-5 text-md text-gray-400 absolute rounded-md right-0 top-0 z-20"
            >
              <IoCloseOutline />
            </button>
            <div className=" w-full relative">
              <Progress currentStep={step} totalSteps={6} />

              <div className="p-2 px-4">
                {isLoading ? (
                  <LoadingScreen bgColor={changeBg()} />
                ) : (
                  <>
                    {step === 1 && <Form stepChange={handleStepChange} />}
                    {step === 2 && <Step2 stepChange={handleStepChange} />}
                    {step === 3 && <Step3 stepChange={handleStepChange} />}
                    {step === 4 && <Step4 stepChange={handleStepChange} />}
                    {step === 5 && <Step5 stepChange={handleStepChange} />}
                    {step === 6 && <FinalStep stepCase={1} />}
                    {step === 7 && <FinalStep stepCase={2} />}
                    {step === 8 && <FinalStep stepCase={3} />}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
