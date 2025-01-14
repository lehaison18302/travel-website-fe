import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apiCommon from "src/apis/functionApi";
import { Button, message, Rate } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
function RestaurantDetails() {
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const restaurant = useLocation();
  const { id } = restaurant.state || {};

  // Lấy thông tin người dùng từ localStorage
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  const userId = accessToken?.user_id; // Lấy user_id từ localStorage
  const displayName = accessToken?.displayName; // Lấy displayName từ localStorage
  // Fetch item details and comments
  useEffect(() => {
    if (id) {
      // Fetch item details
      apiCommon.getRestaurantInfo(id)
        .then(response => {
          response.data = { ...response.data, isLiked: true, }
          setItem(response.data);
        })
        .catch(error => {
          console.error("Error fetching item details:", error);
        });

      // Fetch comments for this item
      axios.get(`http://localhost:3000/comments?restaurant_id=${id}`)
        .then(response => {
          setComments(response.data);
        })
        .catch(error => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [id]);

  const handleAddFav = () => {
    try {
      let data = {
        hotel_id: id,
        user_id: userId,
      }
      apiCommon.addFavHotel(data).then(() => {
        message.success("Lưu đánh giá thành công")
      })
    } catch (error) {
      message.error(error.message)
    }
  }

  const handleSubmitRate = (value) => {
    try {
      let data = {
        id: id,
        user_id: userId,
        ratingScore: value
      }
      apiCommon.submitVoteRestaurant(data).then(() => {
        message.success("Lưu đánh giá thành công")
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

  if (!item) return <div>Loading...</div>;

  return (
    <div className="item-details">
      <div className="flex" style={{ justifyContent: 'space-between' }}>
        <h1>{item.title}</h1>
        <Button disabled={item.isLiked} onClick={() => handleAddFav()} icon={item.isLiked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />} />
      </div>
      <img src={item.image} alt={item.title} />
      <p>Địa chỉ: {item.address}</p>
      <p>Đánh giá: {item.rating}</p>
      <p>Số điện thoại: {item.phoneNumber}</p>
      <p>Website: <a href={item.website}>{item.website}</a></p>
      <div className="comments-section">
        <h2>Đánh giá</h2>
        <Rate defaultValue={5} style={{ marginTop: 8 }} allowHalf onChange={handleSubmitRate} />
      </div>
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

export default RestaurantDetails;
