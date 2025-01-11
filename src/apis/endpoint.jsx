const BASE_URL = "http://localhost:3000";

const apiEndpoints = {
    suggestLocation: `${BASE_URL}/suggestLocation`, // server gửi json mảng 10 đối tuowgnj cso lượt vote cao nhất
    suggestHotel: `${BASE_URL}/suggestHotel`,
    suggestRestaurant: `${BASE_URL}/suggestRestaurant`,
    voteLocation: `${BASE_URL}/voteLocation`, //client gui post về server với dữ liệu đi kèm gồm id bai viết, id người dùng, điểm vote - (id, user_id, ratingScore)
    voteHotel: `${BASE_URL}/voteHotel`,
    voteRestaurant: `${BASE_URL}/voteRestaurant`,
    vote: `${BASE_URL}/vote`, // server cung cấp danh sách các bài viết bạn đã vote, hiển thị trang qly tk - ls đánh giá
    favouriteLocation: `${BASE_URL}/favouriteLocation`, // khi vote địa điểm
    favouriteHotel: `${BASE_URL}/favouriteHotel`,
    favouriteRestaurant: `${BASE_URL}/favouriteRestaurant`,
    favouriteLocation1: `${BASE_URL}/favouriteLocation1`, //api cung cấp địa điểm yêu thích
    favouriteLocation2: `${BASE_URL}/favouriteLocation2`, //api cung cấp khách sạn yêu thích
    favouriteLocation3: `${BASE_URL}/favouriteLocation3`, //api cung cấp nhà hàng yêu thích
    favouriteDelete: `${BASE_URL}/removeFavourite`, //api xóa địa điểm yêu thích, client gửi về id cần xóa
    search: `${BASE_URL}/search`, //client gửi dữ liệu tìm kiếm dạng string về bằng put, server gửi lại mảng các đối tượng trùng khớp dạng json
    commentDelete1: `${BASE_URL}/deleteCommentLocation`, //client gửi id comment cần xóa với phuong thức delete về server để xóa 
    commentDelete2: `${BASE_URL}/deleteCommentHotel`,
    commentDelete3: `${BASE_URL}/deleteCommentRestaurant`,
    commentEdit1: `${BASE_URL}/editCommentLocation`, //client gửi id comment cần xóa với phuong thức put về server để cập nhật bình luận 
    commentEdit2: `${BASE_URL}/editCommentHotel`,
    commentEdit3: `${BASE_URL}/editCommentRestaurant`,
    contact: `${BASE_URL}/contact` // client gửi user_id, title, address, image, phoneNumber, website từ client (trong đó title, address, image, phoneNumber, website được điền từ form) để gửi về server
    // Anh ơi nhớ thông tin người dùng lưu trong localStorage, thông tin sau khi đăng nhập lưu ở account.
    // dữ liệu bảng locations, hotels, restaurants gồm các trường: id, title, address, latitude(bỏ), longitude(bỏ), rating, ratingCount, category, image, phoneNumber, website
};

export default apiEndpoints;
