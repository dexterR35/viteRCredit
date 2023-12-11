import React from "react";

const Step2 = ({ handleStepChange }) => {
  const handleYes = () => {
    handleStepChange(3); // Go to Step3 when "Yes" is pressed
  };

  const handleNo = () => {
    handleStepChange(4); // Go to Step4 when "No" is pressed
  };

  return (
    <div>
      <h2>Step 2</h2>
      <p>Do you want to proceed?</p>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

export default Step2;
