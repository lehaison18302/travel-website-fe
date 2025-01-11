import { Avatar, Card, Tabs } from "antd";
import { useState } from "react";
import { listAVT } from "src/constants/constant";
import Information from "./Information";
import HistoryVote from "./HistoryVote";
import ListFav from "./ListFavourite";

const listMenu = [
  {
    id: 0,
    key: 0,
    label: <strong>Thông tin cá nhân</strong>,
    children: <Information />
  },
  {
    id: 1,
    key: 1,
    label: <strong>Lịch sử đánh giá</strong>,
    children: <HistoryVote />
  },
  {
    id: 2,
    key: 2,
    label: <strong>Địa điểm yêu thích</strong>,
    children: <ListFav/>
  }
];

const IndexAccount = () => {
  return (
    <div className="account-infor-container">
      <div className="account-info-menu">
        <Tabs
          size="large"
          tabPosition="left"
          items={listMenu}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
};

export default IndexAccount;
