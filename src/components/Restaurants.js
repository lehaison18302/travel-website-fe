import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TripStyles.css";
import RestaurantData from "./RestaurantData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/restaurants')
      .then(response => {
        const data = response.data;
        console.log(data);
        if (Array.isArray(data)) {
          setRestaurants(data);
        } else {
          console.error('Expected array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleHotelClick = (id) => {
    axios.get(`http://localhost:3000/restaurantsID/${id}`)
      .then(response => {
        console.log('ID posted successfully:', response.data);
        // Uncomment this line if navigation is needed
        // navigate(`/hotelsID`, { state: { tripDetails: response.data } });
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
      <h1>Nhà hàng gợi ý</h1>
      <Slider {...settings}>
        {Array.isArray(restaurants) && restaurants.map((restaurant, index) => (
          <div 
            key={index} 
            className="t-card-container" 
            onClick={() => handleHotelClick(restaurant.id)}
          >
            <RestaurantData
              image={restaurant.image}
              title={restaurant.title}
              address={restaurant.address}
              rating={restaurant.rating}
              phoneNumber={restaurant.phoneNumber}
              website={restaurant.website}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Restaurants;
