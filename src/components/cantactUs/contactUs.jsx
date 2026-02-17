import { useSelector} from 'react-redux'
import { useState,useEffect } from "react";
import './contactUs.css';

function ContactUs (){
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
let texteFR="NOUS CONTACTER";
let texteANG="CONTACT US";

//changer de langue


  return (
    
    <section className="contacUsSection">
    <div className="contacUsTitle">
      <h1>{texte}</h1>
    </div>
      
  </section>
  )
}
export default ContactUs;