import { useParams } from 'react-router-dom';
import UsePropertyData from '../../Hooks/UsePropertyData';
import Title from '../../Shared/Sections/PropertyDetails/Title';
import AccommodationDetails from '../../Shared/Sections/PropertyDetails/AccommodationDetails';
import Amenities from '../../Shared/Sections/PropertyDetails/Amenities';
import OtherServices from '../../Shared/Sections/Home/OtherServices/OtherServices';
import CommonBanner from '../../Shared/Sections/Buy/CommonBanner';


const PropertyDetails = () => {
    const params =useParams()
    const [property] = UsePropertyData()

    const singleData = property?.filter((d)=>d?.id===params?.id)
    const data = singleData[0]
 
    // range 
    
   

    return (
        <div className=''>
            <div className='lg:px-[112px] px-2'>
            <Title title={data?.title} location={data?.location} price={data?.price} />
            <AccommodationDetails data={data}/>
            <Amenities/> 
            </div> 
            <OtherServices/>
            <div className='px-2 lg:px-[112px] my-9 lg:"my-16'>
            <CommonBanner data={property} title={"Others Nearby Properties"}  />
            </div>

        </div>
    );
};

export default PropertyDetails;