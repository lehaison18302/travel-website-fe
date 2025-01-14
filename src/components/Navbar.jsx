import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AudioOutlined,
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  RiseOutlined,
  StarOutlined
} from "@ant-design/icons";
import { AutoComplete, Avatar, Card, Input, Rate, Tooltip } from "antd";
import Login from "./LogIn/Login";
import CardUser from "./LogIn/CardUser";
import apiCommon from "src/apis/functionApi";
const { Search } = Input;
const resultFake = [
  {
    id: "0123",
    name: "Tràng An",
    img: "https://static-cse.canva.com/blob/1151742/Editor_option2.3252a241.avif",
    rate: 3.5,
    des: "Một địa điểm toẹt cà là vời tại Ninh Bình"
  },
  {
    id: "0122",
    name: "Hoa Lư",
    img: "https://static-cse.canva.com/blob/1151742/Editor_option2.3252a241.avif",
    rate: 4,
    des: "Thủ đô Ninh Bình"
  }
];
const Navbar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [resultSearch, setResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const account = localStorage.getItem("accessToken");
    setIsLogin(!!account);

    const handleStorageChange = () => {
      const account = localStorage.getItem("accessToken");
      setIsLogin(!!account);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff"
      }}
    />
  );
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleChooseSearch = (item) => {
    console.log(item);

    //xử lý chuyển trang
  };
  const onSearch = (text) => {
    console.log(text);
    let list = resultFake.map((item, index) => {
      return {
        value: item.name,
        label: (
          <div key={index}>
            <Card.Meta
              title={<strong>{item.name}</strong>}
              onClick={(item) => handleChooseSearch(item)}
              description={
                <Tooltip title={item.des} placement="right">
                  <div className="label-research-container">
                    <span>{item.des}</span>
                    <Rate defaultValue={item.rate} disabled />
                  </div>
                </Tooltip>
              }
            />
          </div>
        )
      };
    });
    setResult(list);
  };
  const onSelect = (arg) => {
    console.log(arg);
  };
  const logout = () => {
    localStorage.removeItem("account");
    setIsLogin(false);
  };

  const handleSearch = (e) => {
    apiCommon.search({ query: e }).then((res) => {
      console.log(res.data);
    })
  }
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo" onClick={() => navigate("/home")}>
        Travel
      </div>
      <div className="navbar-search">
        <AutoComplete
          options={resultSearch}
          onSelect={onSelect}
          onSearch={(text) => onSearch(text)}
          style={{ width: 400 }}
          popupMatchSelectWidth={252}
        >
          <Input.Search placeholder="Bạn muốn đi đến đâu?" onChange={(e) => handleSearch(e.target.value)} enterButton />
        </AutoComplete>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li key={0}>
          <Link className={"nav-links"} to={"/destination"}>
            <EnvironmentOutlined />
            Điểm đến
          </Link>
        </li>
        {/* <li key={1}>
          <Link className={"nav-links"} to={"/about"}>
            <InfoCircleOutlined />
            Thông tin
          </Link>
        </li> */}
        <li key={2}>
          <Link className={"nav-links"} to={"/contact"}>
            <PhoneOutlined />
            Liên hệ
          </Link>
        </li>
      </ul>
      {isLogin ? <CardUser logout={logout}></CardUser> : <Login setLogin={setIsLogin} />}
    </nav>
  );
};

export default Navbar;
