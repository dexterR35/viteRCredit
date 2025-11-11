import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Layout from "./components/Layout/Layout";
import SeoHead from "./components/SeoHead";
import { IoCloseOutline } from "react-icons/io5";

// Lazy load heavy components
const StartQuiz = lazy(() => import("./components/startQuiz"));
const BonusModal = lazy(() => import("./components/BonusModal"));

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed w-full top-0 z-50 flex justify-center items-start sm:justify-start bg-white before overflow-scroll"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative loading w-[480px] h-screen">
        <button
          onClick={onClose}
          className="p-3 px-5 text-md text-gray-400 absolute rounded-md right-2 top-3 z-20"
          aria-label="Close modal"
        >
          <IoCloseOutline />
        </button>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const SHOW_BONUS_DELAY = 5000; // 1 second
  const BONUS_COOLDOWN = 15000; // 15 seconds

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBonus, setShowBonus] = useState(false);
  const [bonusClosedAt, setBonusClosedAt] = useState(null);
  const showBonusTimeout = useRef(null);
  const isModalOpenRef = useRef(false);

  // Update ref when modal state changes
  useEffect(() => {
    isModalOpenRef.current = isModalOpen;
  }, [isModalOpen]);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // Clear any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
    };
  }, []);

  // Combined effect: show bonus banner after delay respecting cooldown and modal open state
  useEffect(() => {
    if (showBonusTimeout.current) {
      clearTimeout(showBonusTimeout.current);
    }

    // Hide bonus immediately if modal is open - don't schedule any timeouts
    if (isModalOpen) {
      setShowBonus(false);
      return;
    }

    const now = Date.now();

    if (bonusClosedAt) {
      const timeSinceClose = now - bonusClosedAt;

      if (timeSinceClose >= BONUS_COOLDOWN) {
        // Cooldown passed — show bonus after delay
        showBonusTimeout.current = setTimeout(() => {
          // Double check modal is not open before showing bonus
          if (!isModalOpenRef.current) {
            setShowBonus(true);
          }
        }, SHOW_BONUS_DELAY);
      } else {
        // Still in cooldown — schedule showing bonus after remaining cooldown + delay
        const remainingCooldown = BONUS_COOLDOWN - timeSinceClose;
        showBonusTimeout.current = setTimeout(() => {
          // Double check modal is not open before showing bonus
          if (!isModalOpenRef.current) {
            setShowBonus(true);
          }
        }, remainingCooldown + SHOW_BONUS_DELAY);
      }
    } else {
      // No cooldown — show bonus after delay
      showBonusTimeout.current = setTimeout(() => {
        // Double check modal is not open before showing bonus
        if (!isModalOpenRef.current) {
          setShowBonus(true);
        }
      }, SHOW_BONUS_DELAY);
    }

    return () => {
      if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
    };
  }, [isModalOpen, bonusClosedAt]);

  // Open modal handler
  const openModal = () => {
    setIsModalOpen(true);
    setShowBonus(false);
    if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
    // The useEffect will handle showing the bonus after modal closes
  };

  // Bonus banner manual close handler
  const closeBonusManually = () => {
    setShowBonus(false);
    setBonusClosedAt(Date.now());
    if (showBonusTimeout.current) clearTimeout(showBonusTimeout.current);
    // Bonus will reappear automatically after cooldown + delay via the combined effect
  };

  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20 relative">
        {/* Minimalist gradient overlay across entire page */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30 -z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-50/20 via-transparent to-accent-50/20 -z-10 pointer-events-none"></div>
        
        <Layout isModalOpen={isModalOpen} setIsModalOpen={openModal}>
          <div className="relative">
            <Hero setIsModalOpen={openModal} />
          </div>
          <div id="about" className="relative">
            <About />
          </div>
          <div className="relative">
            <Services setIsModalOpen={openModal} />
          </div>
        </Layout>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <StartQuiz />
          </Suspense>
        </Modal>

        {showBonus && (
          <Suspense fallback={null}>
            <BonusModal visible={showBonus} onClose={closeBonusManually} />
          </Suspense>
        )}
      </div>
    </>
  );
}
