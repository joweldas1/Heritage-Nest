import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Sections/Navbar/Navbar";
import Footer from "../Shared/Sections/Footer/Footer";

const HomeLayout = () => {
    return (
        <div className="font-inter max-w-[1440px] mx-auto ">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;