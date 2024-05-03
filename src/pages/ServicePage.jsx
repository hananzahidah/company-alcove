import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeTesti from "../components/Home/homeTesti";
import HeroService from "../components/Service/serviceHero";
import ListService from "../components/Service/serviceList";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <HeroService />
      <ListService />
      <HomeTesti />
      <Footer />
    </>
  );
}
