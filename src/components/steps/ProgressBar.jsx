export const Progress = ({ currentStep, totalSteps }) => {
  const stepBars = [];

  for (let step = 1; step <= totalSteps; step++) {
    const isCurrentStep = step === currentStep;

    let barColorClass = "";

    if (isCurrentStep) {
      barColorClass = "bg-green-600";
    } else if (step < currentStep) {
      barColorClass = "bg-green-600";
    } else {
      barColorClass = "bg-white";
    }

    stepBars.push(
      <div
        key={step}
        className={`h-2 ${barColorClass} w-1/4`}
        style={{ width: `${100 / totalSteps}%` }}
      ></div>
    );
  }

  return (
    <div className="w-full progr">
      <div className="flex flex-row">{stepBars}</div>
    </div>
  );
};
