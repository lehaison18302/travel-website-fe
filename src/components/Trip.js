import React, { useState, useEffect } from "react";
import axios from "axios";
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
        console.log(data);
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
    navigate(`/tripID`, { state: { id } });
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
      <Slider {...settings}>
        {Array.isArray(trips) && trips.map((trip, index) => (
          <div 
            key={index} 
            className="t-card-container" 
            onClick={() => handleTripClick(trip.id)}
          >
            <TripData
              image={trip.image}
              title={trip.title}
              address={trip.address}
              rating={trip.rating}
              phoneNumber={trip.phoneNumber}
              website={trip.website}
            />

          </div>
        ))}
      </Slider>
    </div>
    
  );
}

export default Trip;
