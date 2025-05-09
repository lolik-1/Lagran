import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from './Tagh.module.scss'
import SliderAtol from '../../Slider/SliderTagh/SliderAtol';
import SliderMerky from "../../Slider/SliderTagh/SliderMerky";
import SliderAtolX from "../../Slider/SliderTagh/SliderAtolX";




function Tagh () {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
        responsive:[
            {
                breakpoint: 750,
                settings: {
                  slidesToShow:1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
        ]
    };

    return(
        <div className={style.TAGH_CONTAINER}>
            <p className={style.TITLE}>Тахографы</p>
            <div className={style.CONTAINER}>
                <Slider {...settings}>
                    <SliderAtol/>
                    <SliderMerky/>
                    <SliderAtolX/>
                </Slider>
            </div>
        </div>
    )
}

export default Tagh;