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
  const [formData, setFormData] = useState({});

  const [fName, setName] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleStepChange = (newStep, newData) => {
    if (newData && newData.name !== undefined) {
      setName(newData.name);
    }

    if (newData && newData.formData) {
      setFormData(newData.formData);
    }
    if (newData && newData.selectedDate) {
      setFormData({ ...formData, selectedDate: newData.selectedDate });
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
          <div className="wrapper sm:w-[480px] w-full h-full overflow-scroll border-gray-200 border bg-white">
            <div className="p-2 px-4">
              {step === 1 && <Form stepChange={handleStepChange} />}
              {step === 2 && (
                <Step2 stepChange={handleStepChange} name={fName} />
              )}
              {step === 3 && <Step3 stepChange={handleStepChange} />}
              {step === 4 && (
                <Step4 stepChange={handleStepChange} formData={formData} />
              )}
              {step === 5 && (
                <Step5
                  stepChange={handleStepChange}
                  formData={{
                    ...formData,
                    selectedDate: formData.selectedDate,
                  }}
                />
              )}
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
