import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./TripDetailsStyle.css";

function TripDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [tripDetails, setTripDetails] = useState(location.state?.tripDetails || null);

  useEffect(() => {
    if (!tripDetails) {
      axios.get(`http://localhost:3000/tripsID/${id}`)
        .then(response => {
          setTripDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching trip details:', error);
        });
    }
  }, [id, tripDetails]);

  if (!tripDetails) return <div>Loading...</div>;

  return (
    <div className="trip-details">
      <h1>{tripDetails.introduce}</h1>
      <img src={tripDetails.image} alt={tripDetails.introduce} />
      <h2>Địa chỉ</h2>
      <p>{tripDetails.address}</p>
      <h2>Khách sạn</h2>
      <p>{tripDetails.hotel}</p>
      <h2>Nhà hàng</h2>
      <p>{tripDetails.restaurant}</p>
      <h2>Địa điểm gần đó</h2>
      <p>{tripDetails['nearby-locations']}</p>
    </div>
  );
}

export default TripDetails;
