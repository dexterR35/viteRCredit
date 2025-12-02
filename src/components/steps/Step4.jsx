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
    <div className="py-6 sm:py-8 px-4 sm:px-6">
      <div className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Banks Section */}
        <div className="space-y-5">
          <div className="text-center pb-4 border-b border-gray-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-3">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Bănci
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Selectează băncile
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Alege băncile la care deții raport negativ sau istoric bancar
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.banks.map((image, index) => {
              const isSelected = selectedDivNames.includes(image.dataAtr);
              return (
                <div
                  key={index}
                  className={`relative group p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 bg-white hover:shadow-medium ${
                    isSelected
                      ? "border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 shadow-medium scale-[1.02] ring-2 ring-primary-200"
                      : "border-gray-200/60 hover:border-primary-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleDivClick(image.dataAtr, "banks")}
                >
                  <div className="aspect-square flex items-center justify-center p-1 sm:p-2">
                    <img
                      src={image.src}
                      alt={image.dataAtr}
                      className="w-full h-full object-contain max-h-12 sm:max-h-16 md:max-h-20 md:!max-w-[172%] md:!w-auto md:!h-auto"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {!isSelected && (
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-dashed border-transparent group-hover:border-primary-200 transition-all duration-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* IFN Section */}
        <div className="space-y-5 pt-6 border-t border-gray-200">
          <div className="text-center pb-4 border-b border-gray-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-semibold mb-3">
              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
              IFN-uri
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Selectează IFN-urile
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Alege instituțiile financiare nebancare la care deții raport negativ
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.ifn.map((image, index) => {
              const isSelected = selectedDivNames.includes(image.dataAtr);
              return (
                <div
                  key={index}
                  className={`relative group p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-300 bg-white hover:shadow-medium ${
                    isSelected
                      ? "border-accent-500 bg-gradient-to-br from-accent-50 to-accent-100 shadow-medium scale-[1.02] ring-2 ring-accent-200"
                      : "border-gray-200/60 hover:border-accent-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleDivClick(image.dataAtr, "ifn")}
                >
                  <div className="aspect-square flex items-center justify-center p-1 sm:p-2">
                    <img
                      src={image.src}
                      alt={image.dataAtr}
                      className="w-full h-full object-contain max-h-12 sm:max-h-16 md:max-h-20 md:!max-w-[172%] md:!w-auto md:!h-auto"
                    />
                  </div>
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {!isSelected && (
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-dashed border-transparent group-hover:border-accent-200 transition-all duration-300"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Input */}
        <div className="space-y-3 pt-6 border-t border-gray-200">
          <div className="text-center mb-4">
            <label className="flex items-center justify-center gap-2 text-base font-semibold text-gray-700 mb-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              Alte instituții
            </label>
            <p className="text-sm text-gray-600">
              Adaugă alte instituții financiare care nu sunt în listă
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              value={currentInput}
              onChange={handleInput}
              onBlur={handleBlur}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleBlur();
                }
              }}
              placeholder="Introduceți numele instituției și apăsați Enter..."
              className="w-full h-14 px-5 pr-12 rounded-2xl border-2 border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all text-base"
            />
            {currentInput && (
              <button
                onClick={handleBlur}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Selected Items */}
        {(selectedDivNames.length > 0 || inputValue.length > 0) && (
          <div className="p-6 bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-2xl border-2 border-primary-200 shadow-medium">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {selectedDivNames.length + inputValue.length}
                </span>
                Instituții selectate
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedDivNames.map((name, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-primary-300 text-primary-700 rounded-xl text-sm font-semibold shadow-soft hover:shadow-medium transition-all group"
                >
                  {name}
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-primary-600 hover:text-primary-800 hover:bg-primary-50 rounded-full p-0.5 transition-colors"
                    aria-label="Remove"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </span>
              ))}
              {inputValue.map((value, index) => (
                <span
                  key={index + selectedDivNames.length}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-accent-300 text-accent-700 rounded-xl text-sm font-semibold shadow-soft hover:shadow-medium transition-all group"
                >
                  {value.trim()}
                  <button
                    onClick={() => handleDelete(index + selectedDivNames.length)}
                    className="text-accent-600 hover:text-accent-800 hover:bg-accent-50 rounded-full p-0.5 transition-colors"
                    aria-label="Remove"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pt-2">
          <button
            className={`btn-sm w-full ${
              isButtonDisabled()
                ? "!bg-gray-400 !text-white cursor-not-allowed hover:!scale-100 hover:!shadow-medium hover:!from-gray-400 hover:!to-gray-400"
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
