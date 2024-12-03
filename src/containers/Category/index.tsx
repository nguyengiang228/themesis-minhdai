import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./style.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import House1 from "../../assets/image/img2.png";
import House2 from "../../assets/image/img1.png";
import House8 from "../../assets/image/img8.png";
import House9 from "../../assets/image/img9.png";
import House10 from "../../assets/image/img10.png";
import House3 from "../../assets/image/img3.png";
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
      url: House1,
      title: "Chung cư, căn hộ",
    },
    {
      id: 2,
      url: House2,
      title: "Đất nền",
    },
    {
      id: 3,
      url: House8,
      title: "Khu biệt thự liền kề",
    },
    {
      id: 4,
      url: House9,
      title: "Nhà phố thương mại",
    },
    {
      id: 5,
      url: House10,
      title: "Chung cư ngoại thành",
    },
    {
      id: 6,
      url: House3,
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
