import { NavLink } from "react-router-dom";
import { Menu } from "../constants/Data";

export default function Header(props){
  return (
    <header className="bg-white shadow-md flex justify-between items-center sticky top-0 z-10">
      <NavLink
        to={"/"}
        onClick={props.changeMenuHome}
        className="ms-12 flex justify-center items-center gap-2"
      >
        <img src="images/logo.png" alt="UBMG" className="w-13" />
        <h1 className="font-bold text-cyan-500 text-4xl text-shadow-md">
          UBMG
        </h1>
      </NavLink>
      <nav className="flex justify-center items-center">
        {Menu.map(({ title, sub }, index) => (
          <div
            key={index}
            onClick={() => props.changeMenu(index)}
            className="relative h-18 bg-white flex justify-center items-center gap-2 px-4 cursor-pointer transition-all duration-300"
          >
            <span
              className={
                props.menu == index ? "text-cyan-500" : "hover:text-cyan-500"
              }
            >
              {title}
            </span>
            <i
              className={`bi-chevron-down text-xs font-bold ${
                props.menu == index ? "text-cyan-500" : "hover:text-cyan-500"
              }`}
            ></i>
            <div
              className={`absolute left-0 top-17 ${
                props.menu == index && props.menuOpen
                  ? "w-50 h-fit opacity-100"
                  : "w-50 h-0 opacity-0"
              } bg-white shadow-md overflow-hidden border border-gray-200 transition-all duration-300`}
            >
              {sub.map(({ title, link }, index) => (
                <NavLink
                  to={link}
                  key={index}
                  onClick={() => props.changeSubMenuOpen(link)}
                  className={`block py-1 px-3 hover:bg-gray-200 ${
                    props.subMenuOpen == link ? "font-bold text-cyan-500" : ""
                  } transition-all duration-300`}
                >
                  {title}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
        <NavLink
          to={"https://pmb.ubm.educampus.id/"}
          target="_blank"
          className="h-18 flex justify-center items-center gap-2 px-8 bg-cyan-500 text-white hover:bg-cyan-400 transition-all duration-300"
        >
          Daftar <i className="bi-arrow-right"></i>
        </NavLink>
      </nav>
    </header>
  );
}