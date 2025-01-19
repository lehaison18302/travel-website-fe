import avt1 from "../assets/images/avt1.png";
import avt2 from "../assets/images/avt2.png";
import langbac from "../assets/images/langbac.jpg";
import langbac2 from "../assets/images/langbac2.jpg";
import phoco2 from "../assets/images/phoco2.jpg";
import phoco3 from "../assets/images/phoco3.jpg";

export const listAVT = [{ src: avt1 }, { src: avt2 }];
export const optionSelectSearch =[{
    value:0,
    label: "Địa điểm"
},{
    value:1,
    label: "Nhà hàng"
},{
    value:2,
    label: "Khách sạn"
}]

export const dataCommentFake = [
  {
    "comment_id": 28,
    "comment_text": "đep",
    "parent_comment_id": 0,
    "comment_created_at": "2025-01-15T02:12:59.000Z",
    "user_display_name": "Phạm Hương Giang",
    "replies": []
  },
  {
    "comment_id": 27,
    "comment_text": "xzcxcx",
    "parent_comment_id": 0,
    "comment_created_at": "2025-01-13T16:31:36.000Z",
    "user_display_name": "Phạm Hương Giang",
    "replies": []
  },
  {
    "comment_id": 26,
    "comment_text": "alo alo\n",
    "parent_comment_id": 0,
    "comment_created_at": "2025-01-13T13:52:26.000Z",
    "user_display_name": "Phạm Hương Giang",
    "replies": []
  },
  {
    "comment_id": 21,
    "comment_text": "Tuyệt vời",
    "parent_comment_id": 0,
    "comment_created_at": "2024-12-20T01:56:02.000Z",
    "user_display_name": "Phạm Hương Giang",
    "replies": []
  },
  {
    "comment_id": 1,
    "comment_text": "Địa điểm này rất đẹp và đáng để tham quan!",
    "parent_comment_id": 0,
    "comment_created_at": "2024-12-19T21:20:08.000Z",
    "user_display_name": "Lê Đình Hải Sơn",
    "replies": [
      {
        "comment_id": 24,
        "comment_text": "10 điểm",
        "parent_comment_id": 1,
        "comment_created_at": "2025-01-11T10:02:25.000Z",
        "user_display_name": "Lê Đình Hải Sơn",
        "replies": []
      },
      {
        "comment_id": 2,
        "comment_text": "Tôi đã ghé thăm và có một trải nghiệm rất tuyệt vời.",
        "parent_comment_id": 1,
        "comment_created_at": "2024-12-19T21:20:08.000Z",
        "user_display_name": "Lê Đình Hải Sơn",
        "replies": []
      }
    ]
  }
]

 export const dataDiaDiemFake = [
    {
      userName: "Nguyễn Văn A",
      comment: "Món ăn rất ngon, phục vụ nhiệt tình. Sẽ quay lại lần sau!",
      commentTime: "2023-12-15 18:30",
      rating: 4.5,
      likeCount: 12,
    },
    {
      userName: "Trần Thị B",
      comment: "Không gian quán đẹp, nhưng món ăn không hợp khẩu vị lắm.",
      commentTime: "2023-12-16 14:20",
      rating: 3.0,
      likeCount: 5,
    },
    {
      userName: "Lê Minh C",
      comment: "Giá cả hợp lý, nhân viên thân thiện, món ăn đa dạng.",
      commentTime: "2023-12-17 19:15",
      rating: 4.0,
      likeCount: 20,
    },
    {
      userName: "Phạm Thùy D",
      comment: "Quá tệ! Đợi món rất lâu, đồ ăn thì nguội.",
      commentTime: "2023-12-18 12:45",
      rating: 1.5,
      likeCount: 3,
    },
    {
      userName: "Đỗ Văn E",
      comment: "Rất hài lòng, sẽ giới thiệu bạn bè tới ủng hộ.",
      commentTime: "2023-12-19 16:10",
      rating: 5.0,
      likeCount: 50,
    },
  ];
  
  export const destinations = [
    {
      id: 1,
      className: "first-des",
      heading: "Quảng trường Ba Đình – Lăng Chủ tịch Hồ Chí Minh",
      text: "Một trong các điểm du lịch Hà Nội không thể bỏ qua chính là Quảng trường Ba Đình lịch sử, nơi Bác Hồ đọc tuyên ngôn độc lập khai sinh ra nước CHXHCN Việt Nam. Bên trong quảng trường chính là Lăng Bác, nơi lưu giữ thi hài của Chủ tịch Hồ Chí Minh. Đây là nơi mà mỗi người con đất Việt đều muốn viếng thăm một lần trong đời để bày tỏ tấm lòng thành kính với vị cha già kính yêu của dân tộc. Lăng Bác mở cửa vào buổi sáng 5 ngày trong tuần: thứ 3, thứ 4, thứ 5, thứ 7 và chủ nhật. Khách đến viếng thăm bắt buộc phải tuân theo một số yêu cầu như ăn mặc chỉnh tề, không sử dụng các thiết bị ghi hình và giữ trật tự trong lăng.",
      img1: langbac,
      img2: langbac2,
    },
    {
      id: 2,
      className: "first-des-reverse",
      heading: "Phố cổ Hà Nội",
      text: "Một trong những địa điểm du lịch ở Hà Nội không thể bỏ qua chính là Phố Cổ. Phố Cổ là những ngôi nhà, con đường, góc phố mang đậm kiến trúc của người Pháp thể kỷ 19. Qua bao thăng trầm của lịch sử và thời gian, nơi đây vẫn giữ được nguyên vẹn nét kiến trúc như thuở ban đầu.",
      img1: phoco2,
      img2: phoco3,
    },
  ];