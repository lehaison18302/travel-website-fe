import React from "react";
import langbac from "../assets/langbac.jpg";
import langbac2 from "../assets/langbac2.jpg";
import phoco2 from "../assets/phoco2.jpg";
import phoco3 from "../assets/phoco3.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Điểm đến phổ biến</h1>
        <DestinationData
          className="first-des"
          heading="Quảng trường Ba Đình – Lăng Chủ tịch Hồ Chí Minh"
          text="Một trong các điểm du lịch Hà Nội không thể bỏ qua chính là Quảng trường Ba Đình lịch sử, nơi Bác Hồ đọc tuyên ngôn độc lập khai sinh ra nước CHXHCN Việt Nam. Bên trong quảng trường chính là Lăng Bác, nơi lưu giữ thi hài của Chủ tịch Hồ Chí Minh. Đây là nơi mà mỗi người con đất Việt đều muốn viếng thăm một lần trong đời để bày tỏ tấm lòng thành kính với vị cha già kính yêu của dân tộc. Lăng Bác mở cửa vào buổi sáng 5 ngày trong tuần: thứ 3, thứ 4, thứ 5, thứ 7 và chủ nhật. Khách đến viếng thăm bắt buộc phải tuân theo một số yêu cầu như ăn mặc chỉnh tề, không sử dụng các thiết bị ghi hình và giữ trật tự trong lăng."
          img1={langbac}
          img2={langbac2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Phố cổ Hà Nội"
          text="Một trong những địa điểm du lịch ở Hà Nội không thể bỏ qua chính là Phố Cổ. Phố Cổ là những ngôi nhà, con đường, góc phố mang đậm kiến trúc của người Pháp thể kỷ 19. Qua bao thăng trầm của lịch sử và thời gian, nơi đây vẫn giữ được nguyên vẹn nét kiến trúc như thuở ban đầu. Một trong những địa điểm du lịch ở Hà Nội không thể bỏ qua chính là Phố Cổ. Phố Cổ là những ngôi nhà, con đường, góc phố mang đậm kiến trúc của người Pháp thể kỷ 19. Qua bao thăng trầm của lịch sử và thời gian, nơi đây vẫn giữ được nguyên vẹn nét kiến trúc như thuở ban đầu."
          img1={phoco2}
          img2={phoco3}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
