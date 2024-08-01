import { RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";

const FooterSocialIcon = () => {
    return (
        <div className="text-[rgba(0,89,177,1)] text-2xl rounded-full flex gap-2 py-3 cursor-pointer ">
            <RxTwitterLogo/>
            <RxLinkedinLogo/>
            <FaFacebook/>
            <FaMedal/>
        </div>
    );
};

export default FooterSocialIcon;