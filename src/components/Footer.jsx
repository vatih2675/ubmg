import { NavLink } from "react-router-dom";
import { PenerimaanMahasiswaBaru } from "../constants/Data";

export default function Footer(){
  function openLink(link){
    window.open(link);
  }
  return (
    <footer className="w-full bg-blue-950 text-white">
      <div className="py-10 px-5 gap-5 flex justify-center items-start border-b border-gray-700">
        <div className="w-3/12">
          <h1 className="text-3xl font-bold text-cyan-500 mb-3">Quick Link</h1>
          <NavLink
            to={"e-letter"}
            className="flex justify-start items-center w-full mb-1 gap-1 hover:text-cyan-500 transition-all duration-300"
          >
            <i className="bi-chevron-right text-xs"></i>
            <span>E-Letter</span>
          </NavLink>
          <NavLink
            to={"e-library"}
            className="flex justify-start items-center w-full mb-1 gap-1 hover:text-cyan-500 transition-all duration-300"
          >
            <i className="bi-chevron-right text-xs"></i>
            <span>E-Library</span>
          </NavLink>
          <NavLink
            to={"pmb"}
            className="flex justify-start items-center w-full mb-1 gap-1 hover:text-cyan-500 transition-all duration-300"
          >
            <i className="bi-chevron-right text-xs"></i>
            <span>PMB</span>
          </NavLink>
          <NavLink
            to={"career"}
            className="flex justify-start items-center w-full mb-1 gap-1 hover:text-cyan-500 transition-all duration-300"
          >
            <i className="bi-chevron-right text-xs"></i>
            <span>Career</span>
          </NavLink>
          <NavLink
            to={"aman-ubm"}
            className="flex justify-start items-center w-full gap-1 hover:text-cyan-500 transition-all duration-300"
          >
            <i className="bi-chevron-right text-xs"></i>
            <span>AMAN-UBM</span>
          </NavLink>
        </div>
        <div className="w-3/12">
          <h1 className="text-3xl font-bold text-cyan-500 mb-3">Contact</h1>
          <div className="w-full flex justify-start items-start gap-2 mb-1">
            <i className="bi-geo-alt-fill"></i>
            <span>
              Jl. Prof. Dr. Aloei Saboe, Bone Bolango, Wongkaditi, Gorontalo,
              Indonesia - 96128
            </span>
          </div>
          <div className="w-full flex justify-start items-start gap-2 mb-1">
            <i className="bi-telephone-fill"></i>
            <span>(0435) 834062</span>
          </div>
          <div className="w-full flex justify-start items-start gap-2 mb-1">
            <i className="bi-envelope-at-fill"></i>
            <span>info@ubmg.ac.id</span>
          </div>
          <div className="w-full flex justify-start items-start gap-2">
            <i className="bi-calendar3"></i>
            <div className="flex flex-col w-full">
              <span>Senin-Sabtu: 08.00-16.00</span>
              <span>Jumat & Minggu : Libur</span>
            </div>
          </div>
          <div className="w-full flex justify-start items-start gap-1 mt-3">
            <span onClick={() => openLink("https://twitter.com")} className="rounded-full overflow-hidden w-9 h-9 flex justify-center items-center border border-white text-white transition-all duration-300 hover:bg-white hover:text-cyan-500 cursor-pointer bi-twitter"></span>
            <span onClick={() => openLink("https://facebook.com")} className="rounded-full overflow-hidden w-9 h-9 flex justify-center items-center border border-white text-white transition-all duration-300 hover:bg-white hover:text-cyan-500 cursor-pointer bi-facebook"></span>
            <span onClick={() => openLink("https://youtube.com")} className="rounded-full overflow-hidden w-9 h-9 flex justify-center items-center border border-white text-white transition-all duration-300 hover:bg-white hover:text-cyan-500 cursor-pointer bi-youtube"></span>
            <span onClick={() => openLink("https://linkedin.com")} className="rounded-full overflow-hidden w-9 h-9 flex justify-center items-center border border-white text-white transition-all duration-300 hover:bg-white hover:text-cyan-500 cursor-pointer bi-linkedin"></span>
          </div>
        </div>
        <div className="w-3/12">
          <h1 className="text-3xl font-bold text-cyan-500 mb-3">Galeri</h1>
          <div className="flex justify-start items-start flex-wrap">
            {PenerimaanMahasiswaBaru.map((pmb, index) => (
              <div key={index} className="w-4/12 p-1">
                <img src={"images/galeri/"+pmb.foto} alt={pmb.judul} className="border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/12">
          <h1 className="text-3xl font-bold text-cyan-500 mb-3">AMAN UBM</h1>
          <p className="mb-8">Keamanan Informasi Anda Menjadi Prioritas Dengan <span className="italic">"Anonymous reports"</span></p>
          <NavLink to={"aman-ubm"} className="py-4 px-5 bg-cyan-500 rounded-xl hover:bg-cyan-400 bg:shadow-md transition-all duration-300 font-bold">Lapor</NavLink>
        </div>
      </div>
      <div className="w-full p-12 flex justify-between items-center">
        <p><i className="bi-c-circle"></i> <a href="/" className="font-bold transition-all duration-300 hover:text-cyan-500">UBM</a>, All Right Reserved. Design By <a href="https://ruslansamuel.vercel.app" target="_blank" className="font-bold transition-all duration-300 hover:text-cyan-500">Vatih</a></p>
        <div className="flex justify-center items-center">
          <NavLink to={"/"} className="px-5 transition-all duration-300 hover:text-cyan-500 border-e border-gray-700">Home</NavLink>
          <NavLink to={"cookies"} className="px-5 transition-all duration-300 hover:text-cyan-500 border-e border-gray-700">Cookies</NavLink>
          <NavLink to={"help"} className="px-5 transition-all duration-300 hover:text-cyan-500 border-e border-gray-700">Help</NavLink>
          <NavLink to={"faq"} className="px-5 transition-all duration-300 hover:text-cyan-500">FAQ</NavLink>
        </div>
      </div>
    </footer>
  );
}