import React,{useState} from 'react'
import './Slider.css';
function Slider() {
    const [firstRange , setFirstRange ] = React.useState(30);
    const [secondRange , setSecondRange ] = React.useState(70);
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    let minGap = 5;
    // const onFirstRangeChange = e =>{
    //         setFirstRange(e.target.value);
    //         if(secondRange - firstRange <=minGap){
    //             setFirstRange(e.target.value);
    //         }

    //     if(secondRange - firstRange <=minGap){
    //         setFirstRange(secondRange-minGap)
    //         setFlag1(true);
    //     }
    // }
    // const onSecondRangeSlide = e =>{
    //     setSecondRange(e.target.value);
    //     if(flag2){
    //         if(secondRange - firstRange >=minGap){
    //             setSecondRange(e.target.value);
    //         }
    //     }
    //     else if(secondRange - firstRange <=minGap){
    //         setSecondRange(firstRange+minGap)
    //         setFlag2(true);
    //     }
    // }
    const onFirstRangeChange = e =>{
        setFirstRange(e.target.value);
        // if(secondRange - firstRange <= minGap){
        //     setFirstRange(secondRange -minGap)
        // }
    }
    const onSecondRangeSlide =  e =>{
        setSecondRange(e.target.value);
        // if(secondRange - firstRange <= minGap){
        //     setSecondRange (firstRange + minGap)
        // }
    }
    return (
        <div className="range-slider-fliter-container">
            <div className = "slider-track"></div>
            <div className="slider-container">
                <input 
                 type = "range"
                 className = " range-slider slider-1"
                 value = { firstRange }
                 min = "60"
                 max = "100"
                onChange = { onFirstRangeChange }
                 />
                 <input
                  className = " range-slider slider-2"
                  type = "range"
                  min = "60"
                  max = "100"
                  value = { secondRange }
                  onChange = { onSecondRangeSlide} 
                  />
            </div>
            <div className = "slide-values">
                <span className = "range-1">{firstRange>99?`${firstRange}L`:`${firstRange}K`}</span>
                <span>-</span>
                <span className = "range-2">{`${secondRange}K`}</span>
            </div>
        </div>
    )
}

export default Slider
