import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, setIsModalOpen }) => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header setIsModalOpen={setIsModalOpen} />
      <div className="w-full max-w-full overflow-x-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
