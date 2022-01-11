import Navbar from "./components/Navbar";
import AlsoViewed from "./containers/AlsoViewed";
import GameInfo from "./containers/GameInfo";
import HeroContent from "./containers/HeroContent";
import PhotoGallery from "./containers/PhotoGallery";
import "./styles/styles.css";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <HeroContent />
      <PhotoGallery />
      <GameInfo />
      <AlsoViewed />
    </div>
  );
}

export default App;
