import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, message, Rate } from "antd";
import apiCommon, { addFavLocation, submitVoteLocation } from "src/apis/functionApi";
import { HeartOutlined } from "@ant-design/icons";

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

  const handleSubmitRate = (value) => {
    try {
      let data = {
        id: id,
        user_id: userId,
        ratingScore: value
      }
      apiCommon.submitVoteLocation(data).then(() => {
        message.success("Lưu đánh giá thành công")
      })
    } catch (error) {
      message.error(error.message)
    }
  }
  const handleAddFav = () => {
    try {
      let data = {
        location_id: id,
        user_id: userId,
      }
      apiCommon.addFavLocation(data).then(() => {
        message.success("Lưu địa điểm thành công")
      })
    } catch (error) {
      message.error(error.message)
    }
  }
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
      <div className="flex" style={{ justifyContent: 'space-between' }}>
        <h1>{trip.title}</h1>
        <Button disabled={trip.isLiked} onClick={() => handleAddFav()} icon={trip.isLiked ? <HeartFilled style={{ color: 'red' }}/> : <HeartOutlined />} />

      </div>
      <img src={trip.image} alt={trip.title} />
      <p>Địa chỉ: {trip.address}</p>
      <p>Đánh giá: {trip.rating}</p>
      <p>Loại hình: {trip.category}</p>
      <p>Website: <a href={trip.website}>{trip.website}</a></p>
      <div className="comments-section">
        <h2>Đánh giá</h2>
        <Rate defaultValue={5} style={{ marginTop: 8 }} allowHalf onChange={handleSubmitRate} />
      </div>

      <div className="comments-section">
        <h2>Bình luận</h2>

        <div style={{ marginTop: 8 }} className="comments-list">
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
