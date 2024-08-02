import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './propertyDetail.css'

const Range = ({usd}) => {
    const [currentUsd,setCurrentUsd] = useState(usd)
    const minValue = currentUsd[0]
    const maxValue = currentUsd[1]
    console.log(minValue,maxValue,'------->');


    const handleChange = (value) => {
        setCurrentUsd(value);
      
      };
    
    
    return (
       <>
     
     <div className='my-5'>
     <RangeSlider 
        min={usd-10000}
        max={usd+10000}
        defaultValue={usd}
        value={currentUsd}
        onInput={handleChange}
        className="range-slider" 
        />
       <div className='flex justify-between my-2 '>
        <p className='text-[rgba(37,35,35,1)] text-sm font-medium font-inter leading-4'>${minValue?minValue:usd-1000}</p> <p className='text-[rgba(37,35,35,1)] text-sm font-medium font-inter leading-4'>${maxValue?maxValue:usd+10000}</p>
       </div>
     </div>
       </>
        
    );
};

export default Range;