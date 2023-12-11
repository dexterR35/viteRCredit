import React, { useState } from "react";

const Step1 = ({ handleStepChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selection: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinue = () => {
    handleStepChange(2); // Go to Step2 when "Continue" is pressed
  };

  const isContinueDisabled =
    !formData.name || !formData.email || !formData.selection;

  return (
    <div>
      <h2>Step 1</h2>
      <form className="flex flex-col">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Select an option:
          <select
            name="selection"
            value={formData.selection}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <button onClick={handleContinue} disabled={isContinueDisabled}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default Step1;
