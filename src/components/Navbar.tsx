import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    // Check initial hash on mount
    setCurrentHash(window.location.hash);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (hash: string) => {
    // If no hash and checking for home, or hash matches
    if (hash === "" && currentHash === "") return true;
    return currentHash === hash;
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>1001 усмивки</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="#begginning"
            className={`nav-link ${isActive("") || isActive("#begginning") ? "active" : ""}`}
            onClick={() => {
              window.location.hash = "";
              setCurrentHash("");
            }}
          >
            Начало
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#events"
            className={`nav-link ${isActive("#events") ? "active" : ""}`}
          >
            Мероприятия
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#gallery"
            className={`nav-link ${isActive("#gallery") ? "active" : ""}`}
          >
            Галерия
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about-us"
            className={`nav-link ${isActive("#about-us") ? "active" : ""}`}
          >
            За нас
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contacts"
            className={`nav-link ${isActive("#contacts") ? "active" : ""}`}
          >
            Свържете се с нас
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
