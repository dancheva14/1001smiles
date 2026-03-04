import { useState } from "react";
import "./PogachaPage.css";
import { Minus, Plus, ChevronDown } from "lucide-react";

interface PackageFeature {
  title: string;
  subDetail?: string;
  subDetails?: string[];
}

interface PricingCardProps {
  title: string;
  priceEur: string;
  features?: PackageFeature[];
  headerSubtitle?: string;
}

function PricingCard({
  title,
  priceEur,
  features,
  headerSubtitle,
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
        <span className="pogacha-price-eur">
          {priceEur} € {headerSubtitle}
        </span>
      </div>
      <div className="pogacha-pricing-card-divider" />
      {expanded && features && (
        <ul className="pogacha-pricing-features">
          {features.map((feature, index) => {
            const details =
              feature.subDetails ??
              (feature.subDetail ? [feature.subDetail] : []);
            return (
              <li key={index} className="pogacha-pricing-feature">
                <span className="pogacha-feature-title">{feature.title}</span>
                {details.length > 0 &&
                  details.map((detail, i) => (
                    <span key={i} className="pogacha-feature-subdetail">
                      {detail}
                    </span>
                  ))}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const POGACHA_PACKAGE_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 3 часа",
  },
  {
    title: "Тематична декорация",
    subDetail: "Винил, балонена арка, масичка за торта",
  },
  {
    title: "🍞🍰🎂 Сладка обредна погача 1 кг.",
  },
  {
    title: "🍫🍓🍬 Селекция от 40 бр. сладки изкушения:",
    subDetails: [
      "Брауни хапка с маскарпоне, сладко от горски плодове и филиран шоколад 10 бр.",
      "Плодови тарталетки 10 бр.",
      "Шоколадов шот с ягоди и маскарпоне 10 бр.",
      "Ръчно приготвени шоколадови бонбони 10 бр.",
    ],
  },
  {
    title: "🍞🍰🎂 Сладка обредна погача 1 кг.",
  },
  {
    title: "🍢🍖🧀 Селекция от 40 бр. солени коктейлни хапки:",
    subDetails: [
      "Канапе с пушено свинско бонфиле 10 бр.",
      "Канапе от немски фитнес бред с чедър и ементал 10 бр.",
      "Тарталетка с млечен мус и сирене Рокфор 10 бр.",
      "Тартар с пушена сьомга 10 бр.",
    ],
  },
  {
    title: "🥐🍏🍞 Печива:",
    subDetails: [
      "Прясно изпечени мини розички с ябълка и пудра захар 10 бр.",
      "Прясно изпечени мини розички със сирене 10 бр.",
      "Прясно изпечени мини кроасанчета с шоколад 10 бр.",
      "Прясно изпечени мини кроасанчета със стафиди 10 бр.",
    ],
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
            priceEur="340 €"
            features={POGACHA_PACKAGE_FEATURES}
          />
          <PricingCard
            title="Наем на зала (допълнително)"
            priceEur="70"
            headerSubtitle="(за 1 час)"
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
