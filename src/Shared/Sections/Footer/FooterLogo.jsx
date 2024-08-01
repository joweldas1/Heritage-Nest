import logo from '/assest/logo.png'
const FooterLogo = () => {
    return (
        <div className='mb-5 lg:mb-0'>
            <img src={logo} alt="logo"  className='w-20 mx-auto lg:mx-0  '/>
            <p className='text-[rgba(71,84,103,1)] text-sm leading-6 lg:ml-4 mt-4 lg:mt-3 '>
                Design amazing digital experiences that create more happy in the world.
            </p>
        </div>
    );
};

export default FooterLogo;