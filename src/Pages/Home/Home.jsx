import Navbar from "../../components/organisms/Navbar/Navbar";
import HeroSection from "../../components/organisms/HeroSection/HeroSection";
import bgImage from "../../assets/images/Prodintelbg.jpg";
import LevelUnlockBar from "../../components/organisms/LevelUnlockBar/LevelUnlockBar";

function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Fixed Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
        <LevelUnlockBar currentLevel={0} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">

        <Navbar />
        

        <div className="flex-1 flex items-center justify-center">
          <HeroSection />
        </div>

      </div>
    </div>
  );
}

export default Home;