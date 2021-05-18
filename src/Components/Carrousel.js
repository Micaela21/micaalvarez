import React, { useState } from "react";
import video1 from "../Media/melilabsvideo.mp4";
import video2 from "../Media/rick&mortyvideo.mp4";
import img1 from "../Media/melilabs.png";
import img2 from "../Media/rym.png";
import "./Carrousel.css";

function Carrousel() {
  const slides = [
    {
      video: video1,
      img: img1,
      title: "MELILABS",
      linkPage: "https://melilabs.herokuapp.com/",
      repo: "https://github.com/Micaela21/melilabs",
      description:
        "In this project you can search products that you want to buy, you can see in a catalogue, you can filter theirs by price and condition, and you can change the page of catalogue to see more.",
    },
    {
      video: video2,
      img: img2,
      title: "RICK-AND-MORTY-APP",
      linkPage: "https://micaela21.github.io/rick-and-morty/",
      repo: "https://github.com/Micaela21/rick-and-morty",
      description:
        "In this project you can see some characters when you start the application. You can search for new characters and add them to home, you can also remove them from home and you can see the details of any character",
    },
  ];
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const changePage = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="prev">
        <svg
          width="24"
          height="42"
          viewBox="0 0 24 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 6L9 21L24 36L21 42L0 21L21 0L24 6Z" fill="#C4C4C4" />
        </svg>
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <>
              <button className="titleProject">
                {slide.title}
                <a href={slide.repo} className="linkRepo"></a>
                <a href={slide.linkPage} className="linkPage"></a>
                <p className="description">{slide.description}</p>
              </button>
              <video
                width="1067.19"
                height="600"
                preload="auto"
                controls
                autoplay={true}
                poster={slide.img}
                className="video"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            </>
          )}
        </div>
      ))}
      <div className="buttons">
        {slides.map((slide, index) => {
          return (
            <button
              key={index}
              className={index === current ? "page active" : "page"}
              onClick={() => changePage(index)}
            ></button>
          );
        })}
      </div>
      <button onClick={nextSlide} className="next">
        <svg
          width="24"
          height="42"
          viewBox="0 0 24 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 36L15 21L0 6L3 0L24 21L3 42L0 36Z" fill="#C4C4C4" />
        </svg>
      </button>
    </div>
  );
}

export default Carrousel;
