import React from "react"
import './footer.css';

  function Footer() {



    return (
      <section className="footerSection">
      
      <div className="globalFooterDiv">
      <div className="global-div-footer">
        <div className="global-div-informationFooter">
            <h3 className="informationTitle" >CONTACT</h3>
            
            <a href="tel:+33651966585" className = "information">
              <h4 className = "information">Phone number: +33 6 51 96 65 85</h4>
            </a>
           

            <a href="mailto:contact@etcaudiovisual.com" className = "information">
              <h4 className = "information">Email : contact@etcaudiovisual.com</h4>
            </a>
        </div>
        <div className="mapsDiv">
          <h3 className="informationTitle" >ADDRESS</h3>
          <h4 className = "information">20 Rue Juliette Lamber, 75017 Paris</h4>
        </div>
      </div>

      <div className="global-div-footer-mentions">
        <h3 className="mention"> © 2023 ETC AudioVisual</h3>
      </div>
      </div>
      </section>
    )
  }
  export default Footer;