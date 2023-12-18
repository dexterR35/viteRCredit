const Step5 = ({ handleStepChange }) => {
  const handleYes = () => {
    handleStepChange(4);
  };

  const handleNo = () => {
    handleStepChange(6);
  };
  return (
    <div className="py-8">
      <p className="p-title">Stiati ca !?</p>
      <p className="p-custom">
        Creditele bancare au apărut încă din antichitate, când bancherii
        furnizau finanțare pentru comerț și afaceri. În Evul Mediu, băncile au
        oferit împrumuturi pentru a finanța construcția de clădiri și alte
        proiecte.
      </p>
      <p className="p-question mt-6 w-[90%] mx-auto">
        Detine-ți istoric bancar sau credite in prezent?
      </p>
      <div className="btn-parent">
        <button className="btn-sm w-[50%]" onClick={handleYes}>
          Da
        </button>
        <button className="btn-sm w-[50%]" onClick={handleNo}>
          Nu
        </button>
      </div>
    </div>
  );
};

export default Step5;
