import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { ChildStyle } from "./styled";
import { useState } from "react";

import Child2 from "../../assets/image/child2.png";
import Child3 from "../../assets/image/child3.png";
import Child4 from "../../assets/image/child4.png";
import Child5 from "../../assets/image/child5.png";
import Child6 from "../../assets/image/child6.png";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Footer from "../../containers/Footer";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ForkRightOutlinedIcon from "@mui/icons-material/ForkRightOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import BalconyOutlinedIcon from "@mui/icons-material/BalconyOutlined";
import Bathroom from "../../components/Icons/Bathroom";
import Interior from "../../components/Icons/Interior";
import FireRescue from "../../components/Icons/FireRescue";
import Gym from "../../components/Icons/Gym";
import Hospital from "../../components/Icons/hospital";
import { Coffee } from "@mui/icons-material";
import School from "../../components/Icons/School";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import Address1 from "../../assets/image/Address1.png";
import Banker from "../../assets/image/Banker1.png";

export const ContainerStyle = styled(Paper)({
  maxWidth: "880px",
  margin: " auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const Price = styled(Typography)({
  fontSize: "50px",
  fontWeight: "bold",
  color: "#e53935",
  marginBottom: "20px",
});

export const DetailItem = styled(Box)({
  textAlign: "center",
});

export const MapContainer = styled(Box)({
  marginTop: "20px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  overflow: "hidden",
});

