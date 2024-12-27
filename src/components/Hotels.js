import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelData from "./HotelData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/hotels')
      .then(response => {
        const data = response.data;
        console.log(data);
        if (Array.isArray(data)) {
          setHotels(data);
        } else {
          console.error('Expected array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleHotelClick = (id) => {
    navigate(`/hotelID`, { state: { id } });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="trip">
      <h1>Khách sạn gợi ý</h1>
      <Slider {...settings}>
        {Array.isArray(hotels) && hotels.map((hotel, index) => (
          <div 
            key={index} 
            className="t-card-container" 
            onClick={() => handleHotelClick(hotel.id)}
          >
            <HotelData
              image={hotel.image}
              title={hotel.title}
              address={hotel.address}
              rating={hotel.rating}
              phoneNumber={hotel.phoneNumber}
              website={hotel.website}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hotels;
