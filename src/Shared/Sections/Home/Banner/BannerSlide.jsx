import { Swiper, SwiperSlide, } from 'swiper/react'
import { Autoplay,Pagination, Navigation ,Scrollbar} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const BannerSlide = () => {
    const bannerTitle=[
        {
            title:"Your Portal to India's Exquisite Real Estate",
            subTitle:"Seamlessly connecting you to the heartbeat of India's prime properties"
        },
        {
            title:" India's Exquisite Largest Real Estate Company Ever",
            subTitle:"To provide best service to our client is our mission"
        },
        {
            title:" It's Time to Select Your Property ,Why late",
            subTitle:"To provide best service to our client is our mission"
        },

    ]

    return (
        <Swiper
        autoplay={{
            delay: 2500,
            pauseOnMouseEnter:true,
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        modules={[Autoplay,Navigation,Scrollbar,Pagination]}

        className='mySwiper'
      >
     {
        bannerTitle.map((d,idx)=>(
            <SwiperSlide key={idx} className='text-[rgba(255,255,255,1)] px-1 h-full'>
                <h1 className='text-3xl lg:text-5xl font-semibold leading-normal'>{d.title}</h1>
                <p className='text-xl my-5'>{d.subTitle}</p>
            </SwiperSlide>
        ))
     }
  
      </Swiper>
    );
};

export default BannerSlide;