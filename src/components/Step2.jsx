import React from "react";

const Step2 = ({ handleStepChange }) => {
  const handleYes = () => {
    handleStepChange(3);
  };

  const handleNo = () => {
    handleStepChange(4);
  };

  return (
    <div className="pt-6 mb-6">
      <h2 className="text-black font-bold text-center leading-6 mb-5">
        Buna ziua <br /> Marian
      </h2>
      <p className="p-custom">
        Eu sunt Gabriela, consultantul tău online cu o experientă de peste 6 ani
        in domeniu. Te voi indruma să găsim cele mai bune soluții pentru nevoile
        tale de la obținerea unui credit nou, până la refinanțarea creditelor
        existente sau chiar eliminarea istoricului negativ din Biroul de Credit.
      </p>
      <p className="p-custom mt-6">
        Însă, înainte de a a găsi o solutie, m-ar interesa să aflu câteva
        detalii esențiale de la dumneavoastă.
      </p>

      <p className="text-center font-bold text-xl leading-6 mt-6">
        Ești raportat negativ <br /> in Biroul de Credit?
      </p>
      <div className="flex items-center w-full justify-center space-x-6 px-4 mt-6">
        <button className="btn-sm w-1/2" onClick={handleYes}>
          Da
        </button>
        <button className="btn-sm w-1/2" onClick={handleNo}>
          Nu
        </button>
      </div>
    </div>
  );
};

export default Step2;
