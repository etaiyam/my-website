import React from "react"
import OurEnvironmentAfter1 from '../../../assets/OurEnvironmentAfter1.jpg';
import OurEnvironmentBefor1 from '../../../assets/OurEnvironmentBefor1.png';
import OurEnvironmentAfter2 from '../../../assets/OurEnvironmentAfter2.png';
import OurEnvironmentBefor2 from '../../../assets/OurEnvironmentBefor2.png';
import './ourEnvironment.css';
import { useSelector} from 'react-redux'
import { useState,useEffect } from "react";

function OurEnvironment () {

    let boolean = useSelector((state) => state.boolean.bool)
    let [texte,setTexte]=useState()
    let [titre,setTitre]=useState()

    useEffect(() => {
      // Update the document title using the browser API
      if(boolean===false){
        setTexte(texteFR)
        setTitre(titreFR)
     }
     else{
      setTexte(texteANG)
      setTitre(titreENG)
     }
     console.log(texte)
    });

    //le textes en deux langues
    let texteFR="Chez ETC AudioVisual, nous comprenons l'importance de prendre soin de l’environnement. Nous veillons à ce que nos chantiers restent propres et exempts de déchets, et nous nous assurons de l’élimination correcte de ces derniers. Nous nous efforçons de minimiser notre empreinte environnementale et d'être attentifs aux autres professionnels sur place. Nous nous occupons également de la sûreté sur nos chantiers et nous veillons à ce que tous nos employés respectent les normes de sécurité. En prenant ces mesures, on s'assure que notre travail est effectué dans le respect de l'environnement.";
    let texteANG="At ETC AudioVisual, we understand the importance of taking care of our environment. We make sure that our work sites are kept clean and free of trash or debris, and we ensure that all of our materials are disposed of properly. We strive to minimize our environmental footprint and be considerate of other professionals onsite. We also care about the safety of our work site, and we make sure that all of our employees adhere to the safety standards. By taking these measures, we ensure that our work is done in an environmentally friendly manner.";

    let titreFR= "NOTRE ENVIRONNEMENT"
    let titreENG= "OUR ENVIRONMENT"

  return (
    <section className="ourEnvironmentSection">
      <div className="ourEnvironmentGlobalDiv">

        <h3 className="ourLeadershipTitle">{titre}</h3>

        <div className="ourEnvironmentDiv">

          <div className="ourEnvironmentText">
            <p>{texte}</p>
          </div>

          <div className="GlobalOurEnvironmentPictures">
              <img src={OurEnvironmentAfter1} className="OurEnvironmentPicture" alt="" />
              <img src={OurEnvironmentBefor1} className="OurEnvironmentPicture" alt="" />
            
              <img src={OurEnvironmentAfter2} className="OurEnvironmentPicture" alt="" />
              <img src={OurEnvironmentBefor2} className="OurEnvironmentPicture" alt="" />    
          </div>

        </div>

      </div>
      
    </section>
  )
}

export default OurEnvironment;
