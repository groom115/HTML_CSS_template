import React, { useState, useEffect, useRef } from "react";

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const sliderRef = useRef(null);

  const cards = [
    "Card 1 Content",
    "Card 2 Content",
    "Card 3 Content",
    "Card 4 Content",
    "Card 5 Content",
  ];

  useEffect(() => {}, []);

  return (
    <div className="m-4">
      <div className="horizontal-card-slider">
        <div className="cards-container flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card flex items-center justify-center w-screen h-52 text-xl font-semibold shadow-md ${
                index === currentCard ? "active" : ""
              }`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="dot-indicator flex justify-center">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot w-3 h-3 mx-2 rounded-full bg-black-500 ${
              index + 1 === currentCard ? "active-dot" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
