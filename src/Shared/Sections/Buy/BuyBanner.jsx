import './buy.css'
import BuySearchForm from './BuySearchForm';
const BuyBanner = () => {
    return (
        <div  className='w-full h-[310px] relative buyBanner '>
            <div className='w-full h-full buyBannerInner'>
            <div className='w-full absolute top-36'>
            <BuySearchForm/>
            </div>
            </div>
        </div>
    );
};

export default BuyBanner;