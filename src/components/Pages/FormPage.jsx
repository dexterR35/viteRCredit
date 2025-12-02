import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoCloseOutline } from "react-icons/io5";
import { lazy, Suspense } from "react";

const StartQuiz = lazy(() => import("../startQuiz"));

const FormPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b-2 border-gray-200/60 shadow-soft">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-gray-50"
              aria-label="Înapoi la pagina principală"
            >
              <IoArrowBack className="w-5 h-5" />
              <span className="hidden sm:inline">Înapoi</span>
            </button>
            <button
              onClick={handleBack}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-md transition-colors duration-200"
              aria-label="Închide"
            >
              <IoCloseOutline className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
        <div className="max-w-2xl mx-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Se încarcă formularul...</p>
              </div>
            </div>
          }>
            <StartQuiz />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FormPage;

