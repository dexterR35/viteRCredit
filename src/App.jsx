import { Routes, Route, useNavigate } from "react-router-dom";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Layout from "./components/Layout/Layout";
import SeoHead from "./components/SeoHead";
import FormPage from "./components/Pages/FormPage";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import CookiePolicy from "./components/Pages/CookiePolicy";
import GDPR from "./components/Pages/GDPR";

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
      <div className="bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20 relative">
        <Layout setIsModalOpen={navigateToForm}>
          <Hero setIsModalOpen={navigateToForm} />
          <div id="about">
            <About />
          </div>
          <Services setIsModalOpen={navigateToForm} />
        </Layout>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formular" element={<FormPage />} />
      <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
      <Route path="/politica-cookies" element={<CookiePolicy />} />
      <Route path="/gdpr" element={<GDPR />} />
    </Routes>
  );
}
