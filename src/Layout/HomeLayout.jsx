import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Sections/Navbar/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-inter max-w-[1440px] mx-auto ">
            {/* navbar */}
            <Navbar/>
            <Outlet/>
            {/* footer */}
        </div>
    );
};

export default HomeLayout;