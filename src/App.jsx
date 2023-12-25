import Hero from "./components/Pages/Hero";
// import Header from "./Layout/Header";
// import SeoHead from "../components/SeoHead";
import Layout from "./components/Layout/Layout";
import QuizButton from "./components/Qbutton";

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
        <QuizButton />
        {/* <Hero />
        <Feature />
        <Services /> */}
      </Layout>
      {/* <MainForm /> */}
    </>
  );
}
