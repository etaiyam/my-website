import React from "react"
import './ourLadership.css';
import { useSelector} from 'react-redux'
import { useState,useEffect } from "react";
import ourLadership from '../../../../src/assets/Leadership.png'

  function OurLadership() {

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
    let texteFR="Chez ETC AudioVisual, nous nous appuyons sur l'expérience acquise par notre équipe de direction, apportant l'expertise audiovisuelle de France, d'Allemagne, des États-Unis et d'Israël. Au fil des années, nous avons cultivé une multitude de relations et de partenariats internationaux dans l'industrie. Notre équipe de direction est composée de personnes expérimentées, qui ont géré avec succès une multitude de projets dans de nombreux pays. Grâce à leurs vastes connaissances et à leur expérience, ils apportent des idées et des solutions originales et spécifiques qui contribuent à la réussite de tout projet d'intégration audiovisuelle. Cela est possible grâce à une étroite collaboration avec les clients pour s'assurer que leurs besoins sont satisfaits. De la conception à la réalisation, ils sont là pour vérifier le bon déroulement du projet. Nous savons que notre équipe de direction peut répondre à vos besoins audiovisuels avec une qualité et un service conformes aux normes de l'industrie.";
    let texteANG="At ETC AudioVisual we rely on the cumulative acquired experience of our leadership team, bringing AV expertise from France, Germany the US and Israel. We also rely on the relationships and partnerships we have acquired and cultivated over the years in the AV and IT industry. Our executive team consists of industry veterans who have managed successful projects in many countries across the globe. With their large knowledge and experience, they bring unique insights and solutions to help make any AV integration project a success. Our leadership team also works closely with clients to ensure that their AV integration needs are met, from concept to completion. They are there to make sure that the project runs smoothly and efficiently. We are confident that our leadership team can meet your AV needs with industry standard quality and service.";

    let titreFR= "NOTRE EXPERTISE"
    let titreENG= "OUR LEADERSHIP"

    return (
      <section className="ourLadershipSection">

        <div className="ourLadershipGlobalDiv">
          
          <div className="ourLadershipPictureDiv">
          <img  src={ourLadership} className="ourLadershipPicture" alt="" />
          </div>
          
          <div className="ourLadershipTextDiv">
          <h3 className="ourLadershipTitle">{titre}</h3>
            <p className="ourLadershipText">{texte}</p>
          </div>

        </div>
          
      </section>
    )
  }

  export default OurLadership;
