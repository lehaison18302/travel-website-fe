import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { Button, List, message, Rate, Tooltip } from "antd";
import apiCommon, { addFavLocation, submitVoteLocation } from "src/apis/functionApi";
import { HeartOutlined } from "@ant-design/icons";
import { dataCommentFake } from "src/constants/constant";
import CommentSection from "./SectionComment";

function TripDetails({ props }) {
  const [item, setTrip] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const location = useLocation();
  const { id } = useParams() || {}; // Lấy id từ state


  // Lấy thông tin người dùng từ localStorage
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const userId = accessToken?.user_id; // Lấy user_id từ localStorage
  const displayName = accessToken?.displayName; // Lấy displayName từ localStorage

  // Fetch trip details and comments
  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = () => {
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
  }
  const handleReplyComment = (comment, parent_id) => {
    let data = {
      trip_id: id,
      user_id: userId,
      comment: comment,
      parent_id: parent_id,
    }
    apiCommon.postCommentLocation(data).then(res => {
      if (!res) {
        message.error("Lỗi")
      } else {
        message.success("Thêm phản hồi thành công.")
        fetchData()
      }
    })
  }

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

      apiCommon.postCommentLocation(commentData)
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

  if (!item) return <div>Loading...</div>;

  return (
    <div className="trip-details">
      <div className="flex" style={{ justifyContent: 'space-between' }}>
        <h1>{item.title}</h1>
        <Button disabled={item.isLiked} onClick={() => handleAddFav()} icon={item.isLiked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />} />

      </div>
      <img src={item.image} alt={item.title} />
      <p>Địa chỉ: {item.address}</p>
      <p>Đánh giá:
        <Tooltip title={`${item.rating.toFixed(1)}*/${item.ratingCount} lượt đánh giá`} color="#1677ff">
          <Rate defaultValue={item.rating} allowHalf disabled />
        </Tooltip>
      </p>
      <p>Loại hình: {item.category}</p>
      <p>Website: <a href={item.website}>{item.website}</a></p>
      <div className="comments-section">
        <h2>Đánh giá</h2>
        <Rate defaultValue={5} style={{ marginTop: 8 }} allowHalf onChange={handleSubmitRate} />
      </div>

      <div className="comments-section">
        <h2>Bình luận</h2>

        <div style={{ marginTop: 8 }} className="comments-list">
          <CommentSection comments={comments} handleReplyComment={handleReplyComment} />
        </div>

        {/* New Comment Form */}
        <div className="new-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Nhập bình luận của bạn..."
          ></textarea>
          <Button
            type="primary"
            onClick={() => handleCommentSubmit()}
          >Gửi bình luận</Button>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;
