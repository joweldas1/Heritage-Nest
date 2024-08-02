import React from 'react';
import { MdPowerSettingsNew, MdPark, MdSecurity, MdFilterListOff, MdBuild, MdLocalLaundryService, MdTv } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { FaHouseUser, FaDumbbell, FaWater, FaTruckLoading, FaSchool } from "react-icons/fa";
import { IoIosFootball, IoMdFitness, IoMdHome } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall, FiWifi } from "react-icons/fi";
// import { GiBasketballCourt, GiBookCover, GiCarKey } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaBasketballBall, FaBook, FaKey } from "react-icons/fa";


const fristRow = [
    { icon: <MdPowerSettingsNew />, title: "PowerBackup" },
    { icon: <MdFilterListOff />, title: "Life" },
    { icon: <FaHouseUser />, title: "Club House" },
    { icon: <FaDumbbell />, title: "Gymnasium" },
    { icon: <MdPark />, title: "Park" },
    { icon: <AiOutlineCar />, title: "Reserved Parking" },
    { icon: <MdSecurity />, title: "Security" },
    { icon: <FaWater />, title: "Water Storage" },
    { icon: <IoMdHome />, title: "Private Terrance/Garden" },
    { icon: <IoIosFootball />, title: "Vaastu Complaint" },
    { icon: <FaTruckLoading />, title: "Service/Good Lift" },
    { icon: <AiOutlineCar />, title: "Visitor Parking" },
    { icon: <FiPhoneCall />, title: "Intercom Facility" },
    { icon: <MdBuild />, title: "Maintenance Stuff" },
    { icon: <RiDeleteBin6Line />, title: "Waste Disposal" },
    { icon: <MdLocalLaundryService />, title: "Laundry Service" },
    { icon: <FiWifi />, title: "Internet/Wifi Connectivity" },
    { icon: <MdTv />, title: "DTH Television Facility" },
    { icon:  <FaKey/>, title: "Piped Gas" },
    { icon: <FaBook/>, title: "Jogging and Strolling Track" },
    { icon: <FaSchool />, title: "Outdoor Tennis Courts" },
    { icon: <HiOutlineAcademicCap />, title: "Early Learning Center" },
    { icon: <FaBasketballBall/>, title: "Kids Play Area" },
    { icon: <IoMdFitness />, title: "Indoor Squash and Badminton Courts" },
];


const Amenities = () => {
    return (
        <div className='bg-[rgba(229,231,235,1)] mt-5 mb-20 p-2 lg:p-5 amenity-shadow  '>
            <h1 className='text-[rgba(0,0,0,1)] text-2xl leading-7 font-montserrat font-semibold'>Amenities</h1>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 py-5 mx-2 lg:mx-5'>
                {fristRow.map((d, index) => (
                    <div key={index} className='flex flex-col lg:flex-row  justify-center lg:justify-start items-center gap-2 text-center lg:text-left'>
                        <p className='text-xl w-8 h-8 flex items-center justify-center bg-[rgba(255,255,255,1)] rounded icon-shadow'>{d.icon}</p>
                        <p className='text-[rgba(16,16,16,1)] text-sm lg:text-md leading-6 font-medium font-montserrat'>{d.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Amenities;
