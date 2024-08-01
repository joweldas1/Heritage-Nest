
    import { useEffect, useState } from 'react';
    import interior from '../../../../provider/data'
import CommonBanner from '../CommonBanner';
    const PopularProperties = () => {
        const [data,setData] = useState([])
        useEffect(()=>{
            setData(interior)
        },[])
        return (
            <div className='lg:px-[112px] px-2 mb-28 mt-16'>
                <CommonBanner data={data} title={"Popular  Properties"} />
            </div>
        );
    };

    export default PopularProperties;