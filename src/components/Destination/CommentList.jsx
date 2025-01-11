import React from "react";
import { List, Avatar, Rate, Space, Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const CommentList = ({ comments }) => {
  return (
    <List
      itemLayout="vertical"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
          key={item.userName}
          actions={[
            <Space>
              <LikeOutlined />
              <Text>{item.likeCount}</Text>
            </Space>
          ]}
        >
          <div className="flex" style={{ gap: 8 }}>
            <Avatar>{item.userName.charAt(0)}</Avatar>
            <strong>{item.userName}</strong>
            <span> - </span>
            <Text type="secondary">{item.commentTime}</Text>
          </div>
          <div>
            <Rate disabled  value={item.rating} allowHalf />
          </div>
          <div style={{ marginTop: 8 }}>
            <Text>{item.comment}</Text>
          </div>
        </List.Item>
      )}
    />
  );
};

export default CommentList;
