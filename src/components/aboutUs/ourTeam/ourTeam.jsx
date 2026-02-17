import React from "react"
import imgOurTeam1 from '../../../assets/imgOurTeam1.png';
import imgOurTeam2 from '../../../assets/imgOurTeam2.png';
import './ourTeam.css';
import { useSelector} from 'react-redux'
import { useState,useEffect } from "react";

  function OurTeam() {
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
    let texteFR="Notre équipe est composée de professionnels expérimentés dans le domaine de l'intégration audiovisuelle, avec un large éventail de compétences et plusieurs années d’expérience. Nous avons une connaissance approfondie des technologies et des outils les plus récents, et nous pouvons fournir une vue d'ensemble de votre projet. Au fil des années, notre société s'est engagée auprès de divers clients dans le monde entier, nous permettant d'adapter nos solutions à tous les budgets et délais. Nous sommes passionné par la création d’un experience audiovisuelle parfaite, quelle que soit l’importance de votre projet. Grâce à notre équipe experimentée, vous pouvez être sûr que votre projet d'intégration audiovisuelle sera de haute qualité.";
    let texteANG="Our team is comprised of AV integration professionals with a wide range of skill and experience. We keep with the latest technologies and tools and can provide a comprehensive overview of the entire project. Over the years, our company has engaged with various clients worldwide, allowing us to adapt our solutions to fit any budget or timeline. We have a passion for creating the perfect audio-visual experience, no matter the size or scope of the project. With our team's expertise and experience, you can be sure that your AV integration project will be successful and of the highest quality.";

    let titreFR= "NOTRE ÉQUIPE"
    let titreENG= "OUR TEAM"

    return (
      <section className="ourTeamSection">

        <div className="ourTeamGlobalDiv">
          
          <h3 className="ourTeamTitle">{titre}</h3>
          <div className="ourTeam-div">
            
            <div className="ourTeamImg">
              <img src={imgOurTeam1} className="imgOurTeam" alt="" />
              <img src={imgOurTeam2} className="imgOurTeam" alt="" />
            </div>
            <div className="ourTeamText">
              <p>{texte}</p>
            </div>
          </div>

        </div>
        
      </section>
    )
  }

  export default OurTeam;
