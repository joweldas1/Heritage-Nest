import BuyBanner from '../../Shared/Sections/Buy/BuyBanner';
import BuyCard from '../../Shared/Sections/Buy/BuyCardSection/BuyCard';
import PopularProperties from '../../Shared/Sections/Buy/PopularProperties/PopularProperties';
import NewProperty from '../../Shared/Sections/Buy/NewProperty/NewProperty';
import Testimonial from '../../Shared/Sections/Testimonial/Testimonial';
import PostBar from '../../Shared/Sections/Buy/PostBar';

const Buy = () => {
    return (
        <div>
         <BuyBanner/>
         <BuyCard/>
         <PopularProperties/>
         <NewProperty/>
         <Testimonial/>
         <PostBar/>
         
       
        </div>
    );
};

export default Buy;