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
      customer_info: {
        formData,
        customer_files: "false",
        banking_status: true, //  report negative or history on banks
        banking_info: {
          bankHistory: false,
          banks: selectedBanks.length > 0 ? selectedBanks : "false",
          ifn: selectedIfn.length > 0 ? selectedIfn : "false",
          others: inputValue.length > 0 ? inputValue : "false",
        },
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
    <div className="py-8 px-4 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Banks Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Bănci
            </h2>
            <p className="text-gray-600">
              Selectează băncile la care deții raport negativ.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {images.banks.map((image, index) => {
              const isSelected = selectedDivNames.includes(image.dataAtr);
              return (
                <div
                  key={index}
                  className={`relative p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 bg-white ${
                    isSelected
                      ? "border-primary-500 bg-primary-50 shadow-medium scale-105"
                      : "border-gray-300 hover:border-primary-300 hover:shadow-soft"
                  }`}
                  onClick={() => handleDivClick(image.dataAtr, "banks")}
                >
                  <img
                    src={image.src}
                    alt={image.dataAtr}
                    className="w-full h-16 object-contain"
                  />
                  {isSelected && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-medium">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* IFN Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              IFN-uri
            </h2>
            <p className="text-gray-600">
              Selectează IFN-urile la care deții raport negativ.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {images.ifn.map((image, index) => {
              const isSelected = selectedDivNames.includes(image.dataAtr);
              return (
                <div
                  key={index}
                  className={`relative p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 bg-white ${
                    isSelected
                      ? "border-primary-500 bg-primary-50 shadow-medium scale-105"
                      : "border-gray-300 hover:border-primary-300 hover:shadow-soft"
                  }`}
                  onClick={() => handleDivClick(image.dataAtr, "ifn")}
                >
                  <img
                    src={image.src}
                    alt={image.dataAtr}
                    className="w-full h-16 object-contain"
                  />
                  {isSelected && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-medium">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            Altele:
          </label>
          <input
            type="text"
            value={currentInput}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder="Introduceți alte instituții..."
            className="w-full h-12 px-4 rounded-xl border-2 border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
          />
        </div>

        {/* Selected Items */}
        {(selectedDivNames.length > 0 || inputValue.length > 0) && (
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Selectate ({selectedDivNames.length + inputValue.length}):
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedDivNames.map((name, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary-300 text-primary-700 rounded-lg text-sm font-medium"
                >
                  {name}
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    ×
                  </button>
                </span>
              ))}
              {inputValue.map((value, index) => (
                <span
                  key={index + selectedDivNames.length}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-primary-300 text-primary-700 rounded-lg text-sm font-medium"
                >
                  {value.trim()}
                  <button
                    onClick={() => handleDelete(index + selectedDivNames.length)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pt-6">
          <button
            className={`btn-sm w-full ${
              isButtonDisabled()
                ? "bg-gray-300 cursor-not-allowed hover:scale-100 hover:shadow-medium"
                : ""
            }`}
            onClick={handleFinal}
            disabled={isButtonDisabled()}
          >
            {isSubmitting ? "Se trimite..." : "Trimite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
