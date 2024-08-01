  import { NavLink } from "react-router-dom";
  import { RxCross2 } from "react-icons/rx";

  const NavItem = ({ setShowMenu, showMenu }) => {
    const navLink = [
      {
        path:'/',
        title: "Home",
      },
      {
        path: "/buy",
        title: "Buy",
      },
      {
        path: "/sell",
        title: "Sell",
      },
      {
        path: "/services",
        title: "Services",
      },
    ];
    return (
      <>
        <div onClick={() => setShowMenu(false)} className=" z-50">
          {/* nav-item for large screen */}
          <ul className="hidden lg:flex  ">
            {navLink.map((d) => (
              <li key={d.title} className="text-lg font-normal mr-5 hover:text-gray-500">
          
                <NavLink 
                className={({isActive})=> isActive ?" text-red-600":""}
                to={d?.path}>{d.title}</NavLink>{" "}
              </li>
            ))}
          </ul>
          {/* nav-item for sm screen */}
          <div className={`lg:hidden bg-[rgba(236,245,255,1)] absolute right-0 top-0 h-screen w-full transform transition-transform ease-linear duration-500 ${
                showMenu ? "translate-x-0" : "translate-x-full pt-16 "
              }`}>
            <ul className="mt-20">
              {navLink.map((d) => (
                <li
                  key={d.title}
                  className="text-lg font-normal mt-3 text-center "
                >
                  {" "}
                  <NavLink to={d.path}>{d.title}</NavLink>{" "}
                </li>
              ))}
              <div className=" ">
                <RxCross2 className="w-full mt-3 text-2xl" />
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default NavItem;
