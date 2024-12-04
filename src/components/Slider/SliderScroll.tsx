import { Box, CardMedia, Grid, IconButton } from "@mui/material";

import { ChildStyle } from "./styled";
import { useState } from "react";
import Child1 from "../../assets/image/child1.png";
import Child2 from "../../assets/image/child2.png";
import Child3 from "../../assets/image/child3.png";
import Child4 from "../../assets/image/child4.png";
import Child5 from "../../assets/image/child5.png";
import Child6 from "../../assets/image/child6.png";
import { useNavigate } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Footer from "../../containers/Footer";

const SliderScroll = () => {
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
      <Header />
      <Menu />
      <ChildStyle>
        <Box sx={{ padding: 10 }}>
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
                  ml: "2rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={handleScrollUp}
                  disabled={selectedImage === 0}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                {images.map((img, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    image={img}
                    alt={`Image ${index + 1}`}
                    sx={{
                      width: 150,
                      height: 130,
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
                  onClick={handleScrollDown}
                  disabled={selectedImage === images.length - 1}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>

              {/* Main Image (Right) */}
              <Box sx={{ marginLeft: 2, flex: 1 }}>
                <CardMedia
                  component="img"
                  image={images[selectedImage]}
                  alt={`Selected Image ${selectedImage + 1}`}
                  sx={{ width: "50vw", height: "auto", borderRadius: 2 }}
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </ChildStyle>
      <Footer />
    </>
  );
};

export default SliderScroll;
