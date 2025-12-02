import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Layout from "./components/Layout/Layout";
import SeoHead from "./components/SeoHead";
import FormPage from "./components/Pages/FormPage";

// HomePage component that contains the main landing page
function HomePage() {
  const navigate = useNavigate();

  // Navigate to form handler
  const navigateToForm = () => {
    navigate("/formular");
  };

  return (
    <>
      <SeoHead />
      <div className="bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20 relative overflow-x-hidden w-full max-w-full">
        {/* Minimalist gradient overlay across entire page */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30 -z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-50/20 via-transparent to-accent-50/20 -z-10 pointer-events-none"></div>
        
        <Layout setIsModalOpen={navigateToForm}>
          <div className="relative">
            <Hero setIsModalOpen={navigateToForm} />
          </div>
          <div id="about" className="relative">
            <About />
          </div>
          <div className="relative">
            <Services setIsModalOpen={navigateToForm} />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formular" element={<FormPage />} />
      </Routes>
    </div>
  );
}
