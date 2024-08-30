import { useEffect, useState } from "react";
import Slide from "./Slide";

export function Slides({ slides }) {
  const [currSlide, setCurrSlide] = useState(slides[0]);
  const [restart, setRestart] = useState(false);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {    
    if (currSlide.title === slides[0].title) {
      setPrev(true);
      setRestart(true);
      setNext(false);
    }
    else if (currSlide.title === slides[slides.length - 1].title) {
      setNext(true);
    }else{
        setNext(false)
         setPrev(false);
         setRestart(false);
    }
  }, [currSlide.title]);

  const handleRestart = () => {
        setCurrSlide(slides[0])
  }
  const handlePrev = () => {
    const prevInd = slides.findIndex((s) => s.title===currSlide.title) -1
    setCurrSlide(slides[prevInd])
  }
  const handleNext = () => {
const nextInd = slides.findIndex((s) => s.title===currSlide.title)+1;
setCurrSlide(slides[nextInd]);
  }
  return (
    <div className="nav">
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={restart}
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={prev}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={next}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <Slide data={currSlide} />
    </div>
  );
}
