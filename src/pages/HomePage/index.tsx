import Banner from "../../containers/Banner";
import Category from "../../containers/Category";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import { HomePageStyled } from "./styled";
import Menu from "../../containers/Menu";
import Outstanding from "../../containers/Outstanding";
import Favorites from "../../containers/Favorites";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <HomePageStyled>
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
      <Menu />
      <Banner />
      <Outstanding />
      <Category />
      <Favorites />
      <Footer />
      {/* <BottomNavigation active={"home"} /> */}
    </HomePageStyled>
  );
};

export default HomePage;
