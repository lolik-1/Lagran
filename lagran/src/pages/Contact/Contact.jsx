import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./Contact.module.scss";
import SlideDima from "../../Slider/SliderContact/SliderDima";
import SlideMaks from "../../Slider/SliderContact/SliderMaks";
import SlideNatasha from "../../Slider/SliderContact/SliderNatasha";
import SliderMAil from "../../Slider/SliderContact/SliderMail";
import Map from "../../Maps/Maps";

function Contact() {
  const opentime = [
    { text: "ПН с 9:00 до 18:00 " },
    { text: "ВТ с 9:00 до 18:00 " },
    { text: "СР с 9:00 до 18:00 " },
    { text: "ЧТ с 9:00 до 18:00 " },
    { text: "ПТ с 9:00 до 18:00 " },
    { text: "СБ - ВЫХОДНОЙ" },
    { text: "ВС - ВЫХОДНОЙ" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <div className={style.CONTACT_CONTAINER}>
      <p className={style.TITLE}>Контакты</p>
      <div className={style.CONTAINER}>
        <Slider {...settings}>
          <SlideDima />
          <SlideMaks />
          <SlideNatasha />
          <SliderMAil />
        </Slider>
      </div>
      <div className={style.OPEN}>
        <p
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            margin: "30px 0px 0px 0px",
          }}
        >
          Режим работы
        </p>
        <div className={style.OPEN_TIME}>
          {opentime.map((obj, i) => (
            <li key={i} style={{ listStyleType: "none" }}>
              {obj.text}
            </li>
          ))}
        </div>
      </div>
      <div className={style.ADRESS_CONTAINER}>
        <p style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}>
          Наш Адрес
        </p>
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          г.Нижни тагил, ул.Индустриальаня 4а
        </p>
        <Map />
      </div>
    </div>
  );
}

export default Contact;
