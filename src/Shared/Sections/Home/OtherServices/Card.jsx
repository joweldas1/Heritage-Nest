import { BiHome } from 'react-icons/bi';
import './otherService.css'

const Card = () => {
    return (
        <div className='bg-[rgba(236,245,255,1)] flex items-start gap-4 p-5 serviceShadow hover:bg-[rgba(238,102,17,1)] hover:text-white rounded-md group transition-colors ease-in-out duration-300 mx-6'>
    <div>
        <BiHome className='text-4xl text-white bg-[rgba(238,102,17,1)] rounded-sm p-1 transition-colors ease-in-out duration-300'/>
    </div>
    <div>
        <h1 className='text-[rgba(0,0,0,1)] text-2xl font-semibold group-hover:text-white transition-colors ease-in-out duration-300'>Advanced Search Property</h1>
        <p className='text-[rgba(129,129,129,1)] text-sm mt-3 font-semibold group-hover:text-white transition-colors ease-in-out duration-300'>Effortlessly find your dream property with advanced search filters.</p>
    </div>
</div>

    );
};

export default Card;