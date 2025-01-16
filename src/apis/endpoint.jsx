const BASE_URL = "http://localhost:3000";

const apiEndpoints = {
    suggestLocation: `${BASE_URL}/suggestLocation`, //(get) server gửi json mảng 10 đối tuowgnj cso lượt vote cao nhất
    suggestHotel: `${BASE_URL}/suggestHotel`, //tương tự
    suggestRestaurant: `${BASE_URL}/suggestRestaurant`, // tương tự
    voteLocation: `${BASE_URL}/voteLocation`, //client gui post về server với dữ liệu đi kèm gồm id bai viết, id người dùng, điểm vote - (id, user_id, ratingScore)
    voteHotel: `${BASE_URL}/voteHotel`,// tương tự
    voteRestaurant: `${BASE_URL}/voteRestaurant`, // tương tự
    vote: `${BASE_URL}/vote`, //(get) server cung cấp danh sách các bài viết bạn đã vote, hiển thị trang qly tài khoản - lịch sử đánh giá
    favouriteLocation: `${BASE_URL}/favouriteLocation`, //(post) client gửi về user_id, location_id khi bấm vào yêu thích địa điểm, server sẽ lưu thông tin
    favouriteHotel: `${BASE_URL}/favouriteHotel`, // tương tự
    favouriteRestaurant: `${BASE_URL}/favouriteRestaurant`, //tương tự
    favouriteLocation1: `${BASE_URL}/favouriteLocation1`, //(get) api cung cấp thông tin các địa điểm đã yêu thích (gồm các trường: id, title, address, latitude(bỏ), longitude(bỏ), rating, ratingCount, category, image, phoneNumber, website)
    favouriteLocation2: `${BASE_URL}/favouriteLocation2`, //(get) api cung cấp 10 khách sạn đã yêu thích
    favouriteLocation3: `${BASE_URL}/favouriteLocation3`, //(get) api cung cấp nhà hàng đã yêu thích
    favouriteDelete: `${BASE_URL}/removeFavourite`, //(delete) api xóa địa điểm yêu thích, client gửi về id cần xóa, nút xóa ở trên từng thẻ địa điểm trong mục danh sách địa điểm đã yêu thích ở phần quản lý tài khoản
    search: `${BASE_URL}/search`, //(post) client gửi dữ liệu tìm kiếm dạng string về bằng put, server gửi lại mảng các đối tượng trùng khớp dạng json
    commentDelete1: `${BASE_URL}/deleteCommentLocation`, //(delete) client gửi id comment cần xóa về server để xóa, nút xóa để ở bên tay phải của từng comment
    commentDelete2: `${BASE_URL}/deleteCommentHotel`, //tương tự
    commentDelete3: `${BASE_URL}/deleteCommentRestaurant`, // tương tự
    commentEdit1: `${BASE_URL}/editCommentLocation`, //(put) client gửi id comment cần sửa với phuong thức put về server để cập nhật bình luận (nút sửa để bên phải từng comment)
    commentEdit2: `${BASE_URL}/editCommentHotel`, // tương tự
    commentEdit3: `${BASE_URL}/editCommentRestaurant`, // tương tự
    contact: `${BASE_URL}/contact` // client gửi user_id, title, address, image, phoneNumber, website từ client (trong đó title, address, image, phoneNumber, website được điền từ form) để gửi về server (đã làm xong)
};

export default apiEndpoints;
