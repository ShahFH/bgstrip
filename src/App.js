import Home from "./components/Home"
import Navbar from "./components/Navbar";
import HowToUse from "./components/howToUse";
import Demo from "./components/Demo"
import GetStarted from "./components/getStarted"
import Footer from "./components/Footer"


export default function App() {
  
  return (
    <>
    <Navbar />
    <Home />
    <HowToUse  />
    <Demo id="demo" />
    <GetStarted id="get-started" />
    <Footer />
    </>
  );
}
