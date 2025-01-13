const { axiosClient } = require("./baseApi");

const apiCommon = {
  getSuggestLocation: () => {
    const url = "suggestLocation";
    return axiosClient.get(url);
  },
  getSuggestHotel: () => {
    const url = "suggestHotel";
    return axiosClient.get(url);
  },
  getSuggestRestaurant: () => {
    const url = "suggestRestaurant";
    return axiosClient.get(url);
  },
  submitVoteLocation: (data) => {  // data bao gom (id, user_id, ratingScore)
    const url = `voteLocation`;  
    return axiosClient.post(url, data);
  },
  submitVoteHotel: (data) => {  // data bao gom (id, user_id, ratingScore)
    const url = `voteHotel`;
    return axiosClient.post(url, data);
  },
  submitVoteRestaurant: (data) => {  // data bao gom (id, user_id, ratingScore)
    const url = `voteRestaurant`;
    return axiosClient.post(url, data);
  },
  getVote: () => {  //(get) server cung cấp danh sách các bài viết bạn đã vote, hiển thị trang qly tài khoản - lịch sử đánh giá
    const url = "vote";
    return axiosClient.get(url);
  },
  addFavLocation: (data) => { //(post) client gửi về user_id, location_id khi bấm vào yêu thích địa điểm, server sẽ lưu thông tin
    const url = `favouriteLocation`;
    return axiosClient.post(url, data);
  },
  addFavHotel: (data) => { //(post) client gửi về user_id, hotel_id khi bấm vào yêu thích địa điểm, server sẽ lưu thông tin
    const url = `favouriteHotel`;
    return axiosClient.post(url, data);
  },
  addFavRestaurant: (data) => { //(post) client gửi về user_id, restaurant_id khi bấm vào yêu thích địa điểm, server sẽ lưu thông tin
    const url = `favouriteRestaurant`;
    return axiosClient.post(url, data);
  },
  getFavLocation: () => {  //(get) api cung cấp thông tin các địa điểm đã yêu thích (gồm các trường: id, title, address, latitude(bỏ), longitude(bỏ), rating, ratingCount, category, image, phoneNumber, website)
    const url = "favouriteLocation1";
    return axiosClient.get(url);
  },
  getFavHotel: () => {  //(get) api cung cấp thông tin các khách sạn đã yêu thích (gồm các trường: id, title, address, latitude(bỏ), longitude(bỏ), rating, ratingCount, category, image, phoneNumber, website)
    const url = "favouriteLocation2";
    return axiosClient.get(url);
  },
  getFavRestaurant: () => {  //(get) api cung cấp thông tin các nhà hàng đã yêu thích (gồm các trường: id, title, address, latitude(bỏ), longitude(bỏ), rating, ratingCount, category, image, phoneNumber, website)
    const url = "favouriteLocation3";
    return axiosClient.get(url);
  },
  deleteFav: () => { //(delete) api xóa địa điểm yêu thích, client gửi về id cần xóa, nút xóa ở trên từng thẻ địa điểm trong mục danh sách địa điểm đã yêu thích ở phần quản lý tài khoản
    const url = "removeFavourite";
    return axiosClient.delete(url);
  },
  search: (data) => { //(post) client gửi dữ liệu tìm kiếm dạng string về bằng put, server gửi lại mảng các đối tượng trùng khớp dạng json
    const url = "search";
    return axiosClient.post(url, data);
  },
  deleteCommentLocation: () => { //(delete) client gửi id comment cần xóa về server để xóa, nút xóa để ở bên tay phải của từng comment
    const url = "deleteCommentLocation";
    return axiosClient.delete(url);
  },
  deleteCommentHotel: () => { //(delete) client gửi id comment cần xóa về server để xóa, nút xóa để ở bên tay phải của từng comment
    const url = "deleteCommentHotel";
    return axiosClient.delete(url);
  },
  deleteCommentRestaurant: () => { //(delete) client gửi id comment cần xóa về server để xóa, nút xóa để ở bên tay phải của từng comment
    const url = "deleteCommentRestaurant";
    return axiosClient.delete(url);
  },
  editCommentLocation: () => {//(put) client gửi id comment cần sửa với phuong thức put về server để cập nhật bình luận (nút sửa để bên phải từng comment)
    const url = "editCommentLocation";
    return axiosClient.put(url);
  },
  editCommentHotel: () => {//(put) client gửi id comment cần sửa với phuong thức put về server để cập nhật bình luận (nút sửa để bên phải từng comment)
    const url = "editCommentHotel";
    return axiosClient.put(url);
  },
  editCommentRestaurant: () => {//(put) client gửi id comment cần sửa với phuong thức put về server để cập nhật bình luận (nút sửa để bên phải từng comment)
    const url = "editCommentRestaurant";
    return axiosClient.put(url);
  },
};
export default apiCommon;
