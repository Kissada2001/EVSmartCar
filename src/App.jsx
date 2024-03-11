import { useEffect } from "react";
import Navbar from "./components/Navbar/navBar";
import Hero from "./components/Hero/Hero";
import Quotes from "./components/Quotes/Quotes";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
      <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        <Navbar />
        <Hero/>
        <Quotes />
        <Banner/>
        <Banner2/>
        <Features />
        <Footer />

      </main>
  ) 
}

export default App;
