import { useEffect, useState } from "react";
import NavItem from "../../Componenets/NavItem";
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '/assest/logo.png'


const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
    const [showNav,setShowNav] = useState(true)
    useEffect(()=>{
        const handleOnClick =()=>{
            const offset = window.scrollY
            if(offset<15){
                setShowNav(true)

            }
            if(offset>5){
                setShowNav(false)
            }
            if(offset>500){
                setShowNav(true)
            }
         
         
        }

        window.addEventListener("scroll",handleOnClick)
        return()=>{
            window.removeEventListener("scroll",handleOnClick)
        }

    },[])


    return (
        <div className={`w-full h-auto sticky top-0  z-[10000] ${showNav?"translate-y-0":"-translate-y-full"} transition-transform duration-500 ease-in-out`}>
            {/* navbar for lg screen */}
            <div className={`hidden lg:grid grid-cols-3 items-center py-4 px-[112px] bg-[rgba(236,245,255,1)] w-full sticky ${showNav?"":""} top-0 z-[100] transition-transform duration-500 ease-in-out delay-200`}>
                {/* navLink */}
                <div className="">
                    <NavItem/>
                </div>
                {/* logo */}
                <div className="">
                    <img src={logo} alt="logo" className="w-14 mx-auto" />
                </div>
                {/* singIn button */}
                <div className="flex justify-end">
                    <button className="sigInButton" >Sing In</button>
                </div>
            </div>

            {/* navbar for sm screen */}
            <div className="">
            <div className="lg:hidden z-50 flex items-center justify-between px-2 bg-[rgba(236,245,255,1)] py-2">
            {/* logo */}
            <div className="">
                    <img src={logo} alt="logo" className="w-10 mx-auto" />
                </div>
            <div>
                <button onClick={()=>setShowMenu(!showMenu)}>
                        {
                            !showMenu && <RxHamburgerMenu/>
                        }
                </button>
            </div>
            {/* show menu */}
            {
                showMenu && <NavItem setShowMenu={setShowMenu} showMenu={showMenu}/>
            }
            </div>
            </div>
        </div>
    );
};

export default Navbar;