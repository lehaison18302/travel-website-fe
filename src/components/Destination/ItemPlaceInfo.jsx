import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Rate, Tooltip } from "antd";
import React from "react";


export const ItemPlaceInfo = ({ item, toggleComment }) => (
  <div className="item-vote" key={item.id}>
    <img
      className="item-vote-img"
      src={item.image}
      alt={`Hình ảnh của ${item.name}`}
      style={{ width: 100, height: 100, objectFit: "cover" }}
    />
    <div className="item-vote-text">
      <div className="item-vote-name">
        <strong style={{ fontSize: 16 }}>{item.title} </strong>
        <div style={{ cursor: "pointer" }} onClick={toggleComment}>
          <CommentOutlined
            style={{ color: "blue", marginRight: 8, fontSize: 18 }}
          />
          {item.isLiked ? (
            <HeartFilled
              style={{ color: "red", marginRight: 8, fontSize: 18 }}
            />
          ) : (
            <HeartOutlined style={{ marginRight: 8, fontSize: 18 }} />
          )}
          <Tooltip title={`${item.rating} sao`} color="#1677ff">
            <Rate allowHalf disabled value={item.rating} />
          </Tooltip>
        </div>
      </div>
      <div style={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Địa chỉ: </span>
        <span style={{ fontStyle: "italic" }}>{item.address}</span>
      </div>
      <div style={{ fontSize: 16 }}>
        <span style={{ fontWeight: 600 }}>Chi tiết: </span>
        <span style={{ fontStyle: "italic" }}>{item.category}</span>
      </div>
    </div>
  </div>
);
