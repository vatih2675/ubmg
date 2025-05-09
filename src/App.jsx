import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Menu } from "./constants/Data";
import { Pimpinan, Testimonial } from "./constants/Home";
import { useState } from "react";
import Karir from "./pages/Karir";
import Kukis from "./pages/Kukis";
import Bantuan from "./pages/Bantuan";
import Faq from "./pages/Faq";

export default function App() {
  const [menu, setMenu] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(null)
  function changeMenuHome(){
    setMenuOpen(null)
    setSubMenuOpen(null)
  }
  function changeMenu(index){
    setMenu(index)
    changeMenuOpen();
  }
  function changeMenuOpen(){
    setMenuOpen(!menuOpen)
  }
  function changeSubMenuOpen(link){
    setSubMenuOpen(link)
    changeMenuOpen();
  }

  return (
    <BrowserRouter>
      <Header menu={menu} menuOpen={menuOpen} subMenuOpen={subMenuOpen} changeMenuHome={changeMenuHome} changeMenu={changeMenu} changeMenuOpen={changeMenuOpen} changeSubMenuOpen={changeSubMenuOpen} />
      <Routes>
        <Route path={"/"} element={<Home pimpinan={Pimpinan} testimonial={Testimonial} />} />
        {Menu.map(({sub}) => (
          <>
            {sub.map(({link, element}, index) => (
              <Route key={index} path={link} element={element} />
            ))}
          </>
        ))}
        <Route path={"career"} element={<Karir />} />
        <Route path={"cookies"} element={<Kukis />} />
        <Route path={"help"} element={<Bantuan />} />
        <Route path={"faq"} element={<Faq />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}