import React from "react"
import { useState,useEffect } from "react";
import logo from '../../assets/ETClogo.png';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"
import './hearderNav.css';
import { useSelector, useDispatch } from 'react-redux'
import { boolRecup } from "../../booleanSlice";
import DesignBuild from "../designBuild/designBuild";

  function Header() {

    const navigate = useNavigate();
    const navigateToUserChoice = () => {
    // navigate to /
    navigate('/');
    };

    //TEST NAVIGATE SECTION
    /*
    const navigateb = useNavigate();
    const navigateToBuildSection = () => {
    // navigate to /
    window.location.href='/designBuild#designBuildSectionId';
    };
    */

let boolean = useSelector((state) => state.boolean.bool)
const dispatch = useDispatch()

//changer de langue
const handleButtonClick = () => {
  console.log(boolean)
  if(boolean===false){
   dispatch(boolRecup())

 }
 else{
    dispatch(boolRecup())
 }
 console.log("le bool recup"+boolean)
 
}

//MENU BURGER 
const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
      <section>
        <div className="global-div-header">
          <div className="Barre-navigation">
            <img onClick={navigateToUserChoice} src={logo} className="logo" alt="" />

              <div className="navBarDiv">
              {/**MENU NORMAL*/}
              <ul className="Barre-text">  
                <nav className="servicesNav">
                  <ul>
                  <li onClick={navigateToUserChoice} className="headerNav-li" >ABOUT US</li>
                  </ul>
                </nav>

                <nav className="servicesNav">
                  <ul>
                  <Link className="headerNav-li" to ="/designBuild">
                    <li className="headerNav-li">DESIGN-BUILD</li>
                  </Link>
                  </ul>
                </nav>

                <nav className="servicesNav">
                  <ul>
                    <Link className="headerNav-li" to ="/services">
                      <li className="deroulant">
                      SERVICES
                        <ul className="sous">
                          <li>Audio</li>
                          <li>LCD Video </li>
                          <li>LED Video</li>
                          <li>Signage</li>
                          <li>CCTV</li>
                          <li>Conferencing</li>
                          <li>Projection</li>
                          <li> Automation </li>
                          <li>Smart lighting</li>
                          <li>Coms</li>
                          <li>LAN/Networking</li>
                          <li>Acoustics</li>
                          <li>Cabling</li>
                          <li>Systems Design</li>
                          <li>Comitioning</li>
                          <li>Maintenance</li>
                        </ul>
                      </li>
                    </Link>
                  </ul>
                </nav>

                <nav className="servicesNav">
                  <ul className="listeCantacUs">
                  
                    <li className="deroulant">CONTACT US
                      <ul className="sous">
                        <a href="tel:+33651966585" className = "">
                          <li className="contactLi">Call us</li>
                        </a>
                        <a href="mailto:contact@etcaudiovisual.com" className = "">
                          <li className="contactLi">Send us a message</li>
                        </a>
                      </ul>
                    </li>
                    
                  </ul>
                </nav>
              </ul>
              {/**FIN MENU NORMAL*/}

              {/**MENU BURGER*/}
              <div className="App">
                <header className="App-header">
                  <button className="burger-button" onClick={toggleMenu}>
                    ☰
                  </button>
                  <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                    <nav className="servicesNav">
                          <ul>
                          <li onClick={navigateToUserChoice} className="headerNav-li" >ABOUT US</li>
                          </ul>
                        </nav>

                        <nav className="servicesNav">
                          <ul>
                          <Link className="headerNav-li" to ="/designBuild">
                            <li className="headerNav-li">DESIGN-BUILD</li>
                          </Link>
                          </ul>
                        </nav>

                        <nav className="servicesNav">
                          <ul>
                            <Link className="headerNav-li" to ="/services">
                              <li className="deroulant">
                              SERVICES
                                <ul className="sous">
                                  <li>Audio</li>
                                  <li>LCD Video </li>
                                  <li>LED Video</li>
                                  <li>Signage</li>
                                  <li>CCTV</li>
                                  <li>Conferencing</li>
                                  <li>Projection</li>
                                  <li> Automation </li>
                                  <li>Smart lighting</li>
                                  <li>Coms</li>
                                  <li>LAN/Networking</li>
                                  <li>Acoustics</li>
                                  <li>Cabling</li>
                                  <li>Systems Design</li>
                                  <li>Comitioning</li>
                                  <li>Maintenance</li>
                                </ul>
                              </li>
                            </Link>
                          </ul>
                        </nav>

                        <nav className="servicesNav">
                          <ul className="listeCantacUs">
                          
                            <li className="deroulant">CONTACT US
                              <ul className="sous">
                                <a href="tel:+33651966585" className = "">
                                  <li className="contactLi">Call us</li>
                                </a>
                                <a href="mailto: contact@etcaudiovisual.com" className = "">
                                  <li className="contactLi">Send us a message</li>
                                </a>
                              </ul>
                            </li>
                            
                          </ul>
                        </nav>
                    </ul>
                  </nav>
                </header>
              </div>
              {/**FIN MENU BURGER*/}

              <button className="bouton" onClick={handleButtonClick}>EN/FR</button>
            
            </div>
          </div>
        </div>

      </section>
    )
  }
  export default Header;