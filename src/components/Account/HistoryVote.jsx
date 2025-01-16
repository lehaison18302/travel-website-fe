import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Input, List, message, Pagination, Rate, Tooltip } from "antd";
import { useEffect, useState } from "react";
import apiCommon from "src/apis/functionApi";
const { Search } = Input;

const HistoryVote = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [data, setData] = useState([]);
  const accountId = JSON.parse(localStorage.getItem("accessToken"))?.user_id;
  const [startIndex, setStartIndex] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    apiCommon.getVote({ user_id: accountId }).then(res => {
      if (!res) {
        message.error(`Lỗi ${res.data}`)
      } else {
        setData(res.data);
        setStartIndex((currentPage - 1) * pageSize);
      setCurrentData(res.data.slice(startIndex, startIndex + pageSize));
      }
    })
  },[currentPage, pageSize])
  const onPageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng từ 0-11
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }
  function randomDate(startDate, endDate) {
    const startTimestamp = new Date(startDate).getTime();
    const endTimestamp = new Date(endDate).getTime();
    const randomTimestamp =
      Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
    return new Date(randomTimestamp);
  }
  const itemVote = (item) => {
    const randomCommentDate = randomDate("2023-01-01", "2024-12-31");

    return (
      <div className="item-vote">
        <img
          className="item-vote-img"
          src={item.image}
          alt={`Hình ảnh của ${item.title}`}
          style={{ width: 100, height: 100, objectFit: "cover" }}
        />
        <div className="item-vote-text">
          <div className="item-vote-name">
            <strong style={{ fontSize: 20 }}>{item.title} </strong>
            <div>
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
          <span style={{ fontSize: 16 }}>
            <span style={{ fontWeight: 600 }}>Địa chỉ: </span>
            <span style={{ fontStyle: "italic" }}>{item.address}</span>
          </span>
          <span style={{ fontSize: 16 }}>
            <span style={{ fontWeight: 600 }}>Bình luận: </span>
            <span style={{ fontStyle: "italic" }}>{item.comment}</span>
          </span>
          <span style={{ fontSize: 16 }}>
            <span style={{ fontWeight: 600 }}>Ngày bình luận: </span>
            <span style={{ fontStyle: "italic" }}>
              {formatDate(randomCommentDate)}
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="account-info-card">
      <Search placeholder="Tìm kiếm theo tên địa điểm" enterButton />
      <div
        style={{ height: 1, border: "1px solid #1677ff", width: "100%" }}
      ></div>
      <div className="list-item-vote">
        <div>
          <List
            dataSource={currentData}
            renderItem={(item) => (
              <List.Item style={{ width: "100%" }}>{itemVote(item)}</List.Item>
            )}
          />
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            showSizeChanger
            onChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryVote;
