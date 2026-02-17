import './style.css';
import Slide from "../components/slider/slide";
import DesignBuild from '../components/designBuild/designBuild';
import Services from '../components/services/services';
import logo from '../../src/assets/ETClogo.png';
import ServicesP from '../../src/assets/Services.jpg';
import un from '../../src/assets/ETCPicsnumbered/1.jpg';
import deuxUn from '../../src/assets/ETCPicsnumbered/2.1.jpg';
import deuxDeux from '../../src/assets/ETCPicsnumbered/2.2.jpg';
import trois from '../../src/assets/ETCPicsnumbered/3.jpg';
import quatre from '../../src/assets/ETCPicsnumbered/4.jpg';
import cinq from '../../src/assets/ETCPicsnumbered/5.jpg';
import septUn from '../../src/assets/ETCPicsnumbered/7.1.jpg';
import septDeux from '../../src/assets/ETCPicsnumbered/7.2.jpg';
import septTrois from '../../src/assets/ETCPicsnumbered/7.3.jpg';
import huit from '../../src/assets/ETCPicsnumbered/8.jpg';
import neuf from '../../src/assets/ETCPicsnumbered/9.jpg';
import dix from '../../src/assets/ETCPicsnumbered/10.jpg';
import onze from '../../src/assets/ETCPicsnumbered/11.jpg';
import douze from '../../src/assets/ETCPicsnumbered/12.jpg';
import treize from '../../src/assets/ETCPicsnumbered/13.jpg';
import treizeUn from '../../src/assets/ETCPicsnumbered/13.1.jpg';
import quatorze from '../../src/assets/ETCPicsnumbered/14.jpg';
import quinze from '../../src/assets/ETCPicsnumbered/15.jpg';
import seize from '../../src/assets/ETCPicsnumbered/16.jpg';
import seizeUn from '../../src/assets/ETCPicsnumbered/16.1.jpg';
import dixseptUn from '../../src/assets/ETCPicsnumbered/17.1.jpg';
import dixseptDeux from '../../src/assets/ETCPicsnumbered/17.2.jpg';
import dixseptTrois from '../../src/assets/ETCPicsnumbered/17.3.jpg';
import dixhuit from '../../src/assets/ETCPicsnumbered/18.jpg';
import dixhuitUn from '../../src/assets/ETCPicsnumbered/18.1.jpg';
import dixneuf from '../../src/assets/ETCPicsnumbered/19.jpg';
import dixneufUn from '../../src/assets/ETCPicsnumbered/19.1.jpg';
import vingt from '../../src/assets/ETCPicsnumbered/20.jpg';
import vingtetun from '../../src/assets/ETCPicsnumbered/21.jpg';
import vingtetdeux from '../../src/assets/ETCPicsnumbered/22.jpg';
import vingtettrois from '../../src/assets/ETCPicsnumbered/23.jpg';
import vingtetquatre from '../../src/assets/ETCPicsnumbered/24.jpg';
import vingtetcinq from '../../src/assets/ETCPicsnumbered/25.jpg';
import vingtetsix from '../../src/assets/ETCPicsnumbered/26.jpg';
import vingtetseptUn from '../../src/assets/ETCPicsnumbered/27.1.jpg';
import vingtetseptDeux from '../../src/assets/ETCPicsnumbered/27.2.jpg';
import vingtetseptTrois from '../../src/assets/ETCPicsnumbered/27.3.jpg';
import vingtethuit from '../../src/assets/ETCPicsnumbered/28.jpg';

function ServicesPage (){
 
  const slides = [

    { url: un, title: "" },
    { url: deuxUn, title: "" },
    { url: deuxDeux, title: "" },
    { url: trois, title: "" },
    { url: quatre, title: "" },
    { url: cinq, title: "" },
    { url: septUn, title: "" },
    { url: septDeux, title: "" },
    { url: septTrois, title: "" },
    { url: huit, title: "" },
    { url: neuf, title: "" },
    { url: dix, title: "" },
    { url: onze, title: "" },
    { url: douze, title: "" },
    { url: treize, title: "" },
    { url: treizeUn, title: "" },
    { url: quatorze, title: "" },
    { url: quinze, title: "" },
    { url: seize, title: "" },
    { url: seizeUn, title: "" },
    { url: dixseptUn, title: "" },
    { url: dixseptDeux, title: "" },
    { url: dixseptTrois, title: "" },
    { url: dixhuit, title: "" },
    { url: dixhuitUn, title: "" },
    { url: dixneuf, title: "" },
    { url: dixneufUn, title: "" },
    { url: vingt, title: "" },
    { url: vingtetun, title: "" },
    { url: vingtetdeux, title: "" },
    { url: vingtettrois, title: "" },
    { url: vingtetquatre, title: "" },
    { url: vingtetcinq, title: "" },
    { url: vingtetsix, title: "" },
    { url: vingtetseptUn, title: "" },
    { url: vingtetseptDeux, title: "" },
    { url: vingtetseptTrois, title: "" },
    { url: vingtethuit, title: "" },
    
  ];
  const containerStyles = {
    width: "450px",
    height: "450px",
  };


  return (
    <section > 
      <img  src={ServicesP} className="servicesPicture" alt="service" />
      <div className="servicesSection">
        <Services/>
          <div style={containerStyles}>
            <Slide slides={slides} />
            <img  src={logo} className="servicesLogo" alt="service" />
          </div> 
      </div>
    </section>
  )
}
export default ServicesPage;