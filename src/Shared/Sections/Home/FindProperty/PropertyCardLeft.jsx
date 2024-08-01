import { BiPlay, BiSearch } from "react-icons/bi";

const PropertyCardLeft = ({imgOne,imgTwo}) => {
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse  items-start lg:gap-20 lg:h-[90vh] '>
        {/* image-right */}
        <div className='w-full relative mt-4 lg:mt-0'>
        <img src={imgTwo} alt="living room image2" className='lg:w-[452px] lg:h-[240px] w-72 rounded-[8px] shadowTwo absolute left-[16%]' />
            <img src={imgOne} alt="living room image1" className='lg:w-[458px] lg:h-[400px] w-72 rounded-[8px] shadowOne mt-24 ml-4 lg:ml-0'  />
          
            <div className='w-14 h-14 lg:w-[70px] lg:h-[70px] bg-[rgba(0,89,177,1)] flex items-center justify-center rounded-full absolute z-50 top-14 left-8 '>
            <BiPlay className='text-[rgba(255,255,255,1)] text-5xl ml-2'/>
            </div>
        </div>


        {/* text-left */}
        <div className='w-full '>
            <p className='text-[rgba(240,103,17,1)] font-medium text-xl text-center lg:text-left'>—— Property Buying </p>
            <h1 className='text-[rgba(17,24,39,1)] text-4xl mt-3 font-semibold leading-tight text-center lg:text-left lg:leading-snug'>Efficient and Transparent Home Buying Solution</h1>
            <p className='text-[#5f687c] text-md my-5 text-center lg:text-left px-5 lg:px-0'>It is long established face that a render will be distracted bt readable of a page when looking as its layout
            </p>
            <button className='findBtn mx-auto lg:mx-0 flex items-center justify-center mt-7 gap-1 srcBtn ' > 
                        <BiSearch /> 
                        <span>Find Property</span>
                    </button>
            </div>
    </div>
    );
};

export default PropertyCardLeft;