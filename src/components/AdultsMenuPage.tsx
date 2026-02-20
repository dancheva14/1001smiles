import "./AdultsMenuPage.css";
import { ChevronDown } from "lucide-react";

interface MenuItem {
  name: string;
  description?: string;
  quantity?: string;
  priceEur: string;
  priceBgn?: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: "Мини кроасани с масло 60гр.",
    quantity: "10 бр.",
    priceEur: "9.20",
    priceBgn: "18 лв.",
  },
  {
    name: "Брускети Капрезе 40гр.",
    description: "песто, чери домат, моцарела",
    quantity: "10 бр.",
    priceEur: "20",
  },
  {
    name: "Мини санвичи пилешко филе 45гр.",
    description: "пилешко филе, крема сирене и макови семки",
    quantity: "10 бр.",
    priceEur: "25",
  },
  {
    name: "Кроасани със шунка, маруля и домат",
    quantity: "10 бр.",
    priceEur: "28",
  },
  {
    name: "Кроасан с шунка и сирене 100 гр.",
    quantity: "1 бр.",
    priceEur: "1.64",
    priceBgn: "3.20 лв.",
  },
  {
    name: "Мини хапки с Филаделфия и сьомга 30 гр.",
    quantity: "20 бр.",
    priceEur: "19.94",
    priceBgn: "39 лв.",
  },
  {
    name: "Мини тортили с комо и топено сирене 30 гр.",
    quantity: "20 бр.",
    priceEur: "19.43",
    priceBgn: "38 лв.",
  },
  {
    name: "Плато с пържени пилешки хапки, моцарелени пръчици и възглавнички от сиренца 600 гр.",
    priceEur: "23.01",
    priceBgn: "45 лв.",
  },
  {
    name: "Пържени картофки 300 гр.",
    priceEur: "6.65",
    priceBgn: "13 лв.",
  },
  {
    name: "Картофени пуканки 200 гр.",
    priceEur: "4.60",
    priceBgn: "9 лв.",
  },
  {
    name: "Картофени усмивки 300 гр.",
    priceEur: "6.65",
    priceBgn: "13 лв.",
  },
  {
    name: "Шишчета с маршмелоу и сезонни плодове",
    quantity: "1 бр.",
    priceEur: "1.53",
    priceBgn: "3 лв.",
  },
  {
    name: "Плато с тарталетки и различни пълнежи",
    quantity: "15 бр.",
    priceEur: "12.78",
    priceBgn: "25 лв.",
  },
  {
    name: "Мъфин различни видове",
    quantity: "1 бр.",
    priceEur: "3.07",
    priceBgn: "6 лв.",
  },
  {
    name: "Ядки 100 гр.",
    description: "кашу, шам фъстък, бадеми",
    priceEur: "3.58",
    priceBgn: "7 лв.",
  },
];

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="adults-menu-item">
      <div className="adults-menu-item-header">
        <div className="adults-menu-item-name">{item.name}</div>
        <div className="adults-menu-item-right-info">
          {item.quantity && (
            <span className="adults-menu-item-quantity">{item.quantity}</span>
          )}
          <div className="adults-menu-item-price">
            <span className="adults-price-eur">{item.priceEur} €</span>
            {item.priceBgn && (
              <>
                <span className="adults-price-sep">/</span>
                <span className="adults-price-bgn">{item.priceBgn}</span>
              </>
            )}
          </div>
        </div>
      </div>
      {item.description && (
        <div className="adults-menu-item-description">{item.description}</div>
      )}
    </div>
  );
}

function AdultsMenuPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <section className="adults-menu-page-section">
      <div className="adults-menu-page-container">
        <div className="adults-menu-content-left">
          <h2 className="adults-menu-heading">Меню възрастни</h2>
          <div className="adults-menu-text-content">
            <p className="adults-menu-paragraph">
              Докато децата се забавляват и играят спокойно в нашия детски
              център, родителите могат да се отпуснат и да се насладят на
              специално подбрано меню, създадено за техния комфорт.
            </p>
            <p className="adults-menu-paragraph">
              Предлагаме разнообразие от топли и студени напитки, свежи десерти
              и вкусни предложения, подходящи както за кратка почивка, така и за
              приятно прекарване на времето, докато наблюдават усмивките на
              своите деца.
            </p>
          </div>
          <button
            type="button"
            className="adults-menu-consultation-btn"
            onClick={scrollToContacts}
          >
            ЗАЯВИ КОНСУЛТАЦИЯ
            <ChevronDown className="adults-menu-btn-icon" size={20} />
          </button>
          <div className="adults-menu-image-container">
            <img
              src="/images/parents.jpeg"
              alt="Родители"
              className="adults-menu-image"
            />
          </div>
        </div>
        <div className="adults-menu-content-right">
          <div className="adults-menu-list">
            {MENU_ITEMS.map((item, index) => (
              <MenuItemCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdultsMenuPage;
