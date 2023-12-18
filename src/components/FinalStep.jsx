import React, { useState } from "react";

const FinalStep = () => {
  const [creditStatus, setCreditStatus] = useState(null);

  const handleYes = () => {
    setCreditStatus("yes");
  };

  const handleNo = () => {
    setCreditStatus("no");
  };
  return (
    <div className="py-8">
      {creditStatus === "yes" && (
        <p className="p-custom">
          Ai selectat opțiunea da. Vom avea nevoie de mai multe detalii...
        </p>
      )}
      {creditStatus === "no" && (
        <p className="p-custom">
          Ai selectat opțiunea NU. În acest caz, procesul va fi mai simplu...
        </p>
      )}
    </div>
  );
};

export default FinalStep;
