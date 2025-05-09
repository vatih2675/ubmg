import { NavLink } from "react-router-dom";

export default function Head({title}){
  return (
    <section className="relative w-full h-40 bg-gradient-to-l from-cyan-300/20 to-cyan-500/80 p-12 flex justify-between items-center overflow-hidden mask-clip-content">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="w-full text-3xl font-bold text-white text-shadow-md">
          {title}
        </h1>
        <div className="w-full flex justify-start items-center gap-2 text-white">
          <NavLink
            to={"/"}
            className="font-bold hover:underline text-shadow-md"
          >
            Beranda
          </NavLink>
          <i className="bi-arrow-right text-red-500 text-shadow-md"></i>
          <span className="text-shadow-md">{title}</span>
        </div>
      </div>
      <img src="images/logo-border-white.png" alt="UBMG" className="w-25" />
      <img
        src="images/ubmg.jpg"
        alt="UBMG"
        className="absolute w-full left-0 right-0 object-center object-cover -z-1"
      />
    </section>
  );
}