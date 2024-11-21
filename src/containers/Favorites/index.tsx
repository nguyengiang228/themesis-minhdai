import { useRef } from "react";
import { FavoritesStyled } from "./styled";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface Image {
  id: number;
  icon: any;
  url: string;
  title: string;
}

const Favorites = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 1500; // The amount to scroll when clicking the navigation buttons

  const images: Image[] = [
    {
      id: 1,
      icon: <FavoriteOutlinedIcon />,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/9bab8ecb47d2cf7df827199e99f6c6c1/detailed",
      title:
        "Căn hộ Studio nội thất liền tường cao cấp - Vinhomes Thanh Hoá - chỉ với 400 triệu ban đầu",
    },
    {
      id: 2,
      icon: <FavoriteBorderOutlinedIcon />,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/7364af6813695e279c25e0a85f363c6d/detailed",
      title: "Căn 1 ngủ, tòa trung tâm S209 Vinhomes Ocean Park Gia Lâm",
    },
    {
      id: 3,
      icon: <FavoriteBorderOutlinedIcon />,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/17fd8e1ef38a7f6c49c46db92551a92f/detailed",
      title:
        "Căn hộ mini Láng – Đống Đa giáp Cầu Giấy 50m, 2 ngủ, full đồ gần ô tô đỗ",
    },
    {
      id: 4,
      icon: <FavoriteBorderOutlinedIcon />,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/9bab8ecb47d2cf7df827199e99f6c6c1/detailed",
      title: "Căn 1 ngủ, tòa trung tâm S209 Vinhomes Ocean Park Gia Lâm",
    },
    {
      id: 5,
      icon: <FavoriteBorderOutlinedIcon />,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/17fd8e1ef38a7f6c49c46db92551a92f/detailed",
      title:
        "Căn hộ mini Láng – Đống Đa giáp Cầu Giấy 50m, 2 ngủ, full đồ gần ô tô đỗ",
    },
    {
      id: 6,
      icon: <FavoriteBorderOutlinedIcon />,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/7364af6813695e279c25e0a85f363c6d/detailed",
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
                  transform: "translate(21rem, -3rem)",
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
