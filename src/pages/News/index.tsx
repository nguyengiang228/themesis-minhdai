import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Menu from "../../containers/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import News1 from "../../assets/image/news1.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const articles = [
  {
    id: 1,
    title: "Khám phá 'chuẩn sống' khác biệt tại Sea City",
    description:
      "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại 'nơi đáng sống nhất hành tinh'.",
    date: "26/10/2024",
    image: News1, // Thay bằng URL ảnh thật
  },
  {
    id: 2,
    title: "Khám phá 'chuẩn sống' khác biệt tại Sea City",
    description:
      "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại 'nơi đáng sống nhất hành tinh'.",
    date: "26/10/2024",
    image: News1, // Thay bằng URL ảnh thật
  },
  {
    id: 3,
    title: "Khám phá 'chuẩn sống' khác biệt tại Sea City",
    description:
      "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại 'nơi đáng sống nhất hành tinh'.",
    date: "26/10/2024",
    image: News1, // Thay bằng URL ảnh thật
  },
  {
    id: 4,
    title: "Khám phá 'chuẩn sống' khác biệt tại Sea City",
    description:
      "Ocean City đang là nơi an cư đáng mơ ước của hơn 60.000 cư dân cả trong và ngoài nước bởi những giá trị sống khác biệt chỉ có tại 'nơi đáng sống nhất hành tinh'.",
    date: "26/10/2024",
    image: News1, // Thay bằng URL ảnh thật
  },
  // Bạn có thể thêm nhiều bài viết khác ở đây
];

const NewsPage = () => {
  return (
    <Box>
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
      <Box
        width="40%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor="#d1c4b2" // Màu nền giống ảnh
        padding="10px 16px"
        borderRadius="8px"
        mt={1}
        mb={1}
      >
        <Typography>Sắp xếp theo:</Typography>

        {/* Dropdown: Giá cả */}
        <Select defaultValue="Giá cả" variant="standard" size="small">
          <MenuItem value="Giá cả">Giá cả</MenuItem>
          <MenuItem value="Cao đến thấp">Cao đến thấp</MenuItem>
          <MenuItem value="Thấp đến cao">Thấp đến cao</MenuItem>
        </Select>

        {/* Dropdown: Tiện ích */}
        <Select defaultValue="Tiện ích" variant="standard" size="small">
          <MenuItem value="Tiện ích">Tiện ích</MenuItem>
          <MenuItem value="Wi-Fi">Wi-Fi</MenuItem>
          <MenuItem value="Hồ bơi">Hồ bơi</MenuItem>
        </Select>

        {/* Dropdown: Tiến độ */}
        <Select defaultValue="Tiến độ" variant="standard" size="small">
          <MenuItem value="Tiến độ">Tiến độ</MenuItem>
          <MenuItem value="Hoàn thành">Hoàn thành</MenuItem>
          <MenuItem value="Đang xây dựng">Đang xây dựng</MenuItem>
        </Select>
      </Box>
      <Typography ml={8.5} sx={{ color: "#8a8989" }}>
        Trang chủ / Tin tức / <span style={{ color: "#000" }}>Thị trường</span>
      </Typography>

      <Box sx={{ maxWidth: "63%", padding: "2rem 10rem 5rem 10rem" }}>
        {/* Đường dẫn (Breadcrumbs) */}

        {/* Danh sách bài viết */}
        <Grid container spacing={2}>
          {articles.map((article, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: "flex", boxShadow: 2 }}>
                {/* Hình ảnh */}
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{ width: 350, height: "auto" }}
                />
                {/* Nội dung */}
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, height: "8rem" }}
                  >
                    {article.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{article.date}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Nút xem thêm */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mt: "1rem",
            cursor: "pointer",
          }}
        >
          <Typography>
            Xem thêm <br />
            <KeyboardArrowDownIcon />{" "}
          </Typography>
        </Box>
      </Box>

      {/* Su kien */}

      <Typography ml={8.5} sx={{ color: "#8a8989" }}>
        Trang chủ / Tin tức / <span style={{ color: "#000" }}>Sự kiện</span>
      </Typography>

      <Box sx={{ maxWidth: "63%", padding: "2rem 10rem 5rem 10rem" }}>
        {/* Đường dẫn (Breadcrumbs) */}

        {/* Danh sách bài viết */}
        <Grid container spacing={2}>
          {articles.map((article, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: "flex", boxShadow: 2 }}>
                {/* Hình ảnh */}
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{ width: 350, height: "auto" }}
                />
                {/* Nội dung */}
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, height: "8rem" }}
                  >
                    {article.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{article.date}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Nút xem thêm */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mt: "1rem",
            cursor: "pointer",
          }}
        >
          <Typography>
            Xem thêm <br />
            <KeyboardArrowDownIcon />{" "}
          </Typography>
        </Box>
      </Box>

      {/* Phong thuy */}

      <Typography ml={8.5} sx={{ color: "#8a8989" }}>
        Trang chủ / Tin tức / <span style={{ color: "#000" }}>Phong thủy</span>
      </Typography>

      <Box sx={{ maxWidth: "63%", padding: "2rem 10rem 5rem 10rem" }}>
        {/* Đường dẫn (Breadcrumbs) */}

        {/* Danh sách bài viết */}
        <Grid container spacing={2}>
          {articles.map((article, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: "flex", boxShadow: 2 }}>
                {/* Hình ảnh */}
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{ width: 350, height: "auto" }}
                />
                {/* Nội dung */}
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, height: "8rem" }}
                  >
                    {article.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "text.secondary",
                      fontSize: "0.875rem",
                    }}
                  >
                    <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="body2">{article.date}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Nút xem thêm */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mt: "1rem",
            cursor: "pointer",
          }}
        >
          <Typography>
            Xem thêm <br />
            <KeyboardArrowDownIcon />{" "}
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default NewsPage;
