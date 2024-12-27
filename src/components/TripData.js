import React from "react";

function TripData({ title, address, rating, image, phoneNumber, website }) {
  return (
    <div className="t-card">
      {/* Hình ảnh */}
      <div className="t-image">
        {image && <img src={image} alt={title} />}
      </div>
      
      {/* Tiêu đề địa điểm */}
      <h4>{title}</h4>
      
      {/* Địa chỉ */}
      <p><strong>Địa chỉ:</strong> {address}</p>
      
      {/* Đánh giá */}
      <p><strong>Đánh giá:</strong> {rating} ⭐</p>
      
      {/* Số điện thoại */}
      {phoneNumber && (
        <p>
          <strong>Điện thoại:</strong> {phoneNumber}
        </p>
      )}
      
      {/* Website */}
      {website && (
        <p>
          <strong>Website:</strong>{" "}
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      )}
    </div>
  );
}

export default TripData;
