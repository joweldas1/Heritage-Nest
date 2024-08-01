import Banner from "../../Shared/Sections/Home/Banner/Banner";
import HomeProperty from "../../Shared/Sections/Home/FindProperty/HomeProperty";
import OtherServices from "../../Shared/Sections/Home/OtherServices/OtherServices";

const Home = () => {
    return (
        <div>
           <Banner/>
           <HomeProperty/>
           <OtherServices/>
        </div>
    );
};

export default Home;