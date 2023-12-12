import React from "react";

export const Progress = ({ currentStep, totalSteps }) => {
  const stepBars = [];

  for (let step = 1; step <= totalSteps; step++) {
    const isCurrentStep = step === currentStep;

    let barColorClass = "";

    // Set different colors for each step based on its order
    if (isCurrentStep) {
      barColorClass = "bg-green-600"; // Current step is blue
    } else if (step < currentStep) {
      barColorClass = "bg-green-600"; // Completed steps are green
    } else {
      barColorClass = "bg-white"; // Upcoming steps are gray
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
    <div className="w-full">
      <div className="flex">{stepBars}</div>
    </div>
  );
};
