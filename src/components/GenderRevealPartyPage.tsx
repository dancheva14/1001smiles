import { useState } from "react";
import "./GenderRevealPartyPage.css";
import { Minus, Plus, ChevronDown } from "lucide-react";

interface PackageFeature {
  title: string;
  subDetail?: string;
}

interface PricingCardProps {
  title: string;
  priceEur: string;
  priceBgn: string;
  features?: PackageFeature[];
}

function PricingCard({
  title,
  priceEur,
  priceBgn,
  features,
}: PricingCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="gender-reveal-pricing-card">
      <div className="gender-reveal-pricing-card-header">
        <h3 className="gender-reveal-pricing-card-title">{title}</h3>
        <button
          type="button"
          className="gender-reveal-pricing-card-toggle"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Свий" : "Разгъни"}
        >
          {expanded ? (
            <Minus
              className="gender-reveal-toggle-icon gender-reveal-toggle-icon-minus"
              size={16}
            />
          ) : (
            <Plus className="gender-reveal-toggle-icon" size={16} />
          )}
        </button>
      </div>
      <div className="gender-reveal-pricing-card-price">
        <span className="gender-reveal-price-eur">{priceEur} €</span>
        <span className="gender-reveal-price-bgn">{priceBgn}</span>
      </div>
      <div className="gender-reveal-pricing-card-divider" />
      {expanded && features && (
        <ul className="gender-reveal-pricing-features">
          {features.map((feature, index) => (
            <li key={index} className="gender-reveal-pricing-feature">
              <span className="gender-reveal-feature-title">
                {feature.title}
              </span>
              {feature.subDetail && (
                <span className="gender-reveal-feature-subdetail">
                  {feature.subDetail}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const GENDER_REVEAL_PACKAGE_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа",
  },
  {
    title: "Тематична декорация",
    subDetail: "Винил, балонена арка, масичка за торта",
  },
  {
    title: "Козуначена пита",
  },
  {
    title: "Кетъринг меню - 50 бр. ханки",
    subDetail: "две плата със солени или сладки хапки",
  },
  {
    title: "Кана домашна лимонада",
  },
];

function GenderRevealPartyPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <section className="gender-reveal-page-section">
      <div className="gender-reveal-page-container">
        <div className="gender-reveal-content-left">
          <h2 className="gender-reveal-heading">
            Защо да ни доверите организацията на партито за разкриване на пола?
          </h2>
          <div className="gender-reveal-text-content">
            <p className="gender-reveal-paragraph">
              Партито за разкриване на пола е един от най-вълнуващите моменти в
              очакването на бебе. В "Детски център 1001 усмивки" разбираме
              важността на този момент и обръщаме внимание на всеки детайл, за
              да създадем уютна и приказна атмосфера за вас и вашите близки.
            </p>
          </div>

          <div className="gender-reveal-image-container">
            <img
              src="/images/genderRevealParty.jpg"
              alt="Парти за разкриване на пола"
              className="gender-reveal-image"
            />
            <img
              src="/images/genderReveal.jpg"
              alt="Парти за разкриване на пола"
              className="gender-reveal-image"
            />
          </div>
        </div>
        <div className="gender-reveal-content-right">
          <PricingCard
            title="Пакет Парти за разкриване на пола"
            priceEur="250.60"
            priceBgn="490 лв."
            features={GENDER_REVEAL_PACKAGE_FEATURES}
          />
          <PricingCard
            title="Наем на зала"
            priceEur="61.36"
            priceBgn="120 лв. (за 1 час)"
          />
          <button
            type="button"
            className="gender-reveal-consultation-btn"
            onClick={scrollToContacts}
          >
            ЗАЯВИ КОНСУЛТАЦИЯ
            <ChevronDown className="gender-reveal-btn-icon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GenderRevealPartyPage;
