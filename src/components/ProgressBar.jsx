import React from "react";

export const Progress = ({ currentStep, totalSteps }) => {
  const stepBars = [];

  for (let step = 1; step <= totalSteps; step++) {
    const isCurrentStep = step === currentStep;

    let barColorClass = "";

    // Set different colors for each step based on its order
    if (isCurrentStep) {
      barColorClass = "bg-blue-500"; // Current step is blue
    } else if (step < currentStep) {
      barColorClass = "bg-green-500"; // Completed steps are green
    } else {
      barColorClass = "bg-gray-300"; // Upcoming steps are gray
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
    <div className="w-screen bg-red-700">
      <div className="flex">{stepBars}</div>
    </div>
  );
};
