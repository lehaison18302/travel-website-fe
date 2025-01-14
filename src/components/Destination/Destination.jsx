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
import apiCommon from "src/apis/functionApi";

// Helper function to render ranking icons
const renderRankingIcon = (ranking) => {
  const iconStyles = { fontSize: 24 };
  switch (ranking) {
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
          {ranking}
        </strong>
      );
  }
};

// Table columns configuration
const columns = [
  {
    key: "ranking",
    dataIndex: "ranking",
    render: renderRankingIcon,
    width: 4
  },
  {
    dataIndex: "title",
    key: "title"
  },
  {
    dataIndex: "rating",
    key: "rating",
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
      .map((item, index) => ({ ...item, ranking: index + 1 }))
  );
  const [listComment, setListComment]= useState([]);
  const [showComment, setShowComment] = useState(false);
  const [currentItem, setCurrentItem] = useState(dataDiaDiemFake[0]);
  const [listPlace, setListPlace] = useState(dataDiaDiemFake);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [openTabComment, setOpenTabComment] = useState(false);
  const [typeSearch, setTypeSearch] = useState(0);
  let startIndex = (currentPage - 1) * pageSize;

  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize, typeSearch]);

  const fetchData = async () => {
    const getApi = getSuggestionApi(typeSearch);
    try {
      getApi().then(res => {
        let data = res.data
        setListPlace(data)
        setRanking((
          data
            .slice(0, 5)
            .map((item, index) => ({ ...item, ranking: index + 1 }))
        ))
        setCurrentData(data?.slice(startIndex, startIndex + pageSize));
      })
    } catch (err) {
      console.error(err);
    }
  };

  function getSuggestionApi(type) {
    switch (type) {
      case 1:
        return apiCommon.getSuggestRestaurant;
      case 2:
        return apiCommon.getSuggestHotel;
      case 0:
      default:
        return apiCommon.getSuggestLocation;
    }
  }

  function getCommentApi(type) {
    switch (type) {
      case 1:
        return apiCommon.getCommentRestaurant;
      case 2:
        return apiCommon.getCommentHotel;
      case 0:
      default:
        return apiCommon.getCommentLocation;
    }
  }

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

  const handleopenPanelDetail = (item) => {
    let api = getCommentApi(typeSearch);
    try {
      api(item.id).then((res) => {
        console.log(res);
        setListComment(res.data)
        setCurrentItem(item);
        setOpenTabComment(true);
      })
    } catch (err) {
      console.log(err.message);
    }
  }

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
                onChange={e => setTypeSearch(e)}
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
                    toggleComment={() => {
                      handleopenPanelDetail(item)
                    }}
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
            src={currentItem.image}
            alt={`Hình ảnh của ${currentItem.title}`}
            style={{ width: 100, height: 100, objectFit: "cover" }}
          />
          <div className="item-vote-text">
            <div className="item-vote-name">
              <strong style={{ fontSize: 20 }}>{currentItem.title}</strong>
              <div style={{ cursor: "pointer" }}>
                <Tooltip title={`${currentItem.rating} sao`} color="#1677ff">
                  <Rate allowHalf disabled value={currentItem.rating} />
                </Tooltip>
              </div>
            </div>
            <div style={{ fontSize: 16 }}>
              <span style={{ fontWeight: 600 }}>Địa chỉ: </span>
              <span style={{ fontStyle: "italic" }}>{currentItem.address}</span>
            </div>
            <div style={{ fontSize: 16 }}>
              <span style={{ fontWeight: 600 }}>Chi tiết: </span>
              <span style={{ fontStyle: "italic" }}>{currentItem.category}</span>
            </div>
          </div>
        </div>
        {/* <div class="detail-des-info">
          <p>{currentItem.category}</p>
        </div> */}
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
        <CommentList visible={showComment} comments={listComment} />
      </Drawer>
    </div>
  );
}

export default Destination;
