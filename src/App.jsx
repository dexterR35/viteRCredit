import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
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
    <>
      <Layout>
        <Hero />
        <About />
        <Services />
        {/* <QuizButton /> */}
        {/* <Hero />
        <Feature />
        <Services /> */}
      </Layout>
      {/* <MainForm /> */}
    </>
  );
}
