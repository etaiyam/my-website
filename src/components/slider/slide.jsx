import { useState,useEffect } from "react";


const Slide = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

// chaque 3 secondes le slider change d'image
{
  /**
   * 
   * useEffect(() => {
    setTimeout(() => {
      goToNext();
    }, 3000)
  });
   */
}
  

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const fleche = {
    display: "flex",
    justifyContent: "space-between"
  }
  
  const rightArrowStyles = {
    right: "15%",
    fontSize: "45px",
    color: "#002556",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    fontSize: "45px",
    color: "#002556",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const sliderStyles = {
    height: "100%",
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            
          </div>
        ))}
      </div>

      <div style={fleche}>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>

    </div>
  );
};

export default Slide;