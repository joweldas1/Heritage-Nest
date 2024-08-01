import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './buy.css'; 
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";


const CommonBanner = ({data,title}) => {
    console.log(data);

    return (
        <div>
            <div className="flex justify-between items-center lg:w-3/5 w-full my-4 ">
                <h1 className="text-[rgba(17,24,39,1)] text-2xl  lg:text-3xl leading-10 font-montserrat font-semibold">{title}</h1>
                <Link className="text-[rgba(0,89,177,1)] text-sm underline font-semibold">See all Property</Link>
            </div>
            <div>
            <div>
                <Swiper
    loop={data.length > 3}
    spaceBetween={30}
    
    breakpoints={{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView:3,
        },
    }}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay,  Navigation]}
            className="mySwiper"
        >
                {
                    data?.map((d,idx)=>(
                     
                        <SwiperSlide key={idx}  className="bg-[rgba(249,250,251,1)] card-shadow">
                            <Link to={`/property/${d.id}`}>
                            <img src={d.featureImage} className="w-full h-[200px] rounded-lg relative"  alt={`${idx+1} image`} />
                            <div className="absolute top-[44%] left-5 bg-[rgba(253,240,231,1)] flex gap-1 items-center p-1 rounded-sm ">
                                <IoMdPhotos className="text-[rgba(238,102,17,1)]"/>
                                <p className="text-[rgba(16,16,16,1)] text-base leading-5 font-inter font-semibold">20</p>

                            </div>
                            <div className="p-2">
                                <div className="flex justify-between items-center">
                                    <p className="bg-[rgba(197,226,255,1)] text-[rgba(0,37,74,1)] text-sm font-normal font-poppins text-center p-1 rounded-md">Apartment</p>
                                    <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[rgba(238,102,17,1)] ">
                                    </div>
                                    <p className="text-[rgba(17,24,39,1)] font-poppins text-md font-semibold leading-6"> Ready to move</p>
                                    </div>
                                </div>
                                    <hr className="bg-[rgba(209,213,219,1)] h-[2px] w-full mt-2 mb-2" />

                                    <h1 className="text-[rgba(17,24,39,1)] text-[20px] font-montserrat font-semibold leading-8">{d?.type}</h1>
                                    <div className="flex gap-1 items-center">
                                        <FaMapMarkerAlt className="text-2xl font-semibold text-[rgba(238,102,17,1)]"/>
                                        <p className="text-[rgba(107,114,128,1)] text-lg leading-6 font-normal">{d?.location}</p>
                                    </div>
                                    <p className="text-[rgba(17,24,39,1)] text-2xl font-semibold font-montserrat leading-8 mt-5">
                                        $ {d?.price}
                                    </p>
                            </div>
                            </Link>
                        </SwiperSlide>
                      

                    ))
                }
                </Swiper>
            </div>
            </div>
            
        </div>
    );
};

export default CommonBanner;