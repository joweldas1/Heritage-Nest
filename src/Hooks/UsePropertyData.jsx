import { useEffect, useState } from 'react';
import data from '../provider/data'
const UsePropertyData = () => {
   const [property,setProperty] = useState([])
   useEffect(()=>{
    setProperty(data)
   },[])

   return [property]
};

export default UsePropertyData;