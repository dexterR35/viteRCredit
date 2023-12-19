import { useState } from "react";

const Form = ({ handleStepChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    selection: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinue = () => {
    handleStepChange(2); // Go tos Step2 when "Continue" is pressed
  };

  const isContinueDisabled =
    !formData.name || !formData.email || !formData.selection || !formData.phone;

  return (
    <div className="w-full">
      <h2 className="pt-6 font-bold sm:mt-2 sm:text-3xl sm:w-[90%] text-3xl">
        Soluții de creditare personalizate
      </h2>
      <h5 className="my-3 text-[14px] leading-5 text-gray-500">
        Află cum poți obține cele mai bune oferte de credite prin intermediul
        experților.
      </h5>
      <div className="h-full rounded my-4">
        <h5 className="bg-primary text-white text-center text-sm py-1 rounded-sm">
          Error, succes
        </h5>
        <form className="flex flex-col justify-evenly px-0 py-4">
          <label className="mb-3 ">
            Nume:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder=""
            />
          </label>
          <label className="mb-3">
            Telefon:
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder=""
            />
          </label>
          <label className="mb-3">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder=""
            />
          </label>
          <label className="mb-3">
            Cum ati auzit de noi?
            <select
              name="selection"
              value={formData.selection}
              onChange={handleInputChange}
            >
              <option value="">Selecteaza</option>
              <option value="option1">FaceBook</option>
              <option value="option2">Pliant</option>
              <option value="option3">Tik-Tok</option>
              <option value="option4">Consultant</option>
              <option value="option5">Recomandare</option>
            </select>
          </label>
          <br />
          <button
            className={`btn-sm w-full ${
              isContinueDisabled ? "bg-gray-300" : "bg-red"
            }`}
            onClick={handleContinue}
            disabled={isContinueDisabled}
          >
            Pasul Urmator
          </button>
          <p className="mt-4 text-[12px] text-gray-500">
            Acesta este un chestionar interactiv care te va ajuta să obții
            informații despre opțiunile tale de creditare. Vom începe prin a
            afla câteva informații de bază despre tine.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
