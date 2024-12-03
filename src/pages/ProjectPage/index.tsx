import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Menu from "../../containers/Menu";
import { red } from "@mui/material/colors";
import project1 from "../../assets/project/project1.png";
import project2 from "../../assets/project/project2.png";
import project3 from "../../assets/project/project3.png";
import project4 from "../../assets/project/project4.png";
import project5 from "../../assets/project/project5.png";
import project6 from "../../assets/project/project6.png";
import project7 from "../../assets/project/project7.png";
import project8 from "../../assets/project/project8.png";
import project9 from "../../assets/project/project9.png";
import project10 from "../../assets/project/project10.png";
import project11 from "../../assets/project/project11.png";
import project12 from "../../assets/project/project12.png";
import project13 from "../../assets/project/project13.png";
import project14 from "../../assets/project/project14.png";
import project15 from "../../assets/project/project15.png";
import project16 from "../../assets/project/project16.png";
import project17 from "../../assets/project/project17.png";
import project18 from "../../assets/project/project18.png";
import project19 from "../../assets/project/project19.png";
import project20 from "../../assets/project/project20.png";
import project21 from "../../assets/project/project21.png";
import project22 from "../../assets/project/project22.png";
import project23 from "../../assets/project/project23.png";
import project24 from "../../assets/project/project24.png";
import project25 from "../../assets/project/project25.png";
import project26 from "../../assets/project/project26.png";
import project27 from "../../assets/project/project27.png";
import project28 from "../../assets/project/project28.png";
import project29 from "../../assets/project/project29.png";
import project30 from "../../assets/project/project30.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProjectPage = () => {
  const datas = [
    {
      title: "",
      value: [
        {
          title: "Tổng quan dự án Ariyana Lakeside Văn Quán",
          location: "Nguyễn Khuyến, Phường Văn Quán, quận Hà Đông, Hà Nội",
          priceRange: "2.3 tỷ - 3.2 tỷ",
          area: "60 m² - 120 m²",
          status: "Chưa cập nhật",
          progress: "Đang xây dựng",
          img: project1,
        },
        {
          title: "Tổng quan dự án NO3-T6",
          location:
            "Lô NO3-T6 Khu Ngoại Giao Đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, TP Hà Nội",
          priceRange: "3.8 tỷ - 5 tỷ",
          area: "100 m² - 140 m²",
          status: "2020",
          progress: "Không có thông tin",
          img: project2,
        },
        {
          title: "101 Láng Hạ",
          location: "Nguyễn Khuyến, Phường Văn Quán, quận Hà Đông, Hà Nội",
          priceRange: "2.3 tỷ - 3.2 tỷ",
          area: "60 m² - 120 m²",
          status: "Chưa cập nhật",
          progress: "Đang xây dựng",
          img: project3,
        },
        {
          title: "Mở bán 500 căn 3 ngủ tại khu đô thị Phạm Văn Đồng",
          location: "233 Đ. Phạm Văn Đồng, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội",
          priceRange: "4 tỷ - 5 tỷ",
          area: "70 m² - 150 m²",
          status: "2019",
          progress: "Hoàn thành",
          img: project4,
        },
        {
          title: "200 căn hộ của dự án Green Land tại Định Công",
          location: "Định Công, Phường Định Công, quận Thanh Xuân, Hà Nội",
          priceRange: "1.5 tỷ - 3.5 tỷ",
          area: "35 m² - 90 m²",
          status: "2022",
          progress: "Hoàn thành",
          img: project5,
        },
        {
          title: "Căn hộ sang trọng tại SaiGon Royal gần sông Sài Gòn",
          location: "Đường Bến Vân Đồn, Phường 12, Quận 4, TP Hồ Chí Minh",
          priceRange: "4 tỷ - 5 tỷ",
          area: "70 m² - 150 m²",
          status: "2024",
          progress: "Hoàn thành",
          img: project6,
        },
      ],
    },
    {
      title: "Khu biệt thự liền kề",
      value: [
        {
          title:
            "Căn biệt thự Tứ Lập gần công viên hồ trung tâm Vinhomes Oceanpark3",
          location: "Xã Long Hưng, Huyện Văn Giang, Hưng Yên",
          priceRange: "8 tỷ - 15 tỷ",
          area: "120 m² - 150 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project7,
        },
        {
          title: "Nhà liền kề KĐT mới Đại Kim",
          location: "Đường Nguyễn Xiển, Phường Đại Kim, Quận Hoàng Mai, Hà Nội",
          priceRange: "~23.2 tỷ",
          area: "75 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project8,
        },
        {
          title: "Biệt thự Ciputra dự án quận Tây Hồ",
          location: "Phường Phú Thượng, Quận Tây Hồ, Hà Nội",
          priceRange: "48 tỷ",
          area: "140 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project9,
        },
        {
          title: "110 căn nhà liền kề khu phố chợ Long Khánh",
          location: "P. Xuân Trung, TP Long Khánh, Đồng Nai",
          priceRange: "20 tỷ",
          area: "120 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project10,
        },
        {
          title: "Biệt thự tại Centa Vsip Bắc Ninh",
          location: "Đường Hữu Nghị, P. Châu Cẩm, Thị xã Từ Sơn, Bắc Ninh",
          priceRange: "8 tỷ - 15 tỷ",
          area: "120 m² - 150 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project11,
        },
        {
          title: "Dự án Swan Park Nhơn Trạch",
          location: "Đường 7A, Phú Thạnh, Nhơn Trạch, Đồng Nai",
          priceRange: "Chưa xác định",
          area: "120 m² - 150 m²",
          status: "Chưa mở bán",
          progress: "Đang xây dựng",
          img: project12,
        },
      ],
    },
    {
      title: "Đất nền",
      value: [
        {
          title: "Đất nền nằm trong khu đô thị Alana City",
          location: "Xã Phước Hòa, Huyện Phú Giáo, Bình Dương",
          priceRange: "~800 triệu",
          area: "100 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project13,
        },
        {
          title: "Đất nền dự ans Đại Học Quốc Gia 245, Gò Cát, Phú Hữu, Quận 9",
          location: "Phường Phú Hữu, Quận 9, TP Hồ Chí Minh",
          priceRange: "~8,8 tỉ",
          area: "250 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project14,
        },
        {
          title: "Đất nền dự án tại The Mansion Hội An",
          location: "Phường Điện Nam Đông, Huyện Điện Bàn, Quảng Nam",
          priceRange: "~1.4 tỷ",
          area: "150 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project15,
        },
        {
          title: "Đất nền khu đô thị Biên Hòa New City",
          location: "Đường 2, Phường Phước Tân, Thành phố Biên Hòa, Đồng Nai",
          priceRange: "1.8 tỷ",
          area: "100 m²",
          status: "Đang mở bán",
          progress: "Chưa có thông tin",
          img: project16,
        },
        {
          title: "Lô đất nền tại Lakeside Bàu Tràm",
          location: "Phường Hòa Hiệp Nam, Quận Liên Chiểu, Đà Nẵng",
          priceRange: "~5 tỷ",
          area: "300 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project17,
        },
        {
          title:
            "Đất nền dự án tại Khu dân cư Tân Đô, Tỉnh Lộ 10, Đức Hoà Hạ, Long An.",
          location: "Xã Đức Hòa Hạ, Huyện Đức Hòa, Long An",
          priceRange: "2.99 tỷ",
          area: "175 m²",
          status: "Đang mở bán",
          progress: "Chưa quy hoạch",
          img: project18,
        },
      ],
    },
    {
      title: "Nhà phố",
      value: [
        {
          title: "Nhà mặt phố tại Vạn Phúc, Hà Đông",
          location: "Phố Vạn Phúc, Phường Vạn Phúc, Hà Đông, Hà Nội",
          priceRange: "~19 tỷ",
          area: "50 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project19,
        },
        {
          title: "Nhà mặt phố tại Hoàng Cầu",
          location: "Phố Thái Hà, Phường Láng Hạ, Đống Đa, Hà Nội",
          priceRange: "~8.8 tỷ",
          area: "40 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project20,
        },
        {
          title: "Nhà mặt phố tại Bình Thạnh, Tp.HCM",
          location: "Bình Thạnh, Tp.HCM",
          priceRange: "~1.4 tỷ",
          area: "150 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project21,
        },
        {
          title: "Nhà phố 4 tầng trong ngõ tại Vang Vĩnh",
          location:
            "Số 28, Đường Nguyễn Thái, Phường Hà Huy Tập, Vinh, Nghệ An",
          priceRange: "12 tỷ",
          area: "70 m²",
          status: "Đang mở bán",
          progress: "Chưa có thông tin",
          img: project22,
        },
        {
          title: "Mặt tiền ngay Trần Hưng Đạo, Quận 1",
          location: "Đường Trần Hưng Đạo, Phường Cầu Kho, Quận 1, Hồ Chí Minh",
          priceRange: "~25 tỷ",
          area: "70 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project23,
        },
        {
          title: "Nhà phố tại Lương Trúc Đàm",
          location:
            "Số 51, Đường Nam Trân, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
          priceRange: "~20 tỷ",
          area: "95 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project24,
        },
      ],
    },
    {
      title: "Nhà phố thương mại",
      value: [
        {
          title: "Nhà phố thương mại tại Him Lam Thường Tín",
          location: "Him Lam Thường Tín, Trần Phú, Thường Tín, Hà Nội",
          priceRange: "Thỏa thuận",
          area: "80 - 100 m²",
          status: "Đang mở bán",
          progress: "Hoàn thành",
          img: project25,
        },
        {
          title: "Đất nền dự án Đại Học Quốc Gia 245, Gò Cát, Phú Hữu, Quận 9",
          location: "Phường Phú Hữu, Quận 9, TP Hồ Chí Minh",
          priceRange: "~8.8 tỷ",
          area: "250 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project26,
        },
        {
          title: "Shophouse, nhà phố thương mại tại Gia Lâm",
          location: "Gia Lâm, Xã Đặng Xá, Gia Lâm, Hà Nội",
          priceRange: "Thỏa thuận",
          area: "150 m²",
          status: "2020",
          progress: "Đang xây dựng",
          img: project27,
        },
        {
          title: "Đất nền khu đô thị Biên Hòa New City",
          location: "Đường 2, Phường Phước Tân, Thành phố Biên Hòa, Đồng Nai",
          priceRange: "Thỏa thuận",
          area: "100 m²",
          status: "Đang mở bán",
          progress: "Chưa có thông tin",
          img: project28,
        },
        {
          title: "Lô đất nền dự án Lakeside Bàu Tràm",
          location: "Đường 5, Phường Hòa Hiệp Nam, Quận Liên Chiểu, Đà Nẵng",
          priceRange: "Thỏa thuận",
          area: "300 m²",
          status: "Đang mở bán",
          progress: "Đã quy hoạch",
          img: project29,
        },
        {
          title:
            "Đất nền dự án tại Khu dân cư Tân Đô, Tỉnh Lộ 10, Đức Hòa Hạ, Long An",
          location: "Xã Đức Hòa Hạ, Huyện Đức Hòa, Long An",
          priceRange: "Thỏa thuận",
          area: "175 m²",
          status: "Đang mở bán",
          progress: "Chưa quy hoạch",
          img: project30,
        },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <Menu />

      <Box sx={{ my: 3 }}>
        <Container maxWidth="lg">
          <Stack alignItems="start" justifyContent="start" gap={5}>
            {datas.map(({ title, value }) => {
              return (
                <Stack
                  alignItems="start"
                  justifyContent="start"
                  gap={2}
                  key={title}
                >
                  {title && (
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Typography sx={{ opacity: 0.6 }}>Dự án </Typography>
                      <Typography> / {title}</Typography>
                    </Stack>
                  )}
                  <Grid container spacing={3}>
                    {value.map(
                      ({
                        title,
                        location,
                        priceRange,
                        area,
                        status,
                        progress,
                        img,
                      }) => (
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={6}
                          xl={6}
                          key={title}
                        >
                          <Card
                            sx={{
                              display: "flex",
                              borderRadius: 2,
                              boxShadow: 3,
                              width: "100%",
                              minHeight: "190px",
                              cursor: "pointer",
                              transition: "all 0.3s ease-in-out",
                              "&:hover": {
                                transform: "translateY(-5px)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                position: "relative",
                                width: 210,
                              }}
                            >
                              <CardMedia
                                component="img"
                                image={img || ""}
                                alt={title}
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  bottom: 2,
                                  right: 8,
                                }}
                              >
                                <FavoriteBorderIcon color="error" />
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                justifyContent: "start",
                              }}
                            >
                              <CardContent>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  sx={{
                                    fontSize: "17px",
                                    fontWeight: "550",
                                  }}
                                >
                                  {title}
                                </Typography>
                                <Typography
                                  sx={{ fontSize: "13px" }}
                                  color="text.secondary"
                                  gutterBottom
                                >
                                  {location}
                                </Typography>
                                <Box
                                  display="flex"
                                  justifyContent="space-between"
                                  my={1}
                                >
                                  <Typography
                                    sx={{ fontSize: "13px" }}
                                    color="text.primary"
                                  >
                                    <span>Giá tham khảo:</span>{" "}
                                    <span style={{ color: red[500] }}>
                                      {priceRange}
                                    </span>
                                  </Typography>
                                  <Typography
                                    sx={{ fontSize: "13px" }}
                                    color="text.primary"
                                  >
                                    <span>Diện tích:</span> {area}
                                  </Typography>
                                </Box>
                                <Box
                                  display="flex"
                                  justifyContent="space-between"
                                >
                                  <Typography
                                    sx={{ fontSize: "13px" }}
                                    color="text.primary"
                                  >
                                    <span>Bàn giao:</span> {status}
                                  </Typography>
                                  <Typography
                                    sx={{ fontSize: "13px" }}
                                    color="text.primary"
                                  >
                                    <span>Tiến độ:</span> {progress}
                                  </Typography>
                                </Box>
                              </CardContent>
                            </Box>
                          </Card>
                        </Grid>
                      )
                    )}
                  </Grid>
                  <Stack alignItems="center" sx={{ width: "100%" }}>
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{ textTransform: "inherit" }}
                    >
                      <Stack alignItems="center">
                        Xem thêm
                        <KeyboardArrowDownIcon sx={{ marginTop: "-6px" }} />
                      </Stack>
                    </Button>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProjectPage;
