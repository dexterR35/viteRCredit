import { useState } from "react";
const Form = ({ stepChange }) => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    aboutUs: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "gas");
    const isValidPhone = /^\d{0,9}$/.test(value); // Allow up to 10 digits

    setError("Adauga un numar valid");
    if (name === "phone") {
      if (isValidPhone) {
        setError("Adaugă încă " + (10 - value.length) + " cifre");
      } else {
        setError("Număr introdus corect");
        setTimeout(() => {
          setError("");
        }, 700);
      }
    }
    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!isValidEmail) {
        setError("Introduceti o adresă de email validă");
      } else {
        setError(""); // Clear the error when the email is correct
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinue = () => {
    if (formData.name && formData.aboutUs && formData.email && formData.phone) {
      stepChange(2, { name: formData.name, formData: formData });
    } else {
      setError("Completează toate câmpurile.");
    }
  };
  const isContinueDisabled =
    !formData.name ||
    !formData.aboutUs ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || // Check email format
    !/^\d{10}$/.test(formData.phone); // Check phone format (exactly 10 digits)

  return (
    <div className="w-full h-screen">
      <h2 className="pt-6 font-bold sm:mt-2 sm:text-3xl sm:w-[90%] text-3xl">
        Soluții de creditare personalizate
      </h2>

      <h5 className="my-3 text-[14px] leading-5 text-gray-700">
        Află cum poți obține cele mai bune oferte de credite prin intermediul
        experților.
      </h5>

      <div className="rounded my-4">
        {error && (
          <h5 className="bg-primary text-white text-center text-sm py-1 rounded-sm">
            {error}
          </h5>
        )}
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
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder=""
              maxLength={10}
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
              name="aboutUs"
              value={formData.aboutUs}
              onChange={handleInputChange}
            >
              <option value="">Selectează</option>
              <option value="FaceBook">FaceBook</option>
              <option value="Pliant">Pliant</option>
              <option value="TikTok">Tik-Tok</option>
              <option value="Consultant">Consultant</option>
              <option value="Recomandare">Recomandare</option>
            </select>
          </label>
          <br />
          <button
            type="button"
            className={`btn-sm w-full ${
              isContinueDisabled ? "bg-gray-300" : ""
            }`}
            onClick={handleContinue}
            disabled={isContinueDisabled}
          >
            Pasul Urmator
          </button>
          <p className="mt-4 text-[12px] text-gray-700">
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
