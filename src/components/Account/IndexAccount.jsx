import { Avatar, Card, Tabs } from "antd";
import { useState } from "react";
import { listAVT } from "src/constants/ListAvatar";

const listMenu = [
  {
    id: 0,
    key: 0,
    label: <strong>Thông tin cá nhân</strong>,
    children: (
      <div className="account-info-card">
        <Card>
          <Card.Meta
            title={<strong style={{ fontSize: 18 }}>Hải sơn</strong>}
            avatar={
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100
                }}
                src={listAVT[0]?.src}
              />
            }
            description={
              <span>spa"email: kasdhdasasdhjkhjkasdhjkasdasdhjkhjk"</span>
            }
          />
        </Card>
      </div>
    )
  },
  {
    id: 1,
    key: 1,
    label: <strong>Lịch sử đánh giá</strong>,
    children: <>abc</>
  },
  {
    id: 2,
    key: 2,
    label: <strong>Địa điểm yêu thích</strong>,
    children: <>list địa điểm</>
  }
];

const IndexAccount = () => {
  return (
    <div className="account-infor-container">
      <div className="account-info-menu">
        <Tabs
          title="abc"
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
