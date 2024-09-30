import { useState, useEffect } from "react";
import slider from "../src/data";
import Navbar from "./Navbar";

const Slider = () => {
  const [slides, setSlides] = useState(slider);
  const [slideCurrentIndex, setSlideCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);

  function handleDropDown() {
    setIsDropDownMenu(!isDropDownMenu);
  }

  function nextSlide() {
    setSlideCurrentIndex(
      slideCurrentIndex >= slides.length - 1 ? 0 : slideCurrentIndex + 1
    );
  }

  function prevSlide() {
    setSlideCurrentIndex(
      slideCurrentIndex <= 0 ? slides.length - 1 : slideCurrentIndex - 1
    );
  }

  console.log("worked again");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("worked");

      if (window.innerWidth > 768) {
        setIsDropDownMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="wrapper">
      <div className={isDropDownMenu ? "overlay" : "overlay-desktop"}></div>
      <div className="layout-grid">
        <div className="slider-image">
          <Navbar
            onHandleDropDown={handleDropDown}
            isDropDownMenu={isDropDownMenu}
          />
          {windowWidth > 768 ? (
            <img
              src={slides[slideCurrentIndex].image}
              alt="hero-image-product"
              className="hero-image"
            />
          ) : (
            <img
              src={slides[slideCurrentIndex].imageMobile}
              alt="hero-image-product"
              className="hero-image"
            />
          )}
          <div className="slider-arrows">
            <span onClick={prevSlide}>
              <img src="../images/icon-angle-left.svg" alt="" />
            </span>
            <span onClick={nextSlide}>
              <img src="../images/icon-angle-right.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="slider-content">
          <h1>{slides[slideCurrentIndex].headline}</h1>
          <p>{slides[slideCurrentIndex].copy}</p>
          <a href="#">
            SHOP NOW{" "}
            <span>
              <img src="../images/icon-arrow.svg" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
