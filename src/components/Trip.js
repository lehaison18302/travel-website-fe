import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TripStyles.css";
import TripData from "./TripData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Trip() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/trips')
      .then(response => {
        const data = response.data;
        if (Array.isArray(data)) {
          setTrips(data);
        } else {
          console.error('Expected array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTripClick = (id) => {
    axios.get(`http://localhost:3000/tripsID/${id}`)
      .then(response => {
        console.log('ID posted successfully:', response.data);
        navigate(`/tripsID`, { state: { tripDetails: response.data } });
      })
      .catch(error => {
        console.error('Error posting ID:', error);
      });
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
      <h1>Điểm đến gợi ý</h1>
      <p>Các lộ trình du lịch mà bạn có thể thoải mái lựa chọn</p>
      <Slider {...settings}>
        {Array.isArray(trips) && trips.map((trip, index) => (
          <div 
            key={index} 
            className="t-card-container" 
            onClick={() => handleTripClick(trip.id)}
          >
            <TripData
              image={trip.image}
              heading={trip.heading}
              text={trip.text}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Trip;
