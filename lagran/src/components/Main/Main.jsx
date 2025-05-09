import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes} from "react-router-dom";
import { useLocation } from "react-router-dom";



import style from "./Main.module.scss"
import SlideFura from "../Header/Slide/SlideFura";
import SlideNavigation from "../Header/Slide/SlideNavigarios";
import SlideTagh from "../Header/Slide/SlideTagh";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import CardTagh from "../../pages/CardTagh/CardTagh";
import Video from "../../pages/Video/Video";
import Tagh from "../../pages/Tagh/Tagh";
import Navigations from "../../pages/Navigatio/Navigation";
import MainPage from "../../pages/Main/MainPage";
import Sensor from "../../pages/Sensor/Sensor";



function Main(){

    const location = useLocation();

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      };

    return(
        <div className={style.MAIN_CONTAINER}>
            {location.pathname === "/" && (
                <div style={{padding:"10px 0px 0px 0px"}}>
                    <Slider  {...settings} >
                        <SlideFura/>
                        <SlideNavigation/>
                        <SlideTagh/>
                    </Slider>
                </div>
                )}
                <div className={style.CONTENT}>
                    <Routes>
                        <Route path="/" element={<MainPage/>}></Route>
                    </Routes>
                </div>
        <Routes>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Tagh" element={<Tagh/>}></Route>
          <Route path="/Video" element={<Video/>}></Route>
          <Route path="/CardTagh" element={<CardTagh/>}></Route>
          <Route path="/Navigations" element={<Navigations/>}></Route>
          <Route path="/Sensor" element={<Sensor/>}></Route>
        </Routes>

        </div>
    )
}

export default Main;