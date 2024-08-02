
import UsePropertyData from "../../../../Hooks/UsePropertyData";
import CommonBanner from "../CommonBanner";

    const PopularProperties = () => {
        const [property] = UsePropertyData()
     
        return (
            <div className='lg:px-[112px] px-2 mb-28 mt-16'>
                <CommonBanner data={property} title={"Popular  Properties"} />
            </div>
        );
    };

    export default PopularProperties;