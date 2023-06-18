import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import OurPortfolio from "./components/OurPortfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TalkToMe from "./components/TalkToMe";
import ContactWithMe from "./components/ContactWithMe";
import LoaderHome from "./components/LoaderHome";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
   useEffect(() => {
     AOS.init({ once: true });
   }, []);
  return (
    <div className="App page_bg overflow-hidden">
      <LoaderHome />
      <BackToTop />
      <Header />
      <ContactUs />
      <OurPortfolio />
      <Contact />
      <TalkToMe />
      <ContactWithMe />
      <Footer />
    </div>
  );
}

export default App;
