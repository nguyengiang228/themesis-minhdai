import { IntroducePageStyle } from "./styled";
import Banner from "../../containers/Banner";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import MenuList from "../../containers/Menu";
import { Box, Typography } from "@mui/material";

const IntroducePage = () => {
  return (
    <IntroducePageStyle>
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
      {/* <MenuList /> */}
      <Banner />
      <Box className="introduce-containt">
        <Box className="introduce-block-1">
          <Typography className="introduce-title">TẦM NHÌN</Typography>
          <Typography className="introduce-content">
            Công ty TNHH VietLand hướng tới trở thành doanh nghiệp bất động sản
            hàng đầu Việt Nam, mang lại những giải pháp đầu tư và không gian
            sống hiện đại, bền vững cho mọi khách hàng. Chúng tôi cam kết kiến
            tạo những giá trị bền vững, thúc đẩy sự phát triển cộng đồng và nâng
            cao chất lượng sống cho người Việt Nam.
          </Typography>
        </Box>
        <Box className="">
          <Typography className="introduce-title">SỨ MỆNH</Typography>
          <Typography className="introduce-content">
            Công ty TNHH VietLand không ngừng nỗ lực để cung cấp những dịch vụ
            và sản phẩm bất động sản chất lượng cao, đáng tin cậy. Với đội ngũ
            chuyên nghiệp, VietLand mong muốn đồng hành cùng khách hàng trong
            mọi quyết định về bất động sản, từ đó giúp khách hàng an tâm sở hữu
            những không gian sống lý tưởng và các cơ hội đầu tư sinh lời cao.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </IntroducePageStyle>
  );
};

export default IntroducePage;
