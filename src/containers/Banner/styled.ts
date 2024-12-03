import styled from "@emotion/styled";

export const BannerStyle = styled.div`
  margin-bottom: 4rem;

  .react-slideshow-container + ul.indicators .each-slideshow-indicator:before {
    width: 15px;
    height: 15px;
    margin-left: 8px;

    background-color: #ffa438;
  }
  .react-slideshow-container .banner-image,
  .banner-image-jpg {
    width: 100%;
    height: 80vh;
  }

  .react-slideshow-container .each-slideshow-indicator {
    border: none;
    outline: none;
  }
  .react-slideshow-container + ul.indicators li {
    width: 40px;
    height: 40px;
  }
  .react-slideshow-container {
    /* display: flex;
    justify-content: center; */
  }
  /* .react-slideshow-container + ul.indicators {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
  } */
`;
