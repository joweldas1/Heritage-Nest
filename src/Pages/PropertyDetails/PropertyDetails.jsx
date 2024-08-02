import { useParams } from 'react-router-dom';
import UsePropertyData from '../../Hooks/UsePropertyData';
import Title from '../../Shared/Sections/PropertyDetails/Title';
import AccommodationDetails from '../../Shared/Sections/PropertyDetails/AccommodationDetails';


const PropertyDetails = () => {
    const params =useParams()
    const [property] = UsePropertyData()

    const singleData = property?.filter((d)=>d?.id===params?.id)
    const data = singleData[0]
 
   

    return (
        <div className='px-[112px]'>
            <Title title={data?.title} location={data?.location} price={data?.price} />
            <AccommodationDetails data={data}/>
        </div>
    );
};

export default PropertyDetails;