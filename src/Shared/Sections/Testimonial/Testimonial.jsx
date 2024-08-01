import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../../provider/review";
import './testimonial.css'
import { FaStar } from "react-icons/fa6";
import Star from "./Star";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    setReview(reviews);
  }, []);
  console.log(review);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024, // For screens smaller than 1024px
          settings: {
            slidesToShow: 2, // Show 2 slides
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // For screens smaller than 768px
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <div className="lg:px-[112px] mb-20">
      <h1 className="text-[rgba(24,24,24,1)] text-center text-4xl leading-10 font-bold font-montserrat my-10">
        Testimonials
      </h1>
     <div>
     <Slider {...settings}>
      {review.map((item, index) => (
        <div key={index} className=" text-center bg-[rgba(236,245,255,1)]  px-10 py-10 rounded-sm">
           <Star rating={item.star}/>
           <p className="my-6 text-lg text-[rgba(129,129,129,1)] font-normal font-poppins leading-5">
            {item.review}
           </p>
         <img src={item.image} className="w-14 h-14 rounded-full mx-auto"/>
         <h1 className="text-2xl text-[rgba(17,24,39,1)] font-semibold font-montserrat leading-7    ">{item.name}</h1>
         <p className="text-[rgba(107,114,128,1)] text-md font-normal leading-5">{item.profession}</p>
        </div>
      ))}
    </Slider>
     </div>
     
    </div>
  );
};

export default Testimonial;
