import { useState } from 'react';
import './buy.css'
import BuySearchInput from './BuySearchInput';

const toggleField =[
    {
        title:'Buy',
        id:'#buy'
    },
    {
        title:'Rent',
        id:'#rent'
    },
    {
        title:'PG',
        id:'#pg'
    },
    {
        title:'Commercial',
        id:'#commercial'
    },
    
]
const BuySearchForm = () => {
    const [isToggle,setIsToggle] = useState("Buy")
    console.log(isToggle);




    return (
        <div className='z-[1000] mx-2 '>
            <div className="w-full mx-auto lg:w-3/5   bannerSearchDiv px-5 py-5">
            <div className='flex gap-6 border-b-2 border-b-[rgba(236,245,255,1)]'>
                {
                    toggleField.map((d,idx)=>(
                        <button  onClick={()=>setIsToggle(d.title)} key={idx}>
                            <a 
                        className={`${isToggle===d.title && "border-b-2 border-[rgba(0,89,177,1)] text-[rgba(0,89,177,1)]"} text-[rgba(75,85,99,1)] font-semibold`}
                        
                        href={d.id}> {d.title}</a> </button>
                    ))
                }
            </div>
            {/* input filed */}
            {
                isToggle ==="Buy" && <BuySearchInput/>
            }
             {
                isToggle ==="Rent" && <BuySearchInput/>
            }
             {
                isToggle ==="PG" && <BuySearchInput/>
            }
              {
                isToggle ==="Commercial" && <BuySearchInput/>
            }
            
            </div>
        </div>
    );
};

export default BuySearchForm;