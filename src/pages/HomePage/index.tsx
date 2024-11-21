import Banner from "../../containers/Banner";
import BottomNavigation from "../../containers/BottomNavigation";
import Category from "../../containers/Category";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import { HomePageStyled } from "./styled";
import MenuList from "../../containers/Menu";
import Outstanding from "../../containers/Outstanding";
import Favorites from "../../containers/Favorites";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Header />
      <MenuList />
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
