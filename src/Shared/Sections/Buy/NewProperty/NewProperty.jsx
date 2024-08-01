import { useEffect, useState } from "react";
import CommonBanner from "../CommonBanner";
import interior from '../../../../provider/data'

const NewProperty = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(interior)
    },[])
    return (
        <div className='lg:px-[112px] px-2 mb-20 mt-16'>
            <CommonBanner data={data} title={"New Listed Properties"} />
        </div>
    );
};

export default NewProperty;