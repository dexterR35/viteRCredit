import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, setIsModalOpen }) => {
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
