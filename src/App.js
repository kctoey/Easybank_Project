import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import Article from "./components/Article";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="relative w-screen h-screen">
      <div className=" h-screen  bg-[#FAFAFA] ">
        <Navbar />
        <Hero />
      </div>
      <Detail />
      <Article showButton={showButton} scrollToTop={scrollToTop} />

      <Footer />
    </div>
  );
}

export default App;
