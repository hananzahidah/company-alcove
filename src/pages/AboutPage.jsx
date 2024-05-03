import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroAbout from "../components/About/aboutHero";
import HistoryAbout from "../components/About/aboutHistory";
import CultureAbout from "../components/About/aboutCulture";
import TeamAbout from "../components/About/abouTeam";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <HistoryAbout />
      <TeamAbout />
      <CultureAbout />
      <Footer />
    </>
  );
}
