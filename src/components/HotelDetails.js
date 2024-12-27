import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./HotelDetailsStyle.css";

function HotelDetails() {
  const [hotel, setHotel] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const location = useLocation();
  const { id } = location.state || {}; // Lấy id từ state

  // Lấy thông tin người dùng từ localStorage
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const userId = accessToken?.user_id; // Lấy user_id từ localStorage
  const displayName = accessToken?.displayName; // Lấy displayName từ localStorage

  // Fetch hotel details and comments
  useEffect(() => {
    if (id) {
      // Fetch hotel details
      axios.get(`http://localhost:3000/hotelID/${id}`)
        .then(response => {
          setHotel(response.data);
        })
        .catch(error => {
          console.error("Error fetching hotel details:", error);
        });

      // Fetch comments for this hotel
      axios.get(`http://localhost:3000/comments?hotel_id=${id}`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [id]);

  // Submit a new comment
  const handleCommentSubmit = () => {
    if (!accessToken || !userId) {
      alert("Bạn cần đăng nhập để bình luận.");
      return;
    }

    if (newComment.trim()) {
      const commentData = {
        hotel_id: id,
        user_id: userId, // Lấy user_id từ localStorage
        comment_text: newComment,
      };

      console.log("Sending Comment Data:", commentData); // Kiểm tra dữ liệu trước khi gửi

      axios.post("http://localhost:3000/commentsHotel", commentData)
        .then(response => {
          console.log("Comment Added:", response.data);
          const newCommentItem = {
            id: response.data.id,
            comment_text: newComment,
            created_at: new Date().toISOString(),
            displayName: displayName, // Hiển thị đúng tên từ localStorage
          };
          setComments([newCommentItem, ...comments]); // Thêm bình luận mới vào đầu danh sách
          setNewComment(""); // Xóa nội dung bình luận sau khi gửi
        })
        .catch(error => {
          console.error("Error submitting comment:", error);
        });
    }
  };

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="hotel-details">
      <h1>{hotel.title}</h1>
      <img src={hotel.image} alt={hotel.title} />
      <p>Địa chỉ: {hotel.address}</p>
      <p>Đánh giá: {hotel.rating}</p>
      <p>Số điện thoại: {hotel.phoneNumber}</p>
      <p>Website: <a href={hotel.website}>{hotel.website}</a></p>

      <div className="comments-section">
        <h2>Bình luận</h2>
        
        {/* Display Comments */}
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <p><strong>{comment.displayName}</strong></p>
              <p>{comment.comment_text}</p>
              <p><small>{new Date(comment.created_at).toLocaleString()}</small></p>
            </div>
          ))}
        </div>

        {/* New Comment Form */}
        <div className="new-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Nhập bình luận của bạn..."
          ></textarea>
          <button onClick={handleCommentSubmit}>Gửi bình luận</button>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
