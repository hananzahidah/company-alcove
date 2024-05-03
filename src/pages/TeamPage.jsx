import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroTeam from "../components/Team/teamHero";
import TeamMember from "../components/Team/teamMember";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <HeroTeam />
      <TeamMember />
      <Footer />
    </>
  );
}
