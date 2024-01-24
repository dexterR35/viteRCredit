import Firestore from "../Misc/Firestore";
import { useState } from "react";
import { IoHelpCircleOutline, IoCheckmarkSharp } from "react-icons/io5";
import { FcInfo } from "react-icons/fc";
const optionBox = [
  { label: "Detin istoric bancar", value: true },
  { label: "Nu detin istoric bancar", value: false },
];

const Step5 = ({ stepChange, formData }) => {
  const [isChecked, setIsChecked] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = (value) => {
    setIsChecked(value);
    setIsCheckboxChecked(true);
  };

  const handleDecision = async () => {
    let bankHistoryValue = isChecked;

    if (isChecked === true) {
      stepChange(7);
    } else if (isChecked === false) {
      stepChange(8);
    }
    const dataForFirestore = {
      customer_status: "new",
      customer_info: formData,
      customer_files: "false",
      banking_status: bankHistoryValue,
      banking_info: {
        bankHistory: bankHistoryValue,
        banks: "false",
        ifn: "false",
        others: "false",
      },
    };

    await Firestore.addData("oc_data", dataForFirestore);
  };
  return (
    <div className="py-8 h-screen">
      <p className="p-title mb-10">Istoric Bancar</p>
      <div className="p-custom text-start">
        <div className="text-lg font-semibold mb-2">
          Stiați că !?
          <FcInfo className="float-right h-6 w-6 text-gray-600" />
        </div>
        Creditele bancare au apărut încă din antichitate, când bancherii
        furnizau finanțare pentru comerț și afaceri. În Evul Mediu, băncile au
        oferit împrumuturi pentru a finanța construcția de clădiri și alte
        proiecte.
      </div>
      <p className="p-question w-[90%] mx-auto mt-8 mb-8">
        Detine-ți istoric bancar sau credite in prezent?
      </p>
      <div className="flex gap-4 w-full mt-6">
        {optionBox.map((option) => (
          <label
            key={option.label}
            className="flex p-3 w-full justify-between border border-gray-500 rounded-lg text-sm"
          >
            <span className="text-sm text-gray-700 w-[80%]">
              {option.label}
            </span>
            <span className="relative">
              <input
                type="checkbox"
                checked={isChecked === option.value}
                onChange={() => handleCheckboxChange(option.value)}
                className="p-0 mt-0.5 border-gray-400 rounded disabled:opacity-50 disabled:pointer-events-none checked:bg-primary checked:border-primary w-6 h-6"
              />
              {isChecked === option.value && (
                <div className="absolute top-[-6px] left-0 w-full h-full flex items-center justify-center">
                  <IoCheckmarkSharp className="text-white font-fold w-5 h-5" />
                </div>
              )}
            </span>
          </label>
        ))}
      </div>
      <div className="btn-parent">
        <button
          className={`btn-sm w-full ${!isCheckboxChecked ? "bg-gray-300" : ""}`}
          onClick={handleDecision}
          disabled={!isCheckboxChecked}
        >
          Continuă
        </button>
      </div>
    </div>
  );
};

export default Step5;
