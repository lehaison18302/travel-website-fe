import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function TripDetails() {
  const [trip, setTrip] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const location = useLocation();
  const { id } = location.state || {}; // Lấy id từ state

  // Lấy thông tin người dùng từ localStorage
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const userId = accessToken?.user_id; // Lấy user_id từ localStorage
  const displayName = accessToken?.displayName; // Lấy displayName từ localStorage

  // Fetch trip details and comments
  useEffect(() => {
    if (id) {
      // Fetch trip details
      axios.get(`http://localhost:3000/tripID/${id}`)
        .then(response => {
          setTrip(response.data);
        })
        .catch(error => {
          console.error("Error fetching trip details:", error);
        });

      // Fetch comments for this trip
      axios.get(`http://localhost:3000/commentsLocation?trip_id=${id}`)
        .then(response => {
          setComments(response.data);
          console.log("Fetched Comments:", response.data); // Log dữ liệu bình luận
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
        trip_id: id, // Sử dụng trip_id từ state
        user_id: userId, // Lấy user_id từ localStorage
        comment: newComment, // Dữ liệu bình luận
      };

      console.log("Sending Comment Data:", commentData); // Log dữ liệu gửi đi

      axios.post("http://localhost:3000/commentsLocation", commentData)
        .then(response => {
          console.log("Comment Added:", response.data);
          const newCommentItem = {
            comment_id: response.data.comment_id, // ID bình luận từ server
            comment_text: newComment, // Nội dung bình luận
            comment_created_at: new Date().toISOString(), // Thời gian bình luận
            user_display_name: displayName, // Tên hiển thị người dùng
          };
          setComments([newCommentItem, ...comments]); // Thêm bình luận mới vào đầu danh sách
          setNewComment(""); // Xóa nội dung bình luận sau khi gửi
        })
        .catch(error => {
          console.error("Error submitting comment:", error);
        });
    }
  };

  if (!trip) return <div>Loading...</div>;

  return (
    <div className="trip-details">
      <h1>{trip.title}</h1>
      <img src={trip.image} alt={trip.title} />
      <p>Địa chỉ: {trip.address}</p>
      <p>Đánh giá: {trip.rating}</p>
      <p>Loại hình: {trip.category}</p>
      <p>Website: <a href={trip.website}>{trip.website}</a></p>

      <div className="comments-section">
        <h2>Bình luận</h2>
        
        {/* Display Comments */}
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="comment-item">
              <p><strong>{comment.user_display_name}</strong></p>
              <p>{comment.comment_text}</p>
              <p><small>{new Date(comment.comment_created_at).toLocaleString()}</small></p>
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

export default TripDetails;
