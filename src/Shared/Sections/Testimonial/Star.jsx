import { FaStar } from 'react-icons/fa6';

const Star = ({rating}) => {
    const totalStar = 5
    const rate =parseInt(rating)
    console.log(rating);
    return (
        <div className='flex justify-center'>
            {[...Array(totalStar)].map((_,index )=>(
                <FaStar key={index} 
                className={`w-6 text-center ${index<rate?"text-[rgba(254,200,75,1)]":"text-yellow-200"}`}
                />
            ))}
        </div>
    );
};

export default Star;