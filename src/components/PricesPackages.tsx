import { useState } from "react";
import "./PricesPackages.css";

interface PackageFeature {
  title: string;
  subDetail?: string;
  bold?: boolean;
}

interface PackageCardProps {
  name: string;
  priceBgn: string;
  priceEur: string;
  features: PackageFeature[];
  disclaimer: string;
  featured?: boolean;
}

function PackageCard({
  name,
  priceBgn,
  priceEur,
  features,
  disclaimer,
  featured = false,
}: PackageCardProps) {
  return (
    <div className={`pkg-card ${featured ? "featured" : ""}`}>
      <div className="pkg-card-top-bar" />
      {featured && <div className="featured-badge">⭐ Препоръчан</div>}
      <div className="pkg-card-body">
        <div className="pkg-name">{name}</div>
        <div className="pkg-price">
          {priceBgn} лв. <span className="eur">/ {priceEur} €</span>
        </div>
        <hr className="pkg-divider" />
        <ul className="pkg-features">
          {features.map((feature, index) => (
            <li key={index} className={feature.bold ? "bold-item" : ""}>
              <span className="check">{feature.bold ? "✦" : "●"}</span>
              <div>
                {feature.title}
                {feature.subDetail && (
                  <span className="feat-detail">{feature.subDetail}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="note-box">{disclaimer}</div>
      </div>
    </div>
  );
}

const STANDARD_PACKAGE_10_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 10 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки – 10 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите – 100 бр. ханки",
    subDetail:
      "две плата със мини сандвичи и две плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата", bold: true },
];

const LUX_PACKAGE_10_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 10 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки – 10 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите – 100 бр. ханки",
    subDetail:
      "две плата със мини сандвичи и две плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата", bold: true },
  { title: "Дигитална покана", bold: true },
  { title: "Аниматор с тематичен костюм", bold: true },
];

const STANDARD_PACKAGE_15_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 15 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки – 15 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите – 150 бр. ханки",
    subDetail:
      "три плата със мини сандвичи и три плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата", bold: true },
];

const LUX_PACKAGE_15_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 15 бр.",
    subDetail:
      "избор между пица Маргарита, пилешки хапки с картофки или кроасан",
  },
  {
    title: "Напитки – 15 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите – 150 бр. ханки",
    subDetail:
      "три плата със мини сандвичи и три плата със пилешки хапки, моцарелки и сиренца",
  },
  { title: "Включени разядки/гризинки за децата", bold: true },
  { title: "Дигитална покана", bold: true },
  {
    title: "Аниматор с тематичен костюм и един занимател",
    bold: true,
  },
];

const DISCLAIMER =
  "* за всяко следващо дете се заплаща 12.78 € / 25 лв. на куверт (до 2 деца)";

type PackageSize = "10" | "15";

function PricesPackages() {
  const [activeTab, setActiveTab] = useState<PackageSize>("10");

  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <div className="prices-page-bg">
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="page-title">
            Защо да ни доверите
            <br />
            организацията на рождения
            <br />
            ден на вашето дете?
          </h1>
          <div className="why-box">
            <p>
              Рожденият ден е едно от най-специалните и вълнуващи преживявания в
              живота на детето. В &quot;Детски център 1001 усмивки&quot;
              разбираме важността на всеки такъв момент и се грижим за всеки
              детайл, за да създадем незабравима приказна атмосфера за вашето
              дете и близки.
            </p>
            <p>
              Ние предлагаме пълна организация на празненството – от тематична
              украса, кетъринг и аниматор, до музика и фотография. Работим с
              опитни партньори, за да осигурим неповторимо изживяване.
            </p>
            <p>От нас – организацията. От вас – само забавлението!</p>
          </div>
        </div>

        <div className="hero-right">
          <div className="pricing-panel">
            <div className="pricing-panel-header">
              <div className="pricing-hint">Най-популярен пакет</div>
              <div className="pricing-panel-title-row">
                <span className="pricing-panel-title">
                  Пакет Стандарт – 10 деца
                </span>
                <span className="quick-price">
                  270 € <span>/ 528 лв.</span>
                </span>
              </div>
            </div>
            <hr className="divider" />
            <ul className="feature-list">
              <li>
                <span className="dot" />
                <div>
                  Наем зала – 2 часа
                  <span className="feat-sub">не се допускат външни лица</span>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  Детско меню – 10 бр.
                  <span className="feat-sub">
                    пица Маргарита, пилешки хапки с картофки или кроасан
                  </span>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  Напитки – 10 бр.
                  <span className="feat-sub">изворна вода или сокче</span>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  Кетъринг меню за родителите – 100 бр. ханки
                  <span className="feat-sub">
                    мини сандвичи, пилешки хапки, моцарелки и сиренца
                  </span>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  <strong>Включени разядки/гризинки за децата</strong>
                </div>
              </li>
            </ul>
            <div className="rental-row">
              <div className="rental-label">Наем на зала (допълнително)</div>
              <div className="rental-price">
                61.36 € / 120 лв.{" "}
                <span className="rental-price-small">(за 1 час)</span>
              </div>
            </div>
            <button
              type="button"
              className="cta-btn"
              onClick={scrollToContacts}
            >
              ЗАЯВИ КОНСУЛТАЦИЯ ›
            </button>
          </div>
        </div>
      </section>

      <section className="packages-section">
        <div className="packages-header">
          <h2>
            Изберете вашия <span>пакет</span>
          </h2>
          <p>Сравнете нашите пакети и изберете най-подходящия за вашето дете</p>
        </div>

        <div className="tabs-wrapper">
          <div className="tabs">
            <button
              type="button"
              className={`tab-btn ${activeTab === "10" ? "active" : ""}`}
              onClick={() => setActiveTab("10")}
            >
              Пакети за 10 деца
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "15" ? "active" : ""}`}
              onClick={() => setActiveTab("15")}
            >
              Пакети за 15 деца
            </button>
          </div>
        </div>

        {activeTab === "10" && (
          <div className="pkg-grid">
            <PackageCard
              name="Пакет Стандарт"
              priceBgn="528"
              priceEur="270"
              features={STANDARD_PACKAGE_10_FEATURES}
              disclaimer={DISCLAIMER}
            />
            <PackageCard
              name="Пакет Лукс"
              priceBgn="645"
              priceEur="330"
              features={LUX_PACKAGE_10_FEATURES}
              disclaimer={DISCLAIMER}
              featured
            />
          </div>
        )}

        {activeTab === "15" && (
          <div className="pkg-grid">
            <PackageCard
              name="Пакет Стандарт"
              priceBgn="792"
              priceEur="405"
              features={STANDARD_PACKAGE_15_FEATURES}
              disclaimer={DISCLAIMER}
            />
            <PackageCard
              name="Пакет Лукс"
              priceBgn="968"
              priceEur="495"
              features={LUX_PACKAGE_15_FEATURES}
              disclaimer={DISCLAIMER}
              featured
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default PricesPackages;
