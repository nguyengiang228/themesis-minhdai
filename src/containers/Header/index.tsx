import { Box, Typography } from "@mui/material";
import { HeadrStyled } from "./styled";
import logo from "../../assets/logo/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "../../assets/image/avt1.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeadrStyled>
      <Box className="header">
        <img style={{ width: "9rem" }} src={logo} />
      </Box>
      <Box className="header header-menu-option">
        <Box className="header-menu-category">
          <HomeIcon fontSize="large" />
          <Typography
            onClick={() => navigate("/login-user")}
            sx={{ "&:hover": { fontWeight: "bold" } }}
            fontSize={17}
          >
            Trang chủ
          </Typography>
        </Box>
        <Box className="header-menu-category">
          <ListIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Dự án
          </Typography>
        </Box>
        <Box className="header-menu-category">
          <GroupsIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Giới thiệu
          </Typography>
        </Box>
        <Box className="header-menu-category">
          <ChatIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Phản hồi
          </Typography>
        </Box>
        <Box className="header-menu-category">
          <NewspaperIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Tin tức
          </Typography>
        </Box>
        <Box className="header-menu-category">
          <PhoneIcon fontSize="large" />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Liên hệ
          </Typography>
        </Box>
      </Box>
      {location.pathname === "/" && (
        <Box className="header">
          <Typography
            className="login-text"
            fontSize={17}
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </Typography>
          <Typography
            className="register-text"
            fontSize={17}
            onClick={() => navigate("/login")}
          >
            Đăng ký
          </Typography>
        </Box>
      )}
      {/* {location.pathname === "/login-user" && ( */}
      <Box className="header-notication">
        <Box>
          <NotificationsIcon fontSize="large" />
          <Typography className="notice-status">1</Typography>
        </Box>

        <Box>
          <FavoriteIcon fontSize="large" />
          <Typography className="notice-status">1</Typography>
        </Box>
        <img className="header-avatar" src={Avatar} />
      </Box>
      {/* )} */}
    </HeadrStyled>
  );
};

export default Header;