const ChildPage = () => {
  const images = [
    // Child1, // Image 1
    Child2, // Image 2
    Child3, // Image 3
    Child4, // Image 4
    Child5,
    Child6,
  ];
  const [selectedImage, setSelectedImage] = useState(0);

  const handleSelectImage = (index: any) => {
    setSelectedImage(index);
  };

  const handleScrollUp = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleScrollDown = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "45px",
          color: "#fff",
          backgroundColor: "#baa360",
        }}
      />
      <Header />
      <Menu />
      <ChildStyle>
        <Box sx={{ padding: "1rem 0" }}>
          {/* Sản phẩm */}
          <Grid container spacing={4}>
            <Box
              sx={{
                width: " 100%",
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  ml: "2.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    transform: "translate(3rem,-25rem)",
                  }}
                  onClick={handleScrollUp}
                  disabled={selectedImage === 0}
                >
                  <ArrowBackIosNewIcon
                    sx={{ bgcolor: "rgb(197.197,195)" }}
                    fontSize="large"
                  />
                </IconButton>
                {images.map((img, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    image={img}
                    alt={`Image ${index + 1}`}
                    sx={{
                      width: 160,
                      height: 140,
                      mr: 2,
                      marginY: 1,
                      border:
                        selectedImage === index
                          ? "2px solid orange"
                          : "1px solid #ccc",
                      cursor: "pointer",
                      borderRadius: 1,
                    }}
                    onClick={() => handleSelectImage(index)}
                  />
                ))}
                <IconButton
                  sx={{
                    transform: "translate(-4rem,-25rem)",
                    bgcolor: "rgb(197.197,195)",
                  }}
                  onClick={handleScrollDown}
                  disabled={selectedImage === images.length - 1}
                >
                  <ArrowForwardIosIcon
                    sx={{ bgcolor: "rgb(197.197,195)" }}
                    fontSize="large"
                  />
                </IconButton>
              </Box>

              {/* Main Image (Right) */}
              <Box sx={{ marginLeft: 3, flex: 1 }}>
                <CardMedia
                  component="img"
                  image={images[selectedImage]}
                  alt={`Selected Image ${selectedImage + 1}`}
                  sx={{ width: "47vw", height: "625px", borderRadius: 2 }}
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </ChildStyle>
      <ContainerStyle>
        <Typography sx={{ color: "#808080", mb: "1rem" }}>
          Hà Nội /
          <span style={{ color: "#000" }}>
            &nbsp; Chung cư, căn hộ tại Stown Gateway{" "}
          </span>
        </Typography>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Giá chỉ từ 12 tỷ quỹ căn chuyển nhượng Geleximco mới nhất
        </Typography>
        <Typography variant="body2" sx={{ color: "#4e4e4e", m: "1rem 0" }}>
          Dự án Geleximco Lê Trọng Tấn, Đường Lê Trọng Tấn, Phường Dương Nội, Hà
          Đông, Hà Nội
        </Typography>
        <Divider />
        <Box display="flex" justifyContent="space-between" p="1rem 0rem">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="body2" sx={{ color: "#808080" }}>
                Mức giá
              </Typography>
              <Price variant="h5" fontWeight="bold">
                Thỏa thuận
              </Price>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#808080" }}>
                Diện tích
              </Typography>
              <Price variant="h5" fontWeight="bold">
                Dưới 33 m²
              </Price>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#808080" }}>
                Phòng ngủ
              </Typography>
              <Price variant="h5" fontWeight="bold">
                1PN
              </Price>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: "#808080" }}>
                Chủ đầu tư
              </Typography>
              <Price variant="h5" fontWeight="bold">
                Công ty cổ phần xây dựng Conteccons
              </Price>
            </Box>
            <FavoriteBorderIcon fontSize="large" />
          </Box>
          {/* <Box
            width="40%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Button variant="contained" sx={{ bgcolor: "#324c63" }}>
              Liên hệ mua BĐS
            </Button>
          </Box> */}
        </Box>
        <Divider />
        <Box mt="1rem">
          <Typography variant="h5" fontWeight="bold">
            Thông tin mô tả
          </Typography>
          <Typography mt="1rem">
            Khám phá căn hộ cao cấp tại The Royal Residences - Vinhomes Thanh
            Hóa!
            <br />
            Căn hộ Studio - 1PN, 1WC, full nội thất liền tường cao cấp, cho thuê
            7 - 9 triệu/tháng.
            <br />
            Vốn đầu tư ban đầu từ 400 triệu.
            <br />
            Tiện ích nổi bật:
            <br />
            Căn hộ The Royal Residences là phân khu mở bán đầu tiên của CĐT
            Vingroup, nằm trong lòng Quần thể đô thị Vinhomes Star City đẳng cấp
            bậc nhất Thanh Hoá.
            <br />* Nhất cận thị: Gần ngay UBTP Thanh Hoá, đối diện Công an TP,
            nằm trong trung tâm mới của TP Thanh Hoá, đối diện Siêu thị Big C
            (GO).
            <br />* Nhị cận giang: Gần sông Mã, kề cạnh các sông nhân tạo của
            quần thể Vinhomes Star City, Bất động sản gần các nguồn nước như
            sông, hồ thường có giá trị cao hơn vì cảnh quan đẹp, không khí trong
            lành và khả năng thư giãn, giải trí.
            <br />* Tam cận lộ: Nằm trên trục Đại lộ Lê Lợi (Đại lộ Nguyễn
            Hoàng) tuyến đường huyết mạch của TP Thanh Hoá, cực kỳ thuận tiện
            cho việc di chuyển, công việc và giao thương.
            <br />* Tứ cận viên: Cạnh các khu công viên của Vinhomes Star City,
            hưởng trọn vẹn không gian xanh mát, trong lành mang đến giá trị
            tuyệt vời cho sức khoẻ.
            <br />* Ngũ cận giáo: Liền kề ngay trường liên cấp Vinschool (từ mầm
            non, cấp 1,2,3) thuận tiện đưa đón con học hành tại môi trường chuẩn
            quốc tế.
            <br />
            Với hệ tiện ích nội khu đẳng cấp:
            <br />- Bể bơi phong cách resort.
            <br />- 5 tầng tiện ích khối đế thương mại, thoả sức mua sắm và trải
            nghiệm tất cả dịch vụ.
            <br />- Vận hành Vinhomes đẳng cấp quốc tế.
            <br />- Phòng khám quốc tế Vinmec đầu tiên tại Thanh Hoá.
            <br />- Khu vui chơi trẻ em, vườn dạo bộ, vườn độc sách, khu quầy
            nướng BBQ.
            <br />- Vườn dạo hoa anh đào, cầu đá,...
            <br />
            Tất cả đều mang đậm phong cách Nhật Bản.
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight="bold" m="1rem 0">
          Đặc điểm bất động sản
        </Typography>
        <Divider />
        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width="20%" display="flex" alignItems="center">
              <SpaceDashboardOutlinedIcon />
              &nbsp;
              <Typography>Diện tích</Typography>
            </Box>
            <Typography width="15%" variant="body2" sx={{ color: "#00213E" }}>
              Dưới 33m2
            </Typography>
            <Box width="20%" display="flex">
              <PaidOutlinedIcon />
              &nbsp;
              <Typography>Mức giá</Typography>
            </Box>
            <Typography width="10%" sx={{ color: "#00213E" }}>
              {" "}
              Thỏa thuận
            </Typography>
          </Box>
        </Box>
        <Divider />

        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{ float: "left" }}
          >
            <Box width="20%" display="flex" alignItems="center">
              <ForkRightOutlinedIcon />
              &nbsp;
              <Typography>Hướng nhà</Typography>
            </Box>
            <Typography width="15%" variant="body2" sx={{ color: "#00213E" }}>
              Đông - Nam
            </Typography>
            <Box width="20%" display="flex">
              <BalconyOutlinedIcon />
              &nbsp;
              <Typography>Hướng ban công</Typography>
            </Box>
            <Typography width="10%" sx={{ color: "#00213E" }}>
              {" "}
              Tây - Bắc
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{ float: "left" }}
          >
            <Box width="20%" display="flex" alignItems="center">
              <Bathroom />
              &nbsp;
              <Typography>Số phòng ngủ</Typography>
            </Box>
            <Typography width="15%" variant="body2" sx={{ color: "#00213E" }}>
              Ba phòng ngủ
            </Typography>
            <Box width="20%" display="flex">
              <Bathroom />
              &nbsp;
              <Typography>Nhà tắm</Typography>
            </Box>
            <Typography width="10%" sx={{ color: "#00213E" }}>
              Hai phòng{" "}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{ float: "left" }}
          >
            <Box width="20%" display="flex" alignItems="center">
              <InsertDriveFileOutlinedIcon />
              &nbsp;
              <Typography>Giấy tờ pháp lý</Typography>
            </Box>
            <Typography width="15%" variant="body2" sx={{ color: "#00213E" }}>
              Sổ đỏ / Sổ hồng
            </Typography>
            <Box width="20%" display="flex">
              <Interior />
              &nbsp;
              <Typography>Nội thất</Typography>
            </Box>
            <Typography width="10%" sx={{ color: "#00213E" }}>
              Cơ bản
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Typography variant="h5" fontWeight="bold" m="2rem 0">
          Tiện ích chung các căn hộ
        </Typography>
        <Divider />
        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width="40%" display="flex" alignItems="center">
              <FireRescue />
              &nbsp;
              <Typography>Phòng cháy, chữa cháy</Typography>
            </Box>

            <Box width="40%" display="flex" alignItems="center">
              <Gym />
              &nbsp;
              <Typography>Phòng tập gym</Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width="40%" display="flex" alignItems="center">
              <Hospital />
              &nbsp; &nbsp;
              <Typography>Gần bệnh viện</Typography>
            </Box>

            <Box width="40%" display="flex" alignItems="center">
              <Coffee />
              &nbsp;
              <Typography>Quán cafe</Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box pt={1} pb={1} display="flex" justifyContent="space-between">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box width="40%" display="flex" alignItems="center">
              <PoolOutlinedIcon />
              &nbsp;
              <Typography>Bể bơi chung</Typography>
            </Box>

            <Box width="40%" display="flex" alignItems="center">
              <School />
              &nbsp;
              <Typography>Gần trường học</Typography>
            </Box>
          </Box>
        </Box>
        <Divider />

        <Typography variant="h5" fontWeight="bold" m="2rem 0">
          Xem bản đồ
        </Typography>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.788175609067!2d105.7767988147637!3d21.041872785990677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452fc4d0efeb9%3A0xf6486ad63d8b1a16!2zTmjDoCBUcmnhu4NuLCBIw6AgTuG7mWksIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1639633892036!5m2!1svi!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </MapContainer>
        <Typography variant="h5" fontWeight="bold" m="2rem 0">
          Vị trí dự án
        </Typography>
        <Box>
          <Typography>
            The Royal Residences tọa lạc tại vị trí đắc địa mặt tiền đường ,
            thuận tiện di chuyển nhanh chóng đến các quận trung tâm:
          </Typography>
          <li style={{ marginLeft: "1rem" }}>
            5 phút đến Siêu thị điện máy HC Thanh Hóa
          </li>
          <li style={{ marginLeft: "1rem" }}>10 phút đến Vincom Thanh Hóa</li>
          <li style={{ marginLeft: "1rem" }}>10 phút đến quận 4 bằng cầu</li>
          <li style={{ marginLeft: "1rem" }}>
            Hoàng Long. 15 phút đến trung tâm quận.
          </li>
        </Box>
        <img
          style={{ width: "100%", marginTop: "1rem" }}
          src={Address1}
          alt=""
        />
        <Typography variant="h5" fontWeight="bold" m="2rem 0">
          Phương thức vay ngân hàng
        </Typography>
        <img style={{ width: "100%", marginTop: "1rem" }} src={Banker} alt="" />
        <Typography>
          Ngoài ra, quý khách hàng còn có cơ hội nhận quà tặng giá trị lên đến 2
          tỷ đồng dành cho khách hàng đăng ký nguyện vọng từ hôm nay. Nhiều
          chiết khấu hấp dẫn cho quý khách hàng khi đăng ký sở hữu căn hộ The
          Royal Residences.
        </Typography>
        <li style={{ marginLeft: "1rem" }}>Chiết khấu sỉ từ 0.5-1%</li>
        <li style={{ marginLeft: "1rem" }}>
          Chiết khấu cho khách hàng thân thiết 0.5%/sản phẩm
        </li>
        <li style={{ marginLeft: "1rem" }}>
          Chiết khấu thanh toán nhanh hấp dẫn
        </li>
        <Typography>
          Với chính sách thanh toán và ưu đãi hấp dẫn từ chủ đầu tư mang đến sẽ
          là cơ hội hấp dẫn quý khách hàng sở hữu và đăng ký booking ngay, chọn
          ngay căn view đẹp và giá tốt.
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          m="2rem 0"
          sx={{ color: "red" }}
        >
          Đặt mua dự án
        </Typography>

        <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
          <Typography
            variant="h6"
            m="0 2rem 0 0 "
            width="20%"
            display="center"
            alignItems="center"
          >
            Họ và tên <span style={{ color: "red" }}> *</span>
          </Typography>
          <TextField fullWidth placeholder="Họ và tên" />
        </Box>
        <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
          <Typography
            variant="h6"
            m="0 2rem 0 0 "
            width="20%"
            display="center"
            alignItems="center"
          >
            Địa chỉ Email <span style={{ color: "red" }}> *</span>
          </Typography>
          <TextField fullWidth placeholder="Địa chỉ Email" />
        </Box>
        <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
          <Typography
            variant="h6"
            m="0 2rem 0 0 "
            width="20%"
            display="center"
            alignItems="center"
          >
            Số điện thoại <span style={{ color: "red" }}> *</span>
          </Typography>
          <TextField fullWidth placeholder="Số điện thoại" />
        </Box>
        <Box sx={{ display: "flex", textAlign: "center", marginTop: "20px" }}>
          <Typography
            variant="h6"
            m="0 2rem 0 0 "
            width="20%"
            display="center"
            alignItems="center"
          >
            Ghi chú
          </Typography>
          <TextField fullWidth placeholder="Ghi chú" />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#324C63",
              textTransform: "initial",
              fontWeight: "bold",
              p: "0.7rem 2rem",
            }}
          >
            Gửi thông tin đặt hàng
          </Button>
        </Box>
      </ContainerStyle>
      <Footer />
    </>
  );
};

export default ChildPage;
