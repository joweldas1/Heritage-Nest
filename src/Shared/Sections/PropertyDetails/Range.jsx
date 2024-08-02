import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './propertyDetail.css'

const Range = ({usd,setCurrentUsd,currentUsd}) => {
    


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
    
     </div>
       </>
        
    );
};

export default Range;