import { useState } from "react";
import bcr from "../../assets/logo/bcr.png";
import raiff from "../../assets/logo/raiff.png";
import unicredit from "../../assets/logo/unicredit.png";
import otp from "../../assets/logo/otp.png";
import ing from "../../assets/logo/ing.png";
import brd from "../../assets/logo/brd.png";
import tbibank from "../../assets/logo/tbi-bank.png";
import cetelem from "../../assets/logo/cetelem.png";
import alpha from "../../assets/logo/alpha.png";
import cec from "../../assets/logo/cec.png";
import Libra_Bank from "../../assets/logo/Libra_Bank.webp";
import first_banks from "../../assets/logo/first_banks.png";
import garanti from "../../assets/logo/garanti.png";
import bt from "../../assets/logo/bt.png";
import bcrs from "../../assets/logo/banca_romaneasca.png";

import providet from "../../assets/logo/providet.png";
import icredit from "../../assets/logo/icredit.png";
import horacredit from "../../assets/logo/horacredit.png";
// import icredit from "../../assets/logo/icredit.png";
import vivacredit from "../../assets/logo/vivacredit.png";
import brdfinance from "../../assets/logo/brdfinance.png";
const Step4 = ({ stepChange }) => {
  const [selectedDivNames, setSelectedDivNames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const [selectedOptions, setSelectedOption] = useState(""); // Add state for selected option
  const images = {
    banks: [
      { src: bcr, dataAtr: "Bcr" },
      { src: raiff, dataAtr: "Raiffeisen-Bank" },
      { src: unicredit, dataAtr: "Unicredit" },
      { src: otp, dataAtr: "Otp-Bank" },
      { src: ing, dataAtr: "Ing-Bank" },
      { src: brd, dataAtr: "Brd-Bank" },
      { src: tbibank, dataAtr: "Tbi-Bank" },
      { src: cetelem, dataAtr: "Cetelem" },
      { src: alpha, dataAtr: "Alpha-Bank" },
      { src: cec, dataAtr: "Cec-Bank" },
      { src: Libra_Bank, dataAtr: "Libra-Bank" },
      { src: first_banks, dataAtr: "First-Bank" },
      { src: garanti, dataAtr: "Garanti-Bank" },
      { src: bt, dataAtr: "BT" },
      {
        src: bcrs,
        dataAtr: "Banca-Romaneasca",
      },
    ],
    ifn: [
      { src: providet, dataAtr: "Provident" },
      { src: icredit, dataAtr: "iCredit" },
      {
        src: horacredit,
        dataAtr: "Hora-Credit",
      },
      { src: icredit, dataAtr: "Icredit" },
      { src: vivacredit, dataAtr: "Viva-credit" },
      { src: brdfinance, dataAtr: "Brd-Finance" },
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
    stepChange(6);
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
