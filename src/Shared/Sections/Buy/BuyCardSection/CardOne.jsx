import {FaArrowDown} from 'react-icons/fa'
import './card.css'
const CardOne = ({title}) => {
    return (
        <div className="p-6 bg-[rgba(253,240,231,1)]  rounded-xl cardShadow">
            <h1 className='text-[rgba(217,93,15,1)] text-4xl leading-10 font-bold
            font-montserrat'>{title}</h1>
            <p className='text-sm text-[rgba(31,41,55,1)]  font-poppins font-normal leading-7   '>New Flat Listed</p>
            <div className='flex justify-between items-center mt-6'>
                <a href="" className='text-[rgba(238,102,17,1)] underline font-poppins font-normal '>View All</a>
                <FaArrowDown className='text-[rgba(238,102,17,1)] ring-1 rounded-full  ring-[rgba(238,102,17,1)] text-xl'/>
            </div>
        </div>
    );
};

export default CardOne;