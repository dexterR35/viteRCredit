// angajare data

import { useState } from "react";

const Step3 = ({ handleStepChange }) => {
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

  const selectedDate = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();
  // console.log((currentDate.getMonth() + 1) / 2, ":sa");
  const drop1Year = selectedDate.getFullYear() < currentDate.getFullYear();
  const currentDateNew = currentDate.getMonth() + 1;

  const isDateBeforeSixMonths = currentDateNew < currentDateNew / 2;
  console.log(isDateBeforeSixMonths, ":sa");
  console.log("isDateBeforeSixMonths", currentDateNew);
  const continueS = () => {
    handleStepChange(5);
  };

  return (
    <div className="py-8">
      <p className="p-title">Angajare</p>
      <p className="p-custom">
        O vechime mai mare la locul de muncă poate spori șansele de a fi aprobat
        pentru un credit bancar, deoarece băncile consideră angajații cu o
        astfel de experiență mai stabili și mai puțin riscați, și pot oferi rate
        mai bune și condiții mai favorabile.
      </p>
      <p className="p-question mt-6">
        Dacă nu reții exact, poți să aproximezi data la care te ai angajat?
      </p>
      <div className="flex justify-around my-4 gap-2">
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
          {drop1Year && (
            <p className=" p-custom text-center p-2 bg-green-200 text-gray-800">
              Data este înainte de anul curent.ai peste un an
            </p>
          )}
          {isDateBeforeSixMonths && (
            <p
              className={`${
                isDateBeforeSixMonths ? "text-blue-500" : "text-blue-400"
              }`}
            >
              Data este mai mică de 6 luni față de data curentă.
            </p>
          )}
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
