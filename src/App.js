import Navbar from "./components/Navbar";
import HeroContent from "./containers/HeroContent";
import "./styles/styles.css";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <HeroContent />
    </div>
  );
}

export default App;
