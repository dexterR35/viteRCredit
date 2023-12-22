import { useState } from "react";

const Step4 = ({ handleStepChange }) => {
  const [selectedDivNames, setSelectedDivNames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [selectedOptions, setSelectedOption] = useState(""); // Add state for selected option
  const images = {
    banks: [
      { src: "../assets/logo/bcr.png", dataAtr: "Bcr" },
      { src: "../assets/logo/raiff.png", dataAtr: "Raiffeisen-Bank" },
      { src: "../assets/logo/unicredit.png", dataAtr: "Unicredit" },
      { src: "../assets/logo/otp.png", dataAtr: "Otp-Bank" },
      { src: "../assets/logo/ing.png", dataAtr: "Ing-Bank" },
      { src: "../assets/logo/brd.png", dataAtr: "Brd-Bank" },
      { src: "../assets/logo/tbi-bank.png", dataAtr: "Tbi-Bank" },
      { src: "../assets/logo/cetelem.png", dataAtr: "Cetelem" },
      { src: "../assets/logo/alpha.png", dataAtr: "Alpha-Bank" },
      { src: "../assets/logo/cec.png", dataAtr: "Cec-Bank" },
      { src: "../assets/logo/Libra_Bank.webp", dataAtr: "Libra-Bank" },
      { src: "../assets/logo/first_banks.png", dataAtr: "First-Bank" },
      { src: "../assets/logo/garanti.png", dataAtr: "Garanti-Bank" },
      { src: "../assets/logo/bt.png", dataAtr: "BT" },
      {
        src: "../assets/logo/banca_romaneasca.png",
        dataAtr: "Banca-Romaneasca",
      },
    ],
    ifn: [
      { src: "../assets/logo/providet.png", dataAtr: "Provident" },
      { src: "../assets/logo/icredit.png", dataAtr: "iCredit" },
      {
        src: "../assets/logo/horacredit.png",
        dataAtr: "Hora-Credit",
      },
      { src: "../assets/logo/icredit.png", dataAtr: "Icredit" },
      { src: "../assets/logo/vivacredit.png", dataAtr: "Viva-credit" },
      { src: "../assets/logo/brdfinance.png", dataAtr: "Brd-Finance" },
    ],
  };
  const handleDivClick = (divName) => {
    if (selectedDivNames.includes(divName)) {
      setSelectedDivNames(selectedDivNames.filter((name) => name !== divName));
    } else {
      setSelectedDivNames([...selectedDivNames, divName]);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFinal = () => {
    handleStepChange(6);
  };

  return (
    <div className="py-8">
      <p className="p-title mb-2">Banci</p>
      <p className="p-custom text-center">
        Selecteaza Bancile la care detii raport negativ.
      </p>
      <div className="image-grid grid-col-3 h-[50%]">
        {images.banks.map((image, index) => (
          <div
            key={index}
            className={`img-parrent pointer p-3 relative ${
              selectedDivNames.includes(image.dataAtr)
                ? "selected bg-gray-200"
                : ""
            }`}
            onClick={() => handleDivClick(image.dataAtr)}
            data-name={image.dataAtr}
          >
            <img
              src={image.src}
              alt={image.dataAtr}
              className={`w-[90%] h-[90%] object-contain ${image.dataAtr}`}
            />
            <p
              className={`absolute top-[5px] right-[5px] w-[10px] h-[10px] rounded-[100%] border border-gray-400 ${
                selectedDivNames.includes(image.dataAtr)
                  ? "selected bg-primary border-0"
                  : ""
              }`}
            ></p>
          </div>
        ))}
      </div>

      <p className="p-title mb-2">IFN-uri</p>
      <p className="p-custom text-center">
        Selecteaza IFN-urile la care detii raport negativ.
      </p>

      <div className="image-grid grid-col-3 h-[50%]">
        {images.ifn.map((image, index) => (
          <div
            key={index}
            className={`img-parrent pointer relative p-3 ${
              !selectedDivNames.includes(image.dataAtr)
                ? "selected"
                : "bg-gray-200"
            }`}
            onClick={() => handleDivClick(image.dataAtr)}
            data-name={image.dataAtr}
          >
            <img
              src={image.src}
              alt={image.dataAtr}
              className={`w-[90%] h-[90%] object-contain ${image.dataAtr}"
              } `}
            />
            <p
              className={`absolute top-[5px] right-[5px] w-[10px] h-[10px] rounded-[100%] border border-gray-400 ${
                selectedDivNames.includes(image.dataAtr)
                  ? "selected bg-primary border-0"
                  : ""
              }`}
            ></p>
          </div>
        ))}
      </div>

      <label>
        Altele:
        <input type="text" onChange={handleInputChange} />
      </label>
      <div className="my-4 flex flex-wrap gap-2 w-full">
        {selectedDivNames.map((name, index) => (
          <p
            className="bg-gray-200 w-fill text-gray-800 p-2 rounded-md"
            key={index}
          >
            {name}
          </p>
        ))}
        {inputValue && <p>{`, ${inputValue}`}</p>}
      </div>
      <div className="btn-parent">
        <button className="btn-sm w-full" onClick={handleFinal}>
          Finalizare
        </button>
      </div>
    </div>
  );
};

export default Step4;
