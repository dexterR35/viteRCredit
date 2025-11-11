import Firestore from "../Misc/Firestore";
import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
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
    if (isChecked === null) {
      //checkbox is not selected
      return;
    }

    // if (isChecked === true) {
    //   stepChange(7);
    // } else if (isChecked === false) {
    //   stepChange(8);
    // }
    const dataForFirestore = {
      customer_status: "new",
      customer_info: {
        formData,
        customer_files: "false",
        banking_status: isChecked, //  report negative or positive triggered by obtionBox value
        banking_info: {
          bankHistory: isChecked, //  report negative or history on banks
          banks: "false",
          ifn: "false",
          others: "false",
        },
      },
    };
    if (isChecked) {
      stepChange(7);
    } else {
      stepChange(8);
    }
    await Firestore.addData("oc_data", dataForFirestore);
  };
  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Istoric Bancar
          </h2>
        </div>

        <div className="card-modern p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-medium">
              <FcInfo className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Știați că !?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Creditele bancare au apărut încă din antichitate, când bancherii
                furnizau finanțare pentru comerț și afaceri. În Evul Mediu, băncile au
                oferit împrumuturi pentru a finanța construcția de clădiri și alte
                proiecte.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 text-center">
            Deții istoric bancar sau credite în prezent?
          </h3>

          <div className="grid grid-cols-1 gap-4 mt-6">
            {optionBox.map((option) => (
              <label
                key={option.label}
                className={`relative flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  isChecked === option.value
                    ? "bg-gradient-to-br from-primary-50 to-primary-100 border-primary-500 shadow-medium scale-105"
                    : "bg-white border-gray-300 hover:border-primary-300 hover:shadow-soft"
                }`}
              >
                <div className="flex-1">
                  <span className="text-base font-semibold text-gray-900 block">
                    {option.label}
                  </span>
                </div>
                <div className="relative flex-shrink-0 ml-4">
                  <input
                    type="checkbox"
                    checked={isChecked === option.value}
                    onChange={() => handleCheckboxChange(option.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                      isChecked === option.value
                        ? "bg-gradient-to-r from-primary-500 to-primary-600 border-primary-600"
                        : "bg-white border-gray-400"
                    }`}
                  >
                    {isChecked === option.value && (
                      <IoCheckmarkSharp className="text-white w-5 h-5" />
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <button
            className={`btn-sm w-full ${
              !isCheckboxChecked
                ? "!bg-gray-400 !text-white cursor-not-allowed hover:!scale-100 hover:!shadow-medium hover:!from-gray-400 hover:!to-gray-400"
                : ""
            }`}
            onClick={handleDecision}
            disabled={!isCheckboxChecked}
          >
            Continuă
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
