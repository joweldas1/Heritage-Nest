import { useState } from "react";
import NavItem from "../../Componenets/NavItem";
import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)

    return (
        <div>
            {/* navbar for lg screen */}
            <div className="hidden lg:grid grid-cols-3 py-4 px-[112px] bg-[rgba(236,245,255,1)]">
                {/* navLink */}
                <div className="">
                    <NavItem/>
                </div>
                {/* logo */}
                <div className="">
                    <h1 className="text-2xl font-semibold text-center">Logo</h1>
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
            <div><p className="text-2xl">logo</p></div>
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