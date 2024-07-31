import { BiSearch } from 'react-icons/bi';
import './banner.css'
import BannerSlide from './BannerSlide';


const Banner = () => {
    return (
        <div className={ `w-full bannerImg  backdrop-blur-md`}  >
           <div className='w-full flex flex-col justify-center items-center lg:w-[85%] h-full  
           bg-[rgba(0,0,0,0.5)] lg:bg-gradient-to-b from-[rgb(0,0,0,.30)]  via-[rgba(0,0,0,.90)] to-[rgba(0,0,0,1)] lg:backdrop-blur-md relative'>
            <div className=''>

                <div className='w-full lg:w-3/5  text-center   absolute left-0 lg:left-[34%] top-[30%] '>
                   {/* slider */}
                   <BannerSlide/>
                
                    <button className='mx-auto flex items-center justify-center gap-1 srcBtn ' > 
                        <BiSearch /> 
                        <span>Find Property</span>
                    </button>
                </div>

            </div>
           </div>
        </div>
    );
};

export default Banner;