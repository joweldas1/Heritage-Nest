import { CiLocationOn } from "react-icons/ci";



const Title = ({title,location,price}) => {
    console.log(title,location,price);
    return (
        <div className="flex ">
            <div className="w-3/5 border-b border-[rgba(227,227,227,1)] my-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-[rgba(1,1,1,1)] text-xl font-semibold font-inter leading-6">{title}</h1>
                    <div className="flex justify-start items-center gap-1 my-2 ">
                        <CiLocationOn className="text-[rgba(238,102,17,1)] text-2xl "/>
                        <p className="text-[rgba(96,96,96,1)]  text-lg  leading-6 font-inter font-normal">{location}</p>
                        <hr />
                    </div>
                </div>
                <div>
                    <h1 className="text-rgba(1,1,1,1) text-[28px] leading-7 font-extrabold font-inter">$ {price}</h1>
                </div>
            </div>
            </div>
            {/* ------- */}
            <div className="2/5"></div>
        </div>
    );
};

export default Title;