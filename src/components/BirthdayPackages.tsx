import { useState } from "react";
import "./PricesPackages.css";

interface PackageFeature {
  title: string;
  subDetail?: string;
  subDetails?: string[];
  bold?: boolean;
  /** If set, the title is rendered as a link to this hash (e.g. "#themes") */
  linkHash?: string;
}

interface PackageCardProps {
  name: string;
  priceEur: string;
  features: PackageFeature[];
  disclaimer: string;
  featured?: boolean;
}

function PackageCard({
  name,
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
        <div className="pkg-name">
          {name} - {priceEur} €
        </div>
        <hr className="pkg-divider" />
        <ul className="pkg-features">
          {features.map((feature, index) => {
            const details =
              feature.subDetails ??
              (feature.subDetail ? [feature.subDetail] : []);
            return (
              <li key={index} className={feature.bold ? "bold-item" : ""}>
                <span className="check">{feature.bold ? "✦" : "●"}</span>
                <div>
                  {feature.linkHash ? (
                    <a href={feature.linkHash} className="pkg-feature-link">
                      {feature.title}
                    </a>
                  ) : (
                    feature.title
                  )}
                  {details.length > 0 &&
                    details.map((detail, i) => (
                      <span key={i} className="feat-detail">
                        {detail}
                      </span>
                    ))}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="note-box">{disclaimer}</div>
      </div>
    </div>
  );
}

const STANDARD_PACKAGE_10_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа и 30 минути",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 10 бр.",
    subDetails: [
      "Избор между пица или мини сандвичи с пуешко филе и гауда",
      "Свежи зеленчукови пръчици (морков и краставица)",
      "Плато със сезонни плодове",
      "Домашно приготвени сладки (без добавена захар)",
    ],
  },
  {
    title: "Напитки – 10 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите",
    subDetails: [
      "30 бр. домашни мини кюфтенца",
      "30 бр. солени мини палачинки с различни вкусове",
      "1 плато брускети с разнообразни вкусове",
      "1 плато сладки тарталети",
    ],
  },
  {
    title:
      "Включени 2 аниматора (непрофесионални), които се грижат за игрите, организацията и доброто настроение на децата",
    bold: true,
  },
  {
    title: "Избор на украса от нашите предложения",
    bold: true,
    linkHash: "#themes",
  },
];

const LUX_PACKAGE_10_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа и 30 минути",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 10 бр.",
    subDetails: [
      "избор между пица или мини сандвичи с пуешко филе и гауда",
      "Свежи зеленчукови пръчици (морков и краставица)",
      "Плато със сезонни плодове",
      "Домашно приготвени сладки (без добавена захар)",
    ],
  },
  {
    title: "Напитки – 10 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите",
    subDetails: [
      "30 бр. домашни мини кюфтенца",
      "30 бр. солени мини палачинки с различни вкусове",
      "1 плато брускети с разнообразни вкусове",
      "1 плато сладки тарталети",
    ],
  },
  {
    title:
      "Включени 2 аниматора (непрофесионални), които се грижат за игрите, организацията и доброто настроение на децата",
    bold: true,
  },
  {
    title: "Избор на украса от нашите предложения",
    bold: true,
    linkHash: "#themes",
  },
  { title: "Дигитална покана", bold: true },
  { title: "Още нещо трябва да измислим", bold: true },
];

const STANDARD_PACKAGE_20_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа и 30 минути",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 20 бр.",
    subDetails: [
      "избор между пица или мини сандвичи с пуешко филе и гауда",
      "Свежи зеленчукови пръчици (морков и краставица)",
      "Плато със сезонни плодове",
      "Домашно приготвени сладки (без добавена захар)",
    ],
  },
  {
    title: "Напитки – 20 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите",
    subDetails: [
      "60 бр. домашни мини кюфтенца",
      "60 бр. солени мини палачинки с различни вкусове",
      "2 плато брускети с разнообразни вкусове",
      "2 плато сладки тарталети",
    ],
  },
  {
    title:
      "Включени 2 аниматора (непрофесионални), които се грижат за игрите, организацията и доброто настроение на децата",
    bold: true,
  },
  {
    title: "Избор на украса от нашите предложения",
    bold: true,
    linkHash: "#themes",
  },
];

