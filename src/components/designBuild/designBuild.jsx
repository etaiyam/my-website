import './designBuild.css'
import { useSelector} from 'react-redux';
import { useState,useEffect } from "react";
import Designbuiled from '../../assets/designBuild.jpg';


function DesignBuild (){

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
  let texteFR="Lors de la conception d'un système audiovisuel, nous nous efforçons d'optimiser l'expérience utilisateur et de veiller à ce que tous les composants fonctionnent parfaitement ensemble. Cela implique de comprendre les besoins de l'utilisateur et de savoir comment incorporer la bonne combinaison de matériel et de logiciels, pour répondre à ses besoins. Nous assurons la sélection des composants, qu'ils soient correctement connectés et configurés. Nous tenons également compte de l'environnement dans lequel le système sera utilisé et de tout autre facteur susceptible d'affecter l'expérience de l'utilisateur. Enfin, nous vérifions notre installation pour nous assurer qu'elle fonctionne correctement. ";
  let texteANG="In the process of designing an AV system, we strive to optimize the user experience and ensure all components work together seamlessly. This involves understanding the user's needs and knowing how to incorporate the right combination of hardware and software to meet those needs. This includes selecting the right components and ensuring they are properly connected and configured. Additionally, we consider the environment in which the system will be used and any other factors that could affect the user's experience. Finally, we test and verify our installation to ensure it functions as expected.";
  
  let titreFR= "CONCEPTION-CONSTRUCTION"
  let titreENG= "DESIGN-BUILD"

  return (
    <section  className="designBuildSection">
      <div id="designBuildSectionId">
      </div>
      <div>
        <h3 className="designBuildTitle">{titre}</h3>
        <p>{texte}</p>
      </div>
      <div>

      </div>
      
    </section>
  )
}
export default DesignBuild;

