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
  getCommentLocation: (id) => {
    const url = `commentsLocation?trip_id=${id}`;
    return axiosClient.get(url);
  },
  getCommentRestaurant: (id) => {
    const url = `commentsRestaurant?restaurant_id=${id}`;
    return axiosClient.get(url);
  },
  getCommentHotel: (id) => {
    const url = `commentsHotel?hotel_id=${id}`;
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
  getVote: (data) => {  //(get) server cung cấp danh sách các bài viết bạn đã vote, hiển thị trang qly tài khoản - lịch sử đánh giá
    const url = "vote";
    return axiosClient.post(url, data);
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
  getFavourite: (data) => {
    const url = "getFavourite";
    return axiosClient.post(url, data);
  },
  deleteFav: () => { //(delete) api xóa địa điểm yêu thích, client gửi về id cần xóa, nút xóa ở trên từng thẻ địa điểm trong mục danh sách địa điểm đã yêu thích ở phần quản lý tài khoản
    const url = "removeFavourite";
    return axiosClient.delete(url);
  },
  search: (data) => { //(post) client gửi dữ liệu tìm kiếm dạng string về bằng put, server gửi lại mảng các đối tượng trùng khớp dạng json
    const url = `search=${data.query}`;
    return axiosClient.get(url);
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
  getRestaurantInfo: (id) => {//(put) client gửi id comment cần sửa với phuong thức put về server để cập nhật bình luận (nút sửa để bên phải từng comment)
    const url = `hoteIlD/${id}`;
    return axiosClient.get(url);
  },
  updateInfoUser: (data) => {
    const url = `updateUser`;
    return axiosClient.post(url, data);
  },
};
export default apiCommon;
