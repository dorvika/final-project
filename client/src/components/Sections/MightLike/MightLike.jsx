import './style.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MightLike = ({SectionTitle = "Related Items"}) => {
  const slides = [1,2,3,4,5,6]

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 380
  }
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 380
  }

  return (
    <section id="body">
      <h1>{SectionTitle}</h1>
      <div id="main-slider-container">
        <KeyboardArrowLeftIcon sx={{ width: "40px", height: "40px" }} className="slider-icon left" onClick={slideLeft}/>
        <div id="slider">
          {slides.length > 0 ?
            <>
              {slides.map((el,index) => (
                <div className="slider-card" key={index}>{el}</div>
              ))}
            </>
            : <p>Ups :(</p>}
        </div>
        <KeyboardArrowRightIcon sx={{ width: "40px", height: "40px" }} className="slider-icon right" onClick={slideRight}/>
      </div>
    </section>
  );
};

export default MightLike;