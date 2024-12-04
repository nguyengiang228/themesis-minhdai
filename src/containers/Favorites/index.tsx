import { useRef } from "react";
import { FavoritesStyled } from "./styled";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import House2 from "../../assets/image/img2.png";
import House4 from "../../assets/image/img4.png";
import House6 from "../../assets/image/img6.png";
import House7 from "../../assets/image/img7.png";
import House10 from "../../assets/image/img10.png";
import House3 from "../../assets/image/img3.png";

const Favorites = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 1500; // The amount to scroll when clicking the navigation buttons

  const images = [
    {
      id: 1,
      icon: <FavoriteOutlinedIcon />,
      url: House2,
      title:
        "Căn hộ Studio nội thất liền tường cao cấp - Vinhomes Thanh Hoá - chỉ với 400 triệu ban đầu",
    },
    {
      id: 2,
      icon: <FavoriteBorderOutlinedIcon />,
      url: House4,
      title: "Căn 1 ngủ, tòa trung tâm S209 Vinhomes Ocean Park Gia Lâm",
    },
    {
      id: 3,
      icon: <FavoriteBorderOutlinedIcon />,
      url: House6,
      title:
        "Căn hộ mini Láng – Đống Đa giáp Cầu Giấy 50m, 2 ngủ, full đồ gần ô tô đỗ",
    },
    {
      id: 4,
      icon: <FavoriteBorderOutlinedIcon />,
      url: House7,
      title: "Căn 1 ngủ, tòa trung tâm S209 Vinhomes Ocean Park Gia Lâm",
    },
    {
      id: 5,
      icon: <FavoriteBorderOutlinedIcon />,
      url: House4,
      title:
        "Căn hộ mini Láng – Đống Đa giáp Cầu Giấy 50m, 2 ngủ, full đồ gần ô tô đỗ",
    },
    {
      id: 6,
      icon: <FavoriteBorderOutlinedIcon />,
      url: House6,
      title:
        "Căn hộ Studio nội thất liền tường cao cấp - Vinhomes Thanh Hoá - chỉ với 400 triệu ban đầu",
    },
  ];

  return (
    <FavoritesStyled>
      <Typography fontWeight="bold" fontSize={30}>
        Bất động sản dành cho bạn
      </Typography>
      <div className="favorites-container">
        {/* Left navigation button */}
        <button
          className="nav-btn"
          onClick={() => {
            const container = sliderRef.current;
            if (container) {
              container.scrollLeft -= scrollAmount; // Scroll left
            }
          }}
        >
          <ArrowBackIosNewOutlinedIcon />
        </button>

        {/* Image container */}
        <div className="images-container" ref={sliderRef}>
          {images.map((image) => (
            <Box key={image.id}>
              <img className="image-slider" alt="sliderImage" src={image.url} />
              <Box
                sx={{
                  transform: "translate(2rem, -16rem)",
                  color: image.id === 1 ? "red" : "#fff",
                  width: "30px",
                }}
              >
                {image.icon}
              </Box>

              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  m: "-2rem 1.7rem",
                  color: "#324d66",
                  width: "87%",
                }}
                fontWeight="bold"
                fontSize={18}
              >
                {image.title}
              </Typography>
            </Box>
          ))}
        </div>

        {/* Right navigation button */}
        <button
          className="nav-btn"
          onClick={() => {
            const container = sliderRef.current;
            if (container) {
              container.scrollLeft += scrollAmount; // Scroll right
            }
          }}
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>
    </FavoritesStyled>
  );
};

export default Favorites;
