import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import {
  Sparkles,
  Home,
  PartyPopper,
  Gift,
  Camera,
  Heart,
  MessageCircle,
} from "lucide-react";

const PRICES_DROPDOWN_ITEMS = [
  { label: "Рожден ден/имен ден", href: "#prices-birthday" },
  { label: "Погача", href: "#prices-pogacha" },
  { label: "Парти за разкриване на пола", href: "#prices-gender-reveal" },
  { label: "Кръщене", href: "#prices-christening" },
  { label: "Меню възрастни", href: "#prices-adults" },
  { label: "Допълнителни услуги", href: "#prices-extras" },
];

const SCROLL_THRESHOLD = 60;
const SCROLL_DELTA = 8;

function Navbar() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [pricesDropdownOpen, setPricesDropdownOpen] = useState(false);
  const [scrollHidden, setScrollHidden] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        pricesDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setPricesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pricesDropdownOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    // Check initial hash on mount
    setCurrentHash(window.location.hash);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y <= SCROLL_THRESHOLD) {
        setScrollHidden(false);
      } else if (y > lastScrollY.current + SCROLL_DELTA) {
        setScrollHidden(true);
      } else if (y < lastScrollY.current - SCROLL_DELTA) {
        setScrollHidden(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (hash: string) => {
    // If no hash and checking for home, or hash matches
    if (hash === "" && currentHash === "") return true;
    return currentHash === hash;
  };

  return (
    <nav className={`navbar ${scrollHidden ? "navbar--scroll-hidden" : ""}`}>
      <div className="navbar-brand">
        <a
          href="#"
          className="navbar-brand-link"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "";
            setCurrentHash("");
          }}
        >
          <Sparkles className="navbar-brand-icon" size={28} />
          <h1>1001 усмивки</h1>
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="#begginning"
            className={`nav-link ${isActive("") || isActive("#begginning") ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "";
              setCurrentHash("");
            }}
          >
            <Home className="nav-link-icon" size={18} />
            Начало
          </a>
        </li>
        {/* <li className="nav-item">
          <a
            href="#events"
            className={`nav-link ${isActive("#events") ? "active" : ""}`}
          >
            <PartyPopper className="nav-link-icon" size={18} />
            Мероприятия
          </a>
        </li> */}
        <li className="nav-item">
          <a
            href="#zala"
            className={`nav-link ${isActive("#zala") ? "active" : ""}`}
          >
            <PartyPopper className="nav-link-icon" size={18} />
            Залата
          </a>
        </li>
        <li
          ref={dropdownRef}
          className="nav-item nav-item-dropdown"
          onMouseEnter={() => setPricesDropdownOpen(true)}
          onMouseLeave={() => setPricesDropdownOpen(false)}
        >
          <span
            className={`nav-link nav-link-dropdown ${currentHash?.startsWith("#prices") ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setPricesDropdownOpen((prev) => !prev);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setPricesDropdownOpen((prev) => !prev);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={pricesDropdownOpen}
            aria-haspopup="true"
          >
            <Gift className="nav-link-icon" size={18} />
            Цени и пакети
          </span>
          {pricesDropdownOpen && (
            <ul className="dropdown-menu">
              {PRICES_DROPDOWN_ITEMS.map((item) => (
                <li key={item.href} className="dropdown-item">
                  <a
                    href={item.href}
                    className="dropdown-link"
                    onClick={() => {
                      setCurrentHash(item.href);
                      setPricesDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a
            href="#gallery"
            className={`nav-link ${isActive("#gallery") ? "active" : ""}`}
          >
            <Camera className="nav-link-icon" size={18} />
            Галерия
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about-us"
            className={`nav-link ${isActive("#about-us") ? "active" : ""}`}
          >
            <Heart className="nav-link-icon" size={18} />
            За нас
          </a>
        </li>
        <li className="nav-item nav-item-cta">
          <a
            href="#contacts"
            className={`nav-link nav-cta-btn ${isActive("#contacts") ? "active" : ""}`}
          >
            <MessageCircle className="nav-cta-icon" size={15} />
            Свържете се с нас
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
