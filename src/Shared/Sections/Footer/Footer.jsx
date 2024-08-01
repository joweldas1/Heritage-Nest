import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterSocialIcon from "./FooterSocialIcon";

const Footer = () => {
  return (
    <div className="w-full   bg-[rgba(236,245,255,1)]">
      <div className="lg:px-[112px] ">
        {/* top footer */}
        <div className="flex flex-col lg:flex-row lg:gap-5 py-[48px]">
            <div className="mx-5 text-center lg:text-left lg:w-2/5 h-full ">
            <FooterLogo/>
            </div>
            <div className="w-full lg:w-3/4 h-full ">
            <FooterLinks/>
            </div>
        </div>

        {/* bottom footer  - all right reserved and social icon */}
        <div className="w-full ">
            <hr  className="w-full h-1 bg-[rgba(197,226,255,1)]"/>
            <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 justify-between items-center h-full ">
            <p className="text-[rgba(102,112,133,1)] text-sm"> &copy; 2024 Heritage - Nest. All right reserved. </p>
            <FooterSocialIcon/>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
