import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, setIsModalOpen }) => {
  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
