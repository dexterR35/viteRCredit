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
    <div className="py-8 h-screen">
      <p className="p-title">Angajare</p>
      <div className="p-custom">
        <div className="text-lg font-semibold mb-2">
          Info
          <IoHelpCircleOutline className="float-right h-6 w-6 text-gray-600" />
        </div>
        O vechime mai mare la locul de muncă poate spori șansele de a fi aprobat
        pentru un credit bancar, deoarece băncile consideră angajații cu o
        astfel de experiență mai stabili și mai puțin riscați, și pot oferi rate
        mai bune și condiții mai favorabile.
      </div>
      <p className="p-question mt-6">
        Dacă nu reții exact, poți să aproximezi data la care te ai angajat?
      </p>
      <div className="flex justify-around my-4 gap-2 text-[0.9em]">
        <select
          id="jobDay"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="w-[33%]"
        >
          <option value="">Zi</option>
          {generateDayOptions()}
        </select>
        <select
          id="jobMonth"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-[33%]"
        >
          <option value="">Lună</option>
          {months.map((m, index) => (
            <option key={index} value={m}>
              {m}
            </option>
          ))}
        </select>
        <select
          id="jobYear"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-[33%]"
        >
          <option value="">An</option>
          {generateYearOptions()}
        </select>
      </div>{" "}
      {isDateSelected && (
        <div className="text-center text-md mb-2 mt-2 rounded-md border-[1px]">
          <p id="selectedDate" className="border border-gray-300 py-3">
            Ai ales: {day} / {month} / {year}
          </p>
        </div>
      )}
      <div className="btn-parent">
        <button
          className={`btn-sm w-full ${!isDateSelected ? "bg-gray-300" : ""}`}
          onClick={continueS}
          disabled={!isDateSelected}
        >
          Continua
        </button>
      </div>
    </div>
  );
};

export default Step3;
