import { useState } from "react";
import "./PricesPackages.css";
import { Minus, Plus } from "lucide-react";

interface PackageFeature {
  title: string;
  subDetail?: string;
}

interface PackageCardProps {
  title: string;
  priceEur: string;
  priceBgn: string;
  features: PackageFeature[];
  disclaimer: string;
}

function PackageCard({
  title,
  priceEur,
  priceBgn,
  features,
  disclaimer,
}: PackageCardProps) {
  return (
    <div className="package-card">
      <h3 className="package-card-title">{title}</h3>
      <div className="package-card-price">
        <span className="price-eur">{priceEur} €</span>
        <span className="price-sep">или</span>
        <span className="price-bgn">{priceBgn} лв.</span>
      </div>
      <div className="package-card-divider" />
      <ul className="package-features">
        {features.map((feature, index) => (
          <li key={index} className="package-feature">
            <span className="feature-title">{feature.title}</span>
            {feature.subDetail && (
              <span className="feature-subdetail">{feature.subDetail}</span>
            )}
          </li>
        ))}
      </ul>
      <div className="package-disclaimer">{disclaimer}</div>
    </div>
  );
}

const STANDARD_PACKAGE_10_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала - 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню - 10 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки - 10 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите - 100 бр. ханки",
    subDetail:
      "две плата със мини сандвичи и две плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата" },
];

const LUX_PACKAGE_10_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала - 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню - 10 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки - 10 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите - 100 бр. ханки",
    subDetail:
      "две плата със мини сандвичи и две плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата" },
  { title: "Дигитална покана" },
  { title: "Аниматор с тематичен костюм" },
];

const STANDARD_PACKAGE_15_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала - 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню - 15 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки - 15 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите - 150 бр. ханки",
    subDetail:
      "три плата със мини сандвичи и три плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата" },
];

const LUX_PACKAGE_15_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала - 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню - 15 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки - 15 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите - 150 бр. ханки",
    subDetail:
      "три плата със мини сандвичи и три плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата" },
  { title: "Дигитална покана" },
  {
    title: "Аниматор с тематичен костюм и един занимател",
  },
];

const DISCLAIMER =
  "*за всяко следващо дете се заплаща 12.78 € / 25 лв. на куверт (до 2 деца)";

function PricesPackages() {
  const [expanded10, setExpanded10] = useState(true);
  const [expanded15, setExpanded15] = useState(true);

  return (
    <section className="prices-packages-section">
      <div className="prices-packages-container">
        <button
          type="button"
          className="packages-section-header packages-section-header-toggle packages-section-header-toggle--centered"
          onClick={() => setExpanded10(!expanded10)}
          aria-expanded={expanded10}
        >
          <span>Пакети за 10 деца</span>
          {expanded10 ? (
            <Minus
              className="header-toggle-icon header-toggle-icon-minus"
              size={25}
            />
          ) : (
            <Plus className="header-toggle-icon" size={25} />
          )}
        </button>
        <div className={`packages-grid ${!expanded10 ? "collapsed" : ""}`}>
          <PackageCard
            title="Пакет Стандарт"
            priceEur="270"
            priceBgn="528"
            features={STANDARD_PACKAGE_10_FEATURES}
            disclaimer={DISCLAIMER}
          />
          <PackageCard
            title="Пакет Лукс"
            priceEur="330"
            priceBgn="645"
            features={LUX_PACKAGE_10_FEATURES}
            disclaimer={DISCLAIMER}
          />
        </div>

        <button
          type="button"
          className="packages-section-header packages-section-header-toggle"
          onClick={() => setExpanded15(!expanded15)}
          aria-expanded={expanded15}
        >
          <span>Пакети за 15 деца</span>
          {expanded15 ? (
            <Minus
              className="header-toggle-icon header-toggle-icon-minus"
              size={25}
            />
          ) : (
            <Plus className="header-toggle-icon" size={25} />
          )}
        </button>
        <div className={`packages-grid ${!expanded15 ? "collapsed" : ""}`}>
          <PackageCard
            title="Пакет Стандарт"
            priceEur="405"
            priceBgn="792"
            features={STANDARD_PACKAGE_15_FEATURES}
            disclaimer={DISCLAIMER}
          />
          <PackageCard
            title="Пакет Лукс"
            priceEur="495"
            priceBgn="968"
            features={LUX_PACKAGE_15_FEATURES}
            disclaimer={DISCLAIMER}
          />
        </div>
      </div>
    </section>
  );
}

export default PricesPackages;
