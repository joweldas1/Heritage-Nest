import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const BuyCard = () => {
    return (
        <div className="w-full lg:px-[112px] mt-56 mb-10 grid grid-cols-2  px-3 lg:grid-cols-4 gap-10">
            <CardOne title={"2k+ "}/>
            <CardTwo title={"1K+"}/>
            <CardOne title={"4k+ "}/>
            <CardTwo title={"2K+"}/>
        </div>
    );
};

export default BuyCard;