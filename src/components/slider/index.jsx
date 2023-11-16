import React from "react";
import styles from "./styles.module.css";
import { slides, slidesMin } from "./pathImages";

const Slider = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <div style={{ position: "relative" }}>
      <section className={styles.containerSlide}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{ transform: `translateX(${position}px)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.item} ${
                active === index ? styles.slideActive : styles.slideItem
              }`}
            >
              <img src={slide.text} alt="Slide" />
            </div>
          ))}
        </div>

        <nav className={styles.nav}>
          <button onClick={slidePrev}>&lt;</button>
          <button onClick={slideNext}>&gt;</button>
        </nav>
      </section>
      {/* Miniaturas dos slides */}
      <div className={styles.thumbnailContainer}>
        {slidesMin.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.thumbnail} ${
              active === index ? styles.thumbnailActive : styles.thumbnailItem
            }`}
            onClick={() => setActive(index)}
          >
            <img src={slide.text} alt="Slide" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
