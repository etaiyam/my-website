import Header from "../components/header/hearderNav";
import Footer from "../components/footer/footer";

import './style.css';
import Slide from "../components/slider/slide";
import Banner from "../components/header/banner";
import OurTeam from "../components/aboutUs/ourTeam/ourTeam";
import OurLadership from "../components/aboutUs/ourLadership/ourLadership";
import OurEnvironment from "../components/aboutUs/ourEnvironment/ourEnvironment";


function Home (){
 
  const slides = [
    { url: "http://localhost:3000/20220323_143341.jpg", title: "" },
    { url: "http://localhost:3000/20210301_134254.jpg", title: "" },
    { url: "http://localhost:3000/07-LEDWALLS_DSP_2.jpg", title: "" },
    { url: "http://localhost:3000/20220125_112357.jpg", title: "" },
    { url: "http://localhost:3000/HCoMainSales12JAN2021.jpg", title: "" },
    { url: "http://localhost:3000/StripePic2CinematographemaindisplayRight17SEP2021.jpg", title: "" },

    { url: "http://localhost:3000/StripePic3Montgolfiere.jpg", title: "" },
    { url: "http://localhost:3000/StripePic5Braille17SEP2021.jpg", title: "" },
    { url: "http://localhost:3000/HCo31199-1328536PIC01VWafter16DEC2021.jpg", title: "" },
    { url: "http://localhost:3000/HCo31199Pic16FRInteriorHandicap12JAN2021.jpg", title: "" },
    { url: "http://localhost:3000/AnF11213PIC-43WFMonleft16JUN2020.jpg", title: "" },
    { url: "http://localhost:3000/AnF310521356054PIC01VWAfter12JAN2023.jpg", title: "" },

    
  ];
  const containerStyles = {
    width: "100%",
    height: "500px",
    margin: "0 auto",
  };

  return (
    <section > 
      <Banner/>
      <div className="homeSection">
        {/**
         * <div style={containerStyles}>
          <Slide slides={slides} />
        </div>
         */}
        
        <OurTeam/>
        <OurLadership/>
        <OurEnvironment/>
      </div>
    </section>
  )
}
export default Home;