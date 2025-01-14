import React from "react";
import { List, Avatar, Rate, Space, Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CommentList = ({ comments, visible }) => {
  function formatDate(isoDate) {
    const date = new Date(isoDate);
  
    if (isNaN(date)) {
      console.error("Invalid ISO date format.");
      return null;
    }
  
    return new Intl.DateTimeFormat("vi-VN", {
      weekday: "long", // Thứ
      year: "numeric", // Năm
      month: "long",   // Tháng (dạng đầy đủ)
      day: "numeric",  // Ngày
      hour: "2-digit", // Giờ
      minute: "2-digit", // Phút
      second: "2-digit", // Giây
      hour12: false, // Định dạng 24 giờ
    }).format(date);
  }
  return (
    <List
      className={`comment-list ${visible ? "fade-in" : "fade-out"}`}
      itemLayout="vertical"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
          key={item.comment_id}
        // actions={[
        //   <Space>
        //     <LikeOutlined />
        //     <Text>{item.likeCount}</Text>
        //   </Space>
        // ]}
        >
          <div className="flex" style={{ gap: 8 }}>
            <Avatar>{item.user_display_name.charAt(0)}</Avatar>
            <strong>{item.user_display_name}</strong>
            <span> - </span>
            <Text type="secondary">{formatDate(item.comment_created_at)}</Text>
          </div>
          {/* <div>
            <Rate disabled value={item.rating} allowHalf />
          </div> */}
          <div style={{ marginTop: 8 }}>
            <Text>{item.comment_text}</Text>
          </div>
        </List.Item>
      )}
    />
  );
};

export default CommentList;
