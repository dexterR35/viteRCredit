import { useState } from "react";
import bcr from "/logo/bcr.png";
import raiff from "/logo/raiff.png";
import unicredit from "/logo/unicredit.png";
import otp from "/logo/otp.png";
import ing from "/logo/ing.png";
import brd from "/logo/brd.png";
import tbibank from "/logo/tbi-bank.png";
import cetelem from "/logo/cetelem.png";
import alpha from "/logo/alpha.png";
import cec from "/logo/cec.png";
import Libra_Bank from "/logo/Libra_Bank.webp";
import first_banks from "/logo/first_banks.png";
import garanti from "/logo/garanti.png";
import bt from "/logo/bt.png";
import bcrs from "/logo/banca_romaneasca.png";

import providet from "/logo/providet.png";
import icredit from "/logo/icredit.png";
import horacredit from "/logo/horacredit.png";

import vivacredit from "/logo/vivacredit.png";
import brdfinance from "/logo/brdfinance.png";

import Firestore from "../Misc/Firestore";

const Step4 = ({ stepChange, formData }) => {
  const [selectedDivNames, setSelectedDivNames] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const handleDivClick = (divName, category) => {
    const isAlreadySelected = selectedDivNames.includes(divName);

    if (isAlreadySelected) {
      setSelectedDivNames(selectedDivNames.filter((name) => name !== divName));
    } else {
      // Only add to selectedDivNames if the category matches the current selection
      if (
        (category === "banks" &&
          images.banks.some((bank) => bank.dataAtr === divName)) ||
        (category === "ifn" &&
          images.ifn.some((ifn) => ifn.dataAtr === divName))
      ) {
        setSelectedDivNames([...selectedDivNames, divName]);
      }
    }
  };
  const handleInput = (e) => {
    const { type, value } = e.target;
    if (type === "text") {
      setCurrentInput(value);
    }
  };

  const handleBlur = () => {
    if (currentInput.trim() !== "") {
      setInputValue((prevValue) => [...prevValue, currentInput.trim()]);
      setCurrentInput("");
    }
  };
  const handleDelete = (index) => {
    if (index < selectedDivNames.length) {
      setSelectedDivNames((prevNames) =>
        prevNames.filter((_, i) => i !== index)
      );
    } else {
      const adjustedIndex = index - selectedDivNames.length;
      setInputValue((prevValue) =>
        prevValue.filter((_, i) => i !== adjustedIndex)
      );
    }
  };

  const handleFinal = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const updatedSelectedDivNames = [...selectedDivNames];

    if (inputValue !== "") {
      updatedSelectedDivNames.push(inputValue);
    }
    const selectedBanks = images.banks
      .filter((bank) => selectedDivNames.includes(bank.dataAtr))
      .map((bank) => bank.dataAtr);

    const selectedIfn = images.ifn
      .filter((ifn) => selectedDivNames.includes(ifn.dataAtr))
      .map((ifn) => ifn.dataAtr);

    const dataForFirestore = {
      customer_status: "new",
      customer_info: formData,
      customer_files: "false",
      banking_status: true,
      banking_info: {
        bankHistory: false,
        banks: selectedBanks.length > 0 ? selectedBanks : "false",
        ifn: selectedIfn.length > 0 ? selectedIfn : "false",
        others: inputValue.length > 0 ? inputValue : "false",
      },
    };
    try {
      await Firestore.addData("oc_data", dataForFirestore);
      stepChange(6);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const isButtonDisabled = () => {
    return (
      (selectedDivNames.length === 0 && inputValue.length === 0) || isSubmitting
    );
  };
  return (
    <div className="py-8">
      <p className="p-title mb-2">Banci</p>
      <p className="p-custom text-center">
        Selectează Băncile la care deții raport negativ.
      </p>
      <div className="image-grid grid-col-3 h-[50%]">
        {images.banks.map((image, index) => (
          <div
            key={index}
            className={`img-parrent pointer p-3 relative ${
              selectedDivNames.includes(image.dataAtr)
                ? "selected bg-green-200"
                : ""
            }`}
            onClick={() => handleDivClick(image.dataAtr, "banks")}
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
        Selectează IFN-urile la care deții raport negativ.
      </p>

      <div className="image-grid grid-col-3 h-[50%]">
        {images.ifn.map((image, index) => (
          <div
            key={index}
            className={`img-parrent pointer relative p-3 ${
              !selectedDivNames.includes(image.dataAtr)
                ? "selected"
                : "bg-green-200"
            }`}
            onClick={() => handleDivClick(image.dataAtr, "ifn")}
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
        <input
          type="text"
          value={currentInput}
          onChange={handleInput}
          onBlur={handleBlur}
        />
      </label>
      <div className="my-4 flex flex-wrap gap-2 w-full">
        {selectedDivNames.map((name, index) => (
          <p
            className="bg-green-200 w-fill text-gray-800 p-2 rounded-md"
            key={index}
          >
            {name}
          </p>
        ))}
        {inputValue && (
          <div className="flex flex-row flex-wrap gap-2">
            {inputValue.map((value, index) => (
              <p
                key={index}
                className="bg-green-200 w-fill text-gray-800 p-2 rounded-md cursor-pointer"
                onClick={() => handleDelete(index + selectedDivNames.length)}
              >{`${value.trim()}`}</p>
            ))}
          </div>
        )}
      </div>
      <div className="btn-parent">
        <button
          className={`btn-sm w-full ${
            isButtonDisabled() ? "bg-gray-300" : "bg-initial"
          }`}
          onClick={handleFinal}
          disabled={isButtonDisabled()}
        >
          Trimite
        </button>
      </div>
    </div>
  );
};

export default Step4;
