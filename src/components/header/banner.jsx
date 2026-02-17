import React from "react"
import './banner.css';
import { useSelector} from 'react-redux'
import { useState,useEffect } from "react";

  function Banner() {

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
    let texteFR="BIENVENUE CHEZ ETC AUDIOVISUAL";
    let texteANG="WELCOME TO ETC AUDIOVISUAL";

    //changer de langue

    return (
      <section className="bannerSection">
        <div className="bannerTitle">
          <h1>{texte}</h1>
        </div>
          
      </section>
    )
  }
  export default Banner;