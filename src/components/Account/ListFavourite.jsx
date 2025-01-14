import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Input, List, Pagination, Rate, Tooltip } from "antd";
import { useEffect, useState } from "react";
import apiCommon from "src/apis/functionApi";
const { Search } = Input;

const ListFav = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [data, setData] = useState([]);
  const accountId = JSON.parse(localStorage.getItem("accessToken"))?.user_id;
  const [startIndex, setStartIndex] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);
  const fetchData = () => {
    apiCommon.getFavourite({ user_id: accountId }).then((res) => {
      setData(res);
      setStartIndex((currentPage - 1) * pageSize);
      setCurrentData(res.data.slice(startIndex, startIndex + pageSize));
    });
  };

  const onPageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };
  const itemVote = (item) => {
    return (
      <div className="item-vote">
        <img
          className="item-vote-img"
          src={item.img}
          alt={`Hình ảnh của ${item.name}`}
          style={{ width: 100, height: 100, objectFit: "cover" }}
        />
        <div className="item-vote-text">
          <div className="item-vote-name">
            <strong style={{ fontSize: 20 }}>{item.name} </strong>
            <div>
              {item.isLiked ? (
                <HeartFilled
                  style={{ color: "red", marginRight: 8, fontSize: 18 }}
                />
              ) : (
                <HeartOutlined style={{ marginRight: 8, fontSize: 18 }} />
              )}
              <Tooltip title={`${item.vote} sao`} color="#1677ff">
                <Rate allowHalf disabled value={item.vote} />
              </Tooltip>
            </div>
          </div>
          <span style={{ fontSize: 16 }}>
            <span style={{ fontWeight: 600 }}>Địa chỉ: </span>
            <span>{item.address}</span>
          </span>
          <span style={{ fontSize: 16 }}>
            {/* <span style={{ fontWeight: 600 }}>Thông tin:  </span> */}
            <span style={{ fontStyle: "italic" }}>{item.des}</span>
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

export default ListFav;
