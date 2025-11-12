import { useState } from "react";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { HiUser, HiPhone, HiMail, HiInformationCircle } from "react-icons/hi";

const Form = ({ stepChange }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    aboutUs: "",
  });

  const validateField = (name, value) => {
    let error = "";
    
    if (name === "phone") {
      if (!value) {
        error = "Numărul de telefon este obligatoriu";
      } else if (!/^\d{10}$/.test(value)) {
        error = `Adaugă încă ${10 - value.length} cifre`;
      }
    } else if (name === "email") {
      if (!value) {
        error = "Email-ul este obligatoriu";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Introduceți o adresă de email validă";
      }
    } else if (name === "name") {
      if (!value.trim()) {
        error = "Numele este obligatoriu";
      } else if (value.trim().length < 2) {
        error = "Numele trebuie să aibă minim 2 caractere";
      }
    } else if (name === "aboutUs") {
      if (!value) {
        error = "Selectați o opțiune";
      }
    }
    
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = name === "name" ? value.toLowerCase() : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    if (touched[name]) {
      const error = validateField(name, fieldValue);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleContinue = () => {
    const newTouched = { name: true, phone: true, email: true, aboutUs: true };
    setTouched(newTouched);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => !err)) {
      stepChange(2, { name: formData.name, formData: formData });
    }
  };

  const isContinueDisabled =
    !formData.name ||
    !formData.aboutUs ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
    !/^\d{10}$/.test(formData.phone);

  const getFieldStatus = (name) => {
    if (!touched[name]) return "";
    return errors[name] ? "error" : "success";
  };

  return (
    
    <>
        <div className="mb-8 b">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Soluții de{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              creditare
            </span>{" "}
            personalizate
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Află cum poți obține cele mai bune oferte de credite prin intermediul
            experților.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <HiUser className="w-5 h-5 text-primary-500" />
              Nume complet
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Introduceți numele complet"
                className={`w-full h-12 px-4 pr-12 rounded-xl border-2 transition-all duration-200 ${
                  getFieldStatus("name") === "error"
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : getFieldStatus("name") === "success"
                    ? "border-primary-300 bg-primary-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    : "border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                }`}
              />
              {getFieldStatus("name") === "success" && (
                <IoCheckmarkCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-500" />
              )}
              {getFieldStatus("name") === "error" && (
                <IoCloseCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-500" />
              )}
            </div>
            {touched.name && errors.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <IoCloseCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <HiPhone className="w-5 h-5 text-primary-500" />
              Număr de telefon
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="07XXXXXXXX"
                maxLength={10}
                className={`w-full h-12 px-4 pr-12 rounded-xl border-2 transition-all duration-200 ${
                  getFieldStatus("phone") === "error"
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : getFieldStatus("phone") === "success"
                    ? "border-primary-300 bg-primary-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    : "border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                }`}
              />
              {getFieldStatus("phone") === "success" && (
                <IoCheckmarkCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-500" />
              )}
              {getFieldStatus("phone") === "error" && (
                <IoCloseCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-500" />
              )}
            </div>
            {touched.phone && errors.phone && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <IoCloseCircle className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
            {touched.phone && !errors.phone && formData.phone && (
              <p className="text-sm text-primary-600 flex items-center gap-1">
                <IoCheckmarkCircle className="w-4 h-4" />
                Număr valid
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <HiMail className="w-5 h-5 text-primary-500" />
              Adresă email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="exemplu@email.com"
                className={`w-full h-12 px-4 pr-12 rounded-xl border-2 transition-all duration-200 ${
                  getFieldStatus("email") === "error"
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : getFieldStatus("email") === "success"
                    ? "border-primary-300 bg-primary-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    : "border-gray-300 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                }`}
              />
              {getFieldStatus("email") === "success" && (
                <IoCheckmarkCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-500" />
              )}
              {getFieldStatus("email") === "error" && (
                <IoCloseCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-red-500" />
              )}
            </div>
            {touched.email && errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <IoCloseCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* About Us Field */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <HiInformationCircle className="w-5 h-5 text-primary-500" />
              Cum ați auzit de noi?
            </label>
            <div className="relative">
              <select
                name="aboutUs"
                value={formData.aboutUs}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full h-12 px-4 pr-12 rounded-xl border-2 transition-all duration-200 appearance-none bg-white ${
                  getFieldStatus("aboutUs") === "error"
                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : getFieldStatus("aboutUs") === "success"
                    ? "border-primary-300 bg-primary-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    : "border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                }`}
              >
                <option value="">Selectează o opțiune</option>
                <option value="facebook">Facebook</option>
                <option value="pliant">Pliant</option>
                <option value="tiktok">TikTok</option>
                <option value="consultant">Consultant</option>
                <option value="recomandare">Recomandare</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {getFieldStatus("aboutUs") === "success" && (
                <IoCheckmarkCircle className="absolute right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 text-primary-500" />
              )}
            </div>
            {touched.aboutUs && errors.aboutUs && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <IoCloseCircle className="w-4 h-4" />
                {errors.aboutUs}
              </p>
            )}
          </div>

          <button
            type="button"
            className={`btn-sm w-full mt-8 ${
              isContinueDisabled
                ? "!bg-gray-400 !text-white cursor-not-allowed hover:!scale-100 hover:!shadow-medium hover:!from-gray-400 hover:!to-gray-400"
                : ""
            }`}
            onClick={handleContinue}
            disabled={isContinueDisabled}
          >
            Pasul Următor
          </button>

          <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-sm text-gray-700 leading-relaxed flex items-start gap-2">
              <HiInformationCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span>
                Acesta este un chestionar interactiv care te va ajuta să obții
                informații despre opțiunile tale de creditare. Vom începe prin a
                afla câteva informații de bază despre tine.
              </span>
            </p>
          </div>
        </form>
     
 </>
  );
};

export default Form;
