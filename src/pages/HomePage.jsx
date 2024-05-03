import HeroSection from "../components/Home/homeHero";
import HomeAbout from "../components/Home/homeAbout";
import HomeTesti from "../components/Home/homeTesti";
import HomeService from "../components/Home/homeService";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HomeAbout />
      <HomeService />
      <HomeTesti />
      <Footer />
    </>
  );
}
