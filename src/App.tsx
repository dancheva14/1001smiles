import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import PricesPackages from "./components/PricesPackages";
import PogachaPage from "./components/PogachaPage";
import AdultsMenuPage from "./components/AdultsMenuPage";
import GenderRevealPartyPage from "./components/GenderRevealPartyPage";
import ChristeningPage from "./components/ChristeningPage";
import ExtrasPage from "./components/ExtrasPage";
import Footer from "./components/Footer";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const handleHashChange = () => {
      scrollToTop();
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    scrollToTop();
    const t = setTimeout(scrollToTop, 0);
    const t2 = setTimeout(scrollToTop, 100);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [currentHash]);

  return (
    <>
      <Navbar />
      <main className="main-content">
        {(currentHash === "" || currentHash === "#begginning") && <Home />}
        {currentHash === "#events" && <Home />}
        {(currentHash === "#prices-birthday" ||
          currentHash === "#prices-nameday") && <PricesPackages />}
        {currentHash === "#prices-pogacha" && <PogachaPage />}
        {currentHash === "#prices-adults" && <AdultsMenuPage />}
        {currentHash === "#prices-gender-reveal" && <GenderRevealPartyPage />}
        {currentHash === "#prices-christening" && <ChristeningPage />}
        {currentHash === "#prices-extras" && <ExtrasPage />}
        {currentHash.startsWith("#prices-") &&
          currentHash !== "#prices-birthday" &&
          currentHash !== "#prices-nameday" &&
          currentHash !== "#prices-pogacha" &&
          currentHash !== "#prices-adults" &&
          currentHash !== "#prices-gender-reveal" &&
          currentHash !== "#prices-christening" &&
          currentHash !== "#prices-extras" && <Home />}
        {currentHash === "#gallery" && <Gallery />}
        {currentHash === "#about-us" && <AboutUs />}
        {currentHash === "#contacts" && <Contacts />}
      </main>
      <Footer />
    </>
  );
}

export default App;
