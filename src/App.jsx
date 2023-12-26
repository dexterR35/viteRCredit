import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Testimoni from "./components/Pages/Testimoni";
// import Header from "./Layout/Header";
// import SeoHead from "../components/SeoHead";
import Layout from "./components/Layout/Layout";
// import QuizButton from "./components/steps/Qbutton";

// const App = () => {
//   return (
//     <>
//       <Header />

//       {/* <Hero />
//         <Feature />
//         <Services /> */}
//       <QuizButton />
//     </>
//   );
// };

// export default App;

export default function App() {
  return (
    <div className="bg-gray-200">
      <Layout>
        <Hero />
        <div className="bg-white">
          <About />
        </div>
        <div className="bg-gray-200">
          <Services />
        </div>

        {/* <QuizButton /> */}
        {/* <Hero />
        <Feature />
        <Services /> */}
      </Layout>
      {/* <MainForm /> */}
    </div>
  );
}
