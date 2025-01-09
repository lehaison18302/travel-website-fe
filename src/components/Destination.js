import React from "react";
import { destinations } from "src/constants/constant";

const DestinationData = ({ className, heading, text, img1, img2 }) => {
  return (
    <div className={className}>
      <div className="text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="images">
        <img src={img1} alt={heading} />
        <img src={img2} alt={heading} />
      </div>
    </div>
  );
};

export const Destination = () => {
  return (
    <div className="destination">
      <h1>Điểm đến phổ biến</h1>
      {destinations.map((destination) => (
        <DestinationData
          key={destination.id}
          className={destination.className}
          heading={destination.heading}
          text={destination.text}
          img1={destination.img1}
          img2={destination.img2}
        />
      ))}
    </div>
  );
};

