import Navbar from "../../components/organisms/Navbar/Navbar";
import HeroSection from "../../components/organisms/HeroSection/HeroSection";
import bgImage from "../../assets/images/Prodintelbg.jpg";

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Home;