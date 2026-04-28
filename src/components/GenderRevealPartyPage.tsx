import { useState } from "react";
import "./GenderRevealPartyPage.css";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { publicUrl } from "../lib/publicUrl";

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
        <span className="gender-reveal-price-eur">
          {priceEur} € {headerSubtitle}
        </span>
      </div>
      <div className="gender-reveal-pricing-card-divider" />
      {expanded && features && (
        <ul className="gender-reveal-pricing-features">
          {features.map((feature, index) => {
            const details =
              feature.subDetails ??
              (feature.subDetail ? [feature.subDetail] : []);
            return (
              <li key={index} className="gender-reveal-pricing-feature">
                <span className="gender-reveal-feature-title">
                  {feature.title}
                </span>
                {details.length > 0 &&
                  details.map((detail, i) => (
                    <span key={i} className="gender-reveal-feature-subdetail">
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

const GENDER_REVEAL_PACKAGE_FEATURES: PackageFeature[] = [
  {
    title: "Наем зала – 2 часа",
  },
  {
    title: "Сладка обредна погача 1 кг.",
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
              src={publicUrl("images/genderRevealParty.jpg")}
              alt="Парти за разкриване на пола"
              className="gender-reveal-image"
            />
            <img
              src={publicUrl("images/genderReveal.jpg")}
              alt="Парти за разкриване на пола"
              className="gender-reveal-image"
            />
          </div>
          <div className="gender-reveal-additional-pricing">
            <div className="gender-reveal-additional-row">
              <a href="#themes" className="gender-reveal-additional-link">
                Тематична украса за всеки повод
              </a>
              <span className="gender-reveal-additional-price">30 €</span>
            </div>
            <div className="gender-reveal-additional-row">
              <span className="gender-reveal-additional-title">
                Наем на зала (допълнително)
              </span>
              <span className="gender-reveal-additional-price">
                70 €{" "}
                <span className="gender-reveal-additional-subtitle">
                  (за 1 час)
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="gender-reveal-content-right">
          <PricingCard
            title="Пакет Парти за разкриване на пола"
            priceEur="340"
            features={GENDER_REVEAL_PACKAGE_FEATURES}
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
