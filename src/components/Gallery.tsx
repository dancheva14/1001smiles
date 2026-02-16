import { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import "./Gallery.css";

// Примерни снимки - заменете с вашите реални снимки
const galleryImages = [
  {
    id: 1,
    src: "/images/party1.jpg",
    alt: "Рожден ден с торта и балони",
    title: "Рожден Ден",
    description: "Незабравими моменти от детски рождени дни",
  },
  {
    id: 2,
    src: "/images/party2.avif",
    alt: "Рожден ден с много игри и забавления",
    title: "Рожден ден",
    description: "Рожден ден с много игри и забавления",
  },
  {
    id: 3,
    src: "/images/party3.jpg",
    alt: "Кетъринг за родители",
    title: "Кетъринг за родители",
    description: "Вълнуващи моменти споделени с близки",
  },
  {
    id: 4,
    src: "/images/party4.jpg",
    alt: "Разкриване на пола с балони",
    title: "Разкриване на Пола",
    description: "Вълнуващи моменти споделени с близки",
  },
  {
    id: 5,
    src: "/images/party5.png",
    alt: "Специално парти събитие",
    title: "Специални Събития",
    description: "Уникални моменти за всеки повод",
  },
  {
    id: 6,
    src: "/images/party6.jpeg",
    alt: "Разкриване на пола с балони",
    title: "Разкриване на Пола",
    description: "Вълнуващи моменти споделени с близки",
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Анимация за слайдовете
  const slideAnimation = useSpring({
    opacity: 1,
    transform: `translateX(0%)`,
    from: {
      opacity: 0,
      transform:
        direction === "next" ? "translateX(100%)" : "translateX(-100%)",
    },
    config: config.gentle,
  });

  // Анимация за заглавието
  const titleAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
    config: config.gentle,
  });

  // Автоматично превъртане
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000); // Превърта на всеки 5 секунди

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-content">
        <h2 className="gallery-title">Нашата Галерия</h2>
        <p className="gallery-subtitle">
          Моменти от празниците, които сме организирали
        </p>

        <div className="slideshow-container">
          {/* Главен слайд */}
          <animated.div style={slideAnimation} className="slide-main">
            <div className="slide-image-wrapper">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="slide-image"
                onError={(e) => {
                  // Placeholder ако снимката не се зареди
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23999'%3E" +
                    currentImage.title +
                    "%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className="slide-overlay">
                <animated.div style={titleAnimation} className="slide-info">
                  <h3 className="slide-title">{currentImage.title}</h3>
                  <p className="slide-description">
                    {currentImage.description}
                  </p>
                </animated.div>
              </div>
            </div>
          </animated.div>

          {/* Контроли */}
          <div className="slide-controls">
            <button
              onClick={goToPrev}
              className="slide-button slide-button-prev"
              aria-label="Предишна снимка"
            >
              <ChevronLeft className="icon" />
            </button>

            <button
              onClick={goToNext}
              className="slide-button slide-button-next"
              aria-label="Следваща снимка"
            >
              <ChevronRight className="icon" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="slide-button slide-button-play"
              aria-label={isPlaying ? "Пауза" : "Пусни"}
            >
              {isPlaying ? (
                <Pause className="icon" />
              ) : (
                <Play className="icon" />
              )}
            </button>
          </div>

          {/* Индикатори */}
          <div className="slide-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`slide-indicator ${index === currentIndex ? "active" : ""}`}
                aria-label={`Отиди на слайд ${index + 1}`}
              />
            ))}
          </div>

          {/* Счетчик */}
          <div className="slide-counter">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="thumbnails-container">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="thumbnail-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%23e0e0e0'/%3E%3C/svg%3E";
                }}
              />
              <div className="thumbnail-overlay">
                <span className="thumbnail-title">{image.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
