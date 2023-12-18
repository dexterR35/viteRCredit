const FinalStep = ({ selectedOption }) => {
  return (
    <div className="py-8">
      {selectedOption === "da" ? (
        <p className="p-custom">
          Ai selectat opțiunea da. Vom avea nevoie de mai multe detalii...
        </p>
      ) : (
        <p className="p-custom">
          Ai selectat opțiunea NU. În acest caz, procesul va fi mai simplu...
        </p>
      )}
    </div>
  );
};

export default FinalStep;
