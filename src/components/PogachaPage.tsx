import { useState } from "react";
import "./PogachaPage.css";
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
    <div className="pogacha-pricing-card">
      <div className="pogacha-pricing-card-header">
        <h3 className="pogacha-pricing-card-title">{title}</h3>
        <button
          type="button"
          className="pogacha-pricing-card-toggle"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Свий" : "Разгъни"}
        >
          {expanded ? (
            <Minus
              className="pogacha-toggle-icon pogacha-toggle-icon-minus"
              size={16}
            />
          ) : (
            <Plus className="pogacha-toggle-icon" size={16} />
          )}
        </button>
      </div>
      <div className="pogacha-pricing-card-price">
        <span className="pogacha-price-eur">{priceEur} €</span>
        <span className="pogacha-price-bgn">{priceBgn}</span>
      </div>
      <div className="pogacha-pricing-card-divider" />
      {expanded && features && (
        <ul className="pogacha-pricing-features">
          {features.map((feature, index) => (
            <li key={index} className="pogacha-pricing-feature">
              <span className="pogacha-feature-title">{feature.title}</span>
              {feature.subDetail && (
                <span className="pogacha-feature-subdetail">
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

const POGACHA_PACKAGE_FEATURES: PackageFeature[] = [
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

function PogachaPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <section className="pogacha-page-section">
      <div className="pogacha-page-container">
        <div className="pogacha-content-left">
          <h2 className="pogacha-heading">
            Защо да ни доверите организацията на погачата на вашето дете?
          </h2>
          <div className="pogacha-text-content">
            <p className="pogacha-paragraph">
              Погачата е едно от най-нежните и трогателни семейни празненства,
              което отбелязва пристигането на нов член в семейството. В "Детски
              център 1001 усмивки" разбираме важността на този момент и обръщаме
              внимание на всеки детайл, за да създадем уютна и приказна
              атмосфера за вашето бебе и вашите близки. От нас организацията от
              вас само забавлението.
            </p>
          </div>
          <div className="pogacha-text-image-section">
            <p className="pogacha-paragraph pogacha-paragraph-inline">
              Ние предлагаме пълна организация на празненството, като се грижим
              за всички детайли – от украса и тематични акценти до музика,
              забавления и фотография. Работим с опитни партньори, които
              споделят нашата визия за създаване на незабравими моменти.
            </p>

            <div className="pogacha-image-container">
              <img
                src="/images/pogacha.jpeg"
                alt="Погача"
                className="pogacha-image"
              />
            </div>
          </div>
        </div>
        <div className="pogacha-content-right">
          <PricingCard
            title="Пакет Погача"
            priceEur="250.60"
            priceBgn="490 лв."
            features={POGACHA_PACKAGE_FEATURES}
          />
          <PricingCard
            title="Наем на зала"
            priceEur="61.36"
            priceBgn="120 лв. (за 1 час)"
          />
          <button
            type="button"
            className="pogacha-consultation-btn"
            onClick={scrollToContacts}
          >
            ЗАЯВИ КОНСУЛТАЦИЯ
            <ChevronDown className="pogacha-btn-icon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PogachaPage;
