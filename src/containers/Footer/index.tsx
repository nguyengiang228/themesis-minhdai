import { FooterStyled } from "./styled";
import { Box, Typography } from "@mui/material";
import Logo2 from "../../assets/logo/logo2.png";
import { Tiktok } from "../../components/Icons/Tiktok";
import { Facebook } from "../../components/Icons/Facebook";
import { Instagram } from "../../components/Icons/Instagram";
import { Youtube } from "../../components/Icons/Youtube";
import Logo4 from "../../assets/logo/logo4.png";
import Logo5 from "../../assets/logo/logo5.png";

const Footer = () => {
  return (
    <Box>
      <FooterStyled>
        <Box className="footer-brand">
          <img className="footer-logo" src={Logo2} />
          <Typography fontWeight="bold" fontSize={25}>
            CÔNG TY TNHH VIETLAND
          </Typography>
        </Box>
        <Box className="footer-info">
          <Box className="business-information">
            <Typography fontSize={20}>THÔNG TIN DOANH NGHIỆP</Typography>
            <div>
              <Typography fontSize={15}>Hotline: 1900.8386</Typography>
              <Typography fontSize={15}>
                Email: bdsvietland@Vietland.vn{" "}
              </Typography>
              <Typography fontSize={15}>
                Địa chỉ: Kailash Buiding, Số 3, Ngõ 82 Dịch Vọng Hậu, Hà Nội
              </Typography>
            </div>
          </Box>
          <Box className="social-network">
            <Typography fontSize={20}>KẾT NỐI VỚI CHÚNG TÔI</Typography>
            <div>
              <Box>
                <Facebook />
              </Box>
              <Box>
                <Instagram />
              </Box>
              <Box>
                <Tiktok />
              </Box>
              <Box>
                <Youtube />
              </Box>
            </div>
            <Box className="footer-certification">
              <img src={Logo5} />
              <img src={Logo4} />
            </Box>
          </Box>
        </Box>
      </FooterStyled>
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
      >
        <Typography fontWeight="bold">Since 2024</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
