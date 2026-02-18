import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import PricesPackages from "./components/PricesPackages";

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-content">
        {(currentHash === "" || currentHash === "#begginning") && <Home />}
        {currentHash === "#events" && <Home />}
        {(currentHash === "#prices-birthday" || currentHash === "#prices-nameday") && (
          <PricesPackages />
        )}
        {currentHash.startsWith("#prices-") &&
          currentHash !== "#prices-birthday" &&
          currentHash !== "#prices-nameday" && <Home />}
        {currentHash === "#gallery" && <Gallery />}
        {currentHash === "#about-us" && <AboutUs />}
        {currentHash === "#contacts" && <Contacts />}
      </main>
    </>
  );
}

export default App;
