import Navbar from "./components/Navbar";
import HeroContent from "./containers/HeroContent";
import PhotoGallery from "./containers/PhotoGallery";
import "./styles/styles.css";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <HeroContent />
      <PhotoGallery />
    </div>
  );
}

export default App;
