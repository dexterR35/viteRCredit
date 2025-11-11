// angajare data

import { useState } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";

const Step3 = ({ stepChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const months = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];

  const generateDayOptions = () => {
    let options = [];
    for (let i = 1; i <= 31; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const generateYearOptions = () => {
    let options = [];
    let currentYear = new Date().getFullYear();
    for (let i = currentYear + 1; i >= 1999; i--) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const isDateSelected = day && month && year;
  const continueS = () => {
    stepChange(5, { selectedDate: `${day}.${month}.${year}` });
  };

  return (
    <div className="py-8 px-4 min-h-screen">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Angajare
          </h2>
        </div>

        <div className="card-modern p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-medium">
              <IoHelpCircleOutline className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Info</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                O vechime mai mare la locul de muncă poate spori șansele de a fi aprobat
                pentru un credit bancar, deoarece băncile consideră angajații cu o
                astfel de experiență mai stabili și mai puțin riscați, și pot oferi rate
                mai bune și condiții mai favorabile.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 text-center">
            Dacă nu reții exact, poți să aproximezi data la care te-ai angajat?
          </h3>

          <div className="grid grid-cols-3 gap-3 my-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Zi</label>
              <select
                id="jobDay"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full h-12 px-3 rounded-xl border-2 border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all appearance-none"
              >
                <option value="">Zi</option>
                {generateDayOptions()}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Lună</label>
              <select
                id="jobMonth"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full h-12 px-3 rounded-xl border-2 border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all appearance-none"
              >
                <option value="">Lună</option>
                {months.map((m, index) => (
                  <option key={index} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">An</label>
              <select
                id="jobYear"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full h-12 px-3 rounded-xl border-2 border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all appearance-none"
              >
                <option value="">An</option>
                {generateYearOptions()}
              </select>
            </div>
          </div>

          {isDateSelected && (
            <div className="p-4 bg-primary-50 border-2 border-primary-300 rounded-xl">
              <p className="text-center text-base font-semibold text-primary-800">
                ✓ Ai ales: <span className="text-primary-700">{day} / {month} / {year}</span>
              </p>
            </div>
          )}
        </div>

        <div className="pt-6">
          <button
            className={`btn-sm w-full ${
              !isDateSelected
                ? "!bg-gray-400 !text-white cursor-not-allowed hover:!scale-100 hover:!shadow-medium hover:!from-gray-400 hover:!to-gray-400"
                : ""
            }`}
            onClick={continueS}
            disabled={!isDateSelected}
          >
            Continuă
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
