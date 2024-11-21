import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./style.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
interface Image {
  id: number;
  url: string;
  title: string;
}

const Category = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 1500; // The amount to scroll when clicking the navigation buttons

  const images: Image[] = [
    {
      id: 1,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/821d089df5100f0501e75f381dac31b6/detailed",
      title: "Chung cư, căn hộ",
    },
    {
      id: 2,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/8a5e4101cf990a16a4fe0d0512171e61/detailed",
      title: "Đất nền",
    },
    {
      id: 3,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/c5d7eac740cb7a7aea7e34c53670edb5/detailed",
      title: "Khu biệt thự liền kề",
    },
    {
      id: 4,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/5abae11c7e9b3932465224e8df34bb72/detailed",
      title: "Nhà phố thương mại",
    },
    {
      id: 5,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/8efd379bab9b374bd16b77566cf4f5d2/detailed",
      title: "Chung cư ngoại thành",
    },
    {
      id: 6,
      url: "https://res-console.cloudinary.com/dmgozibet/media_explorer_thumbnails/c7d28ff7d16c73c5098633471543b0e1/detailed",
      title: "Nhà ngoại thành",
    },
  ];
  return (
    <Box className="categories-container">
      <Typography fontWeight="bold" fontSize={30}>
        Danh mục Bất Động Sản
      </Typography>
      <div className="App">
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
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#324d66",
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
    </Box>
  );
};

export default Category;
