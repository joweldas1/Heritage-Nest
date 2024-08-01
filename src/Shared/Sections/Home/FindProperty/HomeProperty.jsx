import PropertyCardRight from "./PropertyCardRight";
import imgOne from '/assest/homePropertyImage/one.jpg'
import imgTwo from '/assest/homePropertyImage/two.jpg'
import imgThree from '/assest/homePropertyImage/three.jpg'
import imgFour from '/assest/homePropertyImage/four.jpg'
import imgFive from '/assest/homePropertyImage/five.jpg'
import imgSix from '/assest/homePropertyImage/six.jpg'

import PropertyCardLeft from "./PropertyCardLeft";



const HomeProperty = () => {
    return (
        <div className="w-full lg:px-[112px] mt-20">
            {/* property-1 */}
           <div className="mb-36 lg:mb-0">
           <PropertyCardRight  imgOne={imgOne} imgTwo={imgTwo}/>
           </div>
            {/* property-2 */}
            <div className="my-10 mb-5 lg:mb-10">
            <PropertyCardLeft imgOne={imgThree} imgTwo={imgFour} />
            </div> 
            {/* property-3 */}
             <div>
            <PropertyCardRight imgOne={imgFive} imgTwo={imgSix}/>
            </div>
        </div>

    );
};

export default HomeProperty;