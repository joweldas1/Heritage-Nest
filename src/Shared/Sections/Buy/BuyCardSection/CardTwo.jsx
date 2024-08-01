import './card.css'
import { FaArrowDown } from 'react-icons/fa';

const CardTwo = ({title}) => {
    return ( 
        <div className="p-6  bg-[rgba(236,245,255,1)] cardShadow rounded-xl">
        <h1 className='text-[rgba(0,81,161,1)] text-4xl leading-10 font-bold
        font-montserrat'>{title}</h1>
        <p className='text-sm text-[rgba(31,41,55,1)]  font-poppins font-normal leading-7   '>New Flat Listed</p>
        <div className='flex justify-between items-center mt-6'>
            <a href="" className='text-[rgba(0,81,161,1)] underline font-poppins font-normal '>View All</a>
            <FaArrowDown className='text-[rgba(0,81,161,1)] ring-1 rounded-full  ring-[rgba(0,81,161,1)] text-xl'/>
        </div>
    </div>
    );
};

export default CardTwo;