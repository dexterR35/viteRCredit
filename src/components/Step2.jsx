const Step2 = ({ handleStepChange }) => {
  const handleYes = () => {
    handleStepChange(4);
  };

  const handleNo = () => {
    handleStepChange(3);
  };

  return (
    <div className="py-8">
      <p className="p-title">
        Buna ziua <br /> Marian
      </p>
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

      <p className="p-question">
        Ești raportat negativ <br /> in Biroul de credit?
      </p>
      <div className="btn-parent">
        <button className="btn-sm w-[35%]" onClick={handleYes}>
          Da
        </button>
        <button className="btn-sm w-[35%]" onClick={handleNo}>
          Nu
        </button>
      </div>
    </div>
  );
};

export default Step2;
