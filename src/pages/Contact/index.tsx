import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Footer from "../../containers/Footer";

const ContactPage = () => {
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
        Trang chủ / <span style={{ color: "#000" }}>Liên hệ</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          pl: "35rem",
          //   backgroundColor: "#d4e2f2", // Màu nền form
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "5rem 8rem",
            width: "400px",
            borderRadius: 2,
            backgroundColor: "#e3edf7", // Màu nền form chính
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#003366", // Màu chữ tiêu đề
              mb: 3,
            }}
          >
            Liên hệ với chúng tôi
          </Typography>
          {/* Form input fields */}
          <Box component="form" noValidate autoComplete="off">
            <Typography sx={{ color: "#858383" }}>Họ và tên</Typography>
            <TextField
              //   label="Họ và tên"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            <Typography sx={{ color: "#858383" }}>Email</Typography>
            <TextField
              //   label="Email"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            <Typography sx={{ color: "#858383" }}>Số điện thoại</Typography>
            <TextField
              //   label="Số điện thoại"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />

            <Typography sx={{ color: "#858383" }}>Nội dung</Typography>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{
                mb: 3,
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#003366",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#002244",
                },
              }}
            >
              Gửi thông tin
            </Button>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
