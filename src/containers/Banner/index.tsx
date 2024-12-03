import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner1 from "../../assets/banners/banner1.png";
import Banner2 from "../../assets/banners/banner2.jpg";
import Banner3 from "../../assets/banners/banner3.jpg";
import Banner4 from "../../assets/banners/banner4.jpg";
// import "./styled.css";
import { BannerStyle } from "./styled";

const Banner = () => {
  return (
    <BannerStyle>
      {/* <img src={Banner1} alt="" className="w-full h-full" /> */}
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        arrows={false}
        duration={2000}

        // autoplay={false}
      >
        <div style={{}}>
          <img className="banner-image" src={Banner1} alt="" />
        </div>
        <div style={{}}>
          <img className="banner-image-jpg" src={Banner2} alt="" />
        </div>
        <div style={{}}>
          <img className="banner-image-jpg" src={Banner3} alt="" />
        </div>
        <div style={{}}>
          <img className="banner-image-jpg" src={Banner4} alt="" />
        </div>
      </Slide>
    </BannerStyle>
  );
};

export default Banner;
