import './services.css'
import { useSelector} from 'react-redux'
import { useState,useEffect } from "react";

function Services (){
let boolean = useSelector((state) => state.boolean.bool)
let [texte,setTexte]=useState()

console.log("test et test"+boolean)
useEffect(() => {
  // Update the document title using the browser API
  if(boolean===false){
    setTexte(texteFR)
 }
 else{
  setTexte(texteANG)
 }
 console.log(texte)
});
//le textes en deux langues
let texteFR="Chez ETC AudioVisual, nous comprenons l’importance de fournir nos services dans les délais et selon le plan. Nous avons une équipe de techniciens experts et de chefs de projet qui travaillent avec diligence pour garantir que chaque projet soit terminé à temps et dans les limites budgétaires. Grâce à notre équipe d’intégrateurs audiovisuels bien qualifiés, nous sommes en mesure de garantir la qualité de notre travail et la réalisation satisfaisante de chacun de nos différents services. Compte tenu de notre expérience, nous pouvons vous assurer en toute confiance que votre projet sera réalisé rapidement, efficacement et à votre satisfaction.";
let texteANG="At ETC AudioVisual, we understand the importance of delivering our services on schedule and according to plan. We have a team of expert technicians and project managers who work diligently to ensure that each project is completed on time and within the budget limits. With our highly skilled team of AV integrators, we are able to guarantee quality of our work, and the satisfactory completion of each of our various services. Given our track record, we can confidently assure you, that your project will be completed quickly, efficiently, and to your satisfaction.";

//changer de langue


  return (
    <section className="servicesSectionText">
      <h3 className="servicesTitle">SERVICES</h3>
      <p>{texte}</p>
    </section>
  )
}
export default Services;