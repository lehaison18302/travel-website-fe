import {
  CommentOutlined,
  CopyOutlined,
  CrownFilled,
  CrownOutlined,
  HeartFilled,
  HeartOutlined,
  SendOutlined,
  StarFilled,
  TrophyFilled,
  TrophyOutlined
} from "@ant-design/icons";
import {
  Button,
  Drawer,
  Input,
  List,
  Pagination,
  Rate,
  Select,
  Table,
  Tooltip
} from "antd";
import { useEffect, useState } from "react";
import { optionSelectSearch } from "src/constants/constant";
import { dataDiaDiemFake, dataCommentFake } from "src/constants/constant";
import CommentList from "./CommentList";
import { ItemPlaceInfo } from "./ItemPlaceInfo";
import { getSuggestLocation } from "src/apis/functionApi";

// Helper function to render ranking icons
const renderRankingIcon = (tier) => {
  const iconStyles = { fontSize: 24 };
  switch (tier) {
    case 1:
      return (
        <CrownFilled
          style={{ ...iconStyles, color: "gold" }}
          title="Hạng nhất"
        />
      );
    case 2:
      return (
        <TrophyFilled
          style={{ ...iconStyles, color: "silver" }}
          title="Hạng nhì"
        />
      );
    case 3:
      return (
        <TrophyOutlined
          style={{ ...iconStyles, color: "#cd7f32" }}
          title="Hạng ba"
        />
      );
    default:
      return (
        <strong
          className="flex jusCen"
          style={{ ...iconStyles, color: "gray" }}
        >
          {tier}
        </strong>
      );
  }
};

// Table columns configuration
const columns = [
  {
    key: "tier",
    dataIndex: "tier",
    render: renderRankingIcon,
    width: 4
  },
  {
    dataIndex: "name",
    key: "name"
  },
  {
    dataIndex: "vote",
    key: "vote",
    render: (data) => (
      <div className="flex">
        <strong>{data}</strong>
        <StarFilled style={{ color: "red", marginLeft: 4 }} />
      </div>
    )
  }
];

function Destination() {
  const [ranking, setRanking] = useState(
    dataDiaDiemFake
      .slice(0, 5)
      .map((item, index) => ({ ...item, tier: index + 1 }))
  );
  const [showComment, setShowComment] = useState(false);
  const [currentItem, setCurrentItem] = useState(dataDiaDiemFake[0]);
  const [listPlace, setListPlace] = useState(dataDiaDiemFake);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [openTabComment, setOpenTabComment] = useState(false);

  const startIndex = (currentPage - 1) * pageSize;
  const currentData = listPlace.slice(startIndex, startIndex + pageSize);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSuggestLocation();
        setListPlace(data)
        console.log(data);

      } catch (err) {
        setError("Lỗi khi tải dữ liệu gợi ý.");
        console.error(err);
      }
    };

    fetchData();
  }, []);
  const handleSend = () => {
    if (message.trim() && rating > 0) {
      alert("Comment added!");
      setMessage("");
      setRating(0);
    } else {
      alert("Vui lòng nhập bình luận và chọn đánh giá!");
    }
  };

  const onPageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  return (
    <div className="search-layout flex jusCen">
      <div className="search-container flex">
        <div className="search-left">
          <span
            className="highlight-text flex jusCen"
            style={{ fontSize: 24, fontWeight: 600, margin: 8 }}
          >
            Bảng xếp hạng tuần
          </span>
          <Table
            dataSource={ranking}
            showHeader={false}
            columns={columns}
            pagination={false}
          />
        </div>
        <div className="search-right">
          <span
            className="flex jusCen"
            style={{ fontSize: 24, fontWeight: 600, margin: 8 }}
          >
            Danh sách địa điểm đề xuất
          </span>
          <Input.Search
            addonBefore={
              <Select
                defaultValue="Địa điểm"
                style={{ width: 120 }}
                options={optionSelectSearch}
              />
            }
            placeholder="Tìm kiếm theo tên"
            enterButton
          />
          <div
            style={{
              height: 1,
              border: "1px solid #1677ff",
              width: "100%",
              marginTop: 8
            }}
          ></div>
          <List
            dataSource={currentData}
            renderItem={(item) => (
              <List.Item style={{ width: "100%" }}>
                {
                  <ItemPlaceInfo
                    item={item}
                    toggleComment={() => setOpenTabComment(true)}
                  />
                }
              </List.Item>
            )}
          />
          <Pagination
            current={currentPage}
            total={listPlace.length}
            pageSize={pageSize}
            showSizeChanger
            onChange={onPageChange}
            hideOnSinglePage
          />
        </div>
      </div>
      <Drawer
        open={openTabComment}
        size="large"
        onClose={() => setOpenTabComment(false)}
        title={
          <strong className="flex jusCen" style={{ width: "100%" }}>
            Bình luận
          </strong>
        }
      >
        <div className="flex jusCen">
          <img
            className="item-vote-img"
            src={currentItem.img}
            alt={`Hình ảnh của ${currentItem.name}`}
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
          <div className="item-vote-text">
            <div className="item-vote-name">
              <strong style={{ fontSize: 20 }}>{currentItem.name}</strong>
              <div style={{ cursor: "pointer" }}>
                <Tooltip title={`${currentItem.vote} sao`} color="#1677ff">
                  <Rate allowHalf disabled value={currentItem.vote} />
                </Tooltip>
              </div>
            </div>
            <div style={{ fontSize: 16 }}>
              <span style={{ fontWeight: 600 }}>Địa chỉ: </span>
              <span style={{ fontStyle: "italic" }}>{currentItem.address}</span>
            </div>
          </div>
        </div>
        <div class="detail-des-info">
          <p>{currentItem.des}</p>
        </div>
        <div style={{ width: "100%" }}>
          <Button.Group size="large" style={{ width: "100%" }}>
            <Button
              style={{ width: "100%", height: 32 }}
              icon={
                currentItem.isLiked ? (
                  <HeartFilled style={{ color: "red", fontSize: 18 }} />
                ) : (
                  <HeartOutlined />
                )
              }
            ></Button>
            <Button
              style={{ width: "100%", height: 32 }}
              onClick={() => setShowComment(!showComment)}
              icon={<CommentOutlined />}
            ></Button>
            <Button
              style={{ width: "100%", height: 32 }}
              icon={<CopyOutlined />}
            ></Button>
          </Button.Group>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            margin: "8px 0"
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <Input
              placeholder="Nhập bình luận..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ flex: 1, minHeight: 40 }}
              addonAfter={
                <Rate
                  value={rating}
                  onChange={(value) => setRating(value)}
                  style={{ fontSize: 16, width: 108 }}
                  allowHalf
                />
              }
            />
            <Button type="primary" onClick={handleSend} style={{ width: 24 }}>
              <SendOutlined />
            </Button>
          </div>
        </div>
        <div
          style={{
            height: 1,
            border: "1.5px solid #1677ff",
            width: "100%",
            margin: "12px 0"
          }}
        ></div>
        <CommentList visible={showComment} comments={dataCommentFake} />
      </Drawer>
    </div>
  );
}

export default Destination;