const LUX_PACKAGE_20_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа и 30 минути",
    subDetail: "не се допускат външни лица",
  },
  {
    title: "Детско меню – 20 бр.",
    subDetails: [
      "избор между пица или мини сандвичи с пуешко филе и гауда",
      "Свежи зеленчукови пръчици (морков и краставица)",
      "Плато със сезонни плодове",
      "Домашно приготвени сладки (без добавена захар)",
    ],
  },
  {
    title: "Напитки – 20 бр.",
    subDetail: "изворна вода или сокче",
  },
  {
    title: "Кетъринг меню за родителите",
    subDetails: [
      "60 бр. домашни мини кюфтенца",
      "60 бр. солени мини палачинки с различни вкусове",
      "2 плато брускети с разнообразни вкусове",
      "2 плато сладки тарталети",
    ],
  },
  {
    title:
      "Включени 2 аниматора (непрофесионални), които се грижат за игрите, организацията и доброто настроение на децата",
    bold: true,
  },
  {
    title: "Избор на украса от нашите предложения",
    bold: true,
    linkHash: "#themes",
  },
  { title: "Дигитална покана", bold: true },
  { title: "Още нещо трябва да измислим", bold: true },
];

const DISCLAIMER = "* за всяко следващо дете се заплаща 14 € ";

type PackageSize = "10" | "20";

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
              ✨ Рожденият ден е едно от най-специалните и вълнуващи
              преживявания в живота на детето. В &quot;Детски център 1001
              усмивки&quot; разбираме важността на всеки такъв момент и се
              грижим за всеки детайл, за да създадем незабравима приказна
              атмосфера за вашето дете и близки.
            </p>
            <p>
              Превърнете рождения ден в истинска приказка, изпълнена със смях,
              игри и сладки изкушения. Ние създаваме уютна атмосфера, вкусна
              храна и весело настроение, за да може празникът да остане скъп
              спомен както за децата, така и за родителите. ✨
            </p>
            <p>От нас – организацията. От вас – само забавлението! 💛</p>
            <p>
              🎁 Подарете празник като от приказките! Местата ни се запълват
              бързо, защото всяко тържество при нас е специално и организирано с
              внимание към детайла. ✨ Запазете своята дата още днес и подарете
              на детето си вълшебен спомен, който ще разказва с усмивка дълго
              време! Очакваме ви с нетърпение! 🎈
            </p>
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
                <span className="quick-price">340 €</span>
              </div>
            </div>
            <hr className="divider" />
            <ul className="feature-list">
              <li>
                <span className="dot" />
                <div>
                  Наем зала – 2 часа и 30 минути
                  <span className="feat-sub">не се допускат външни лица</span>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  Детско меню – 10 бр.
                  <span className="feat-sub">
                    Пица или мини сандвичи с пуешко филе и гауда
                  </span>
                  <span className="feat-sub">
                    Свежи зеленчукови пръчици (морков и краставица)
                  </span>
                  <span className="feat-sub">Плато със сезонни плодове</span>
                  <span className="feat-sub">
                    Домашно приготвени сладки (без добавена захар)
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
                  Кетъринг меню за родителите
                  <span className="feat-sub">30 бр. домашни мини кюфтенца</span>
                  <span className="feat-sub">
                    30 бр. солени мини палачинки с различни вкусове
                  </span>
                  <span className="feat-sub">
                    1 плато брускети с разнообразни вкусове
                  </span>
                  <span className="feat-sub">1 плато сладки тарталети</span>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  <strong>
                    Включени 2 аниматора (непрофесионални), които се грижат за
                    игрите, организацията и доброто настроение на децата
                  </strong>
                </div>
              </li>
              <li>
                <span className="dot" />
                <div>
                  <a href="#themes" className="prices-hero-feature-link">
                    <strong>Избор на украса от нашите предложения</strong>
                  </a>
                </div>
              </li>
            </ul>
            <div className="rental-row">
              <div className="rental-label">Наем на зала (допълнително)</div>
              <div className="rental-price">
                70 € <span className="rental-price-small">(за 1 час)</span>
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
              className={`tab-btn ${activeTab === "20" ? "active" : ""}`}
              onClick={() => setActiveTab("20")}
            >
              Пакети за 20 деца
            </button>
          </div>
        </div>

        {activeTab === "10" && (
          <div className="pkg-grid">
            <PackageCard
              name="Пакет Стандарт"
              priceEur="340"
              features={STANDARD_PACKAGE_10_FEATURES}
              disclaimer={DISCLAIMER}
            />
            <PackageCard
              name="Пакет Лукс"
              priceEur="390"
              features={LUX_PACKAGE_10_FEATURES}
              disclaimer={DISCLAIMER}
              featured
            />
          </div>
        )}

        {activeTab === "20" && (
          <div className="pkg-grid">
            <PackageCard
              name="Пакет Стандарт"
              priceEur="510"
              features={STANDARD_PACKAGE_20_FEATURES}
              disclaimer={DISCLAIMER}
            />
            <PackageCard
              name="Пакет Лукс"
              priceEur="495"
              features={LUX_PACKAGE_20_FEATURES}
              disclaimer={DISCLAIMER}
              featured
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default BirthdayPackages;
