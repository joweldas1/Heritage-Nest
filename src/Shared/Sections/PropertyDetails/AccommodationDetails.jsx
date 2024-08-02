import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { RiArchiveDrawerFill } from "react-icons/ri";
import './propertyDetail.css'
import Range from "./Range";

const AccommodationDetails = ({data}) => {
    const bath = data?.bath;
    const bed = data?.bedRoom;
    const balcony = data?.balcony;
    const accommodation = data?.accommodation;
    const floor = data?.floor;
    const condition = data?.condition

    const size = data?.size
    const usd = parseInt(data?.price)
    




    console.log(data);
    return (
        <div className="w-full flex gap-5">
            {/* left */}
            <div className="w-3/5 overflow-hidden">
            <img src={data?.featureImage} alt="living room" className="w-full h-[400px] " />
            <div className="flex justify-between overflow-hidden mt-2">
                {
                    data?.featuredImage.map((d,idx)=>(
                        <div key={idx} className=" ">
                            <img src={d} alt="" className="w-40 h-32 transform transition-transform duration-300 
                            hover:scale-125 overflow-hidden" />
                        
                        </div>
                         
                    ))
                }
                
            </div>



            <div className="bg-[rgba(229,231,235,1)] p-5 my-5 rounded-md overview-shadow">
                <h1 className="text-[rgba(0,0,0,1)] text-2xl font-semibold font-montserrat">Overview</h1>

                {/* Overview bar */}
                <div className=" mt-6 mb-4 flex justify-between bg-[rgba(255,255,255,1)] p-2 items-center rounded-md property-shadow">
               
                    <div className="flex items-center gap-2">
                        <IoBedOutline className="text-[rgba(28,27,31,1)]  text-xl font-semibold"/>
                        <p className="text-[rgba(48,48,48,1)] text-md leading-6 font-medium font-montserrat"><span className="font-semibold">{bed}</span> Beds</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdBalcony className="text-[rgba(28,27,31,1)]  text-xl font-semibold"/>
                        <p className="text-[rgba(48,48,48,1)] text-md leading-6 font-medium font-montserrat"><span className="font-semibold">{balcony}</span> Balcony</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBath className="text-[rgba(28,27,31,1)]  text-xl font-semibold"/>
                        <p className="text-[rgba(48,48,48,1)] text-md leading-6 font-medium font-montserrat"><span className="font-semibold">{bath}</span> Bath</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <RiArchiveDrawerFill className="text-[rgba(28,27,31,1)]  text-xl font-semibold"/>
                        <p className="text-[rgba(48,48,48,1)] text-md leading-6 font-medium font-montserrat">{accommodation}</p>
                    </div>
                </div>

                <div>
                    {/* overview two */}
                    <div className="flex justify-between my-5">
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Carpet Area</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">{size}</h1>
                            <p className="text-[rgba(83,83,83,1)] text-sm font-normal font-montserrat">$ 225/sqft</p>
                        </div>
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Floor</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">{floor}</h1>
                        </div>
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Transaction Type</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">{condition}</h1>
                        </div>
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Lift</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">1</h1>
                        </div>
                    </div>

                    <div className="flex justify-between my-5">
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Facing</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">North - East</h1>
                        </div>
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Additional Room</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">1 Servant room & 1 guest room</h1>
                        </div>
                        <div>
                            <p className="text-[rgba(92,92,92,1)] text-md font-montserrat">Area of Construction</p>
                            <h1 className="text-[rgba(16,16,16,1)] font-medium ">New Construction</h1>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            {/* right */}
            <div className="w-2/5">
            {/* property bid */}
            <div className="bg-[rgba(236,245,255,1)]  p-7">
                <h1 className="text-[rgba(107,114,128,1)] text-md font-poppins">Property Value</h1>
                <p className="text-[rgba(37,35,35,1)] text-2xl font-bold font-montserrat leading-8 mt-1 mb-3">${usd - 10000} - ${usd + 1000} </p>
                <p className="text-[rgba(107,114,128,1)]  text-md font-poppins font-semibold my-3">Your bid can not be than 10% of the property minimum value</p>
                <label htmlFor="Min" >
                    <p className="text-[rgba(37,35,35,1)] text-sm font-poppins">min</p>
                    <input type="text" placeholder="300k"  className="bg-[rgba(255,255,255,1)] px-3 py-3 rounded w-full text-[rgba(37,35,35,1)] text-md font-inter  leading-5"/>
                </label>
                <label htmlFor="max">
                    <p className="text-[rgba(37,35,35,1)] text-sm font-poppins">Max</p>
                    <input type="text" placeholder="300k"  className="bg-[rgba(255,255,255,1)] px-3 py-3 rounded w-full text-[rgba(37,35,35,1)] text-md font-inter  leading-5"/>
                    
                </label> <br />
                    <Range usd={usd}/>
                <button >Bid</button>
            </div>
            </div>
            
        </div>
    );
};

export default AccommodationDetails;