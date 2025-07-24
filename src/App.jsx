import { Features } from "tailwindcss";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Serviços from "./components/Serviços";
import "./index.css";
import Gallery from "./components/Gallery";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className=" bg-pink-200">
      <Header />
      <Hero />
      <Serviços />
      <Gallery />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
