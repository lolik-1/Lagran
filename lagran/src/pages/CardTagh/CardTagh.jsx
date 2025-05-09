import Slider from "react-slick";
import { useStore } from "effector-react";


import style from "./CardTagh.module.scss";
import { $nameCard } from "./Store";

function Card({ Name, infomationCard, SubTitle }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.CARD}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "20px" }}>{Name}</p>
          <img
            width={450}
            height={300}
            className={style.IMGCARD}
            src="./img/Card/Skzi.png"
            alt=""
          ></img>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p style={{ fontWeight: "600", fontSize: "20px" }}>{SubTitle}</p>
          <p className={style.INFOCARD}>{infomationCard}</p>
          <p className={style.MAINDOC}>
            Документы для карты:
            <a className={style.DOCUMENTS} download href="./img/Документы.pdf">
              <img
                width={30}
                height={30}
                className={style.PDF}
                src="./img/UI/pdf.png"
                alt="icons-pdf"
              ></img>
              Документы.pdf
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function CardTagh() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const nameCard = useStore($nameCard);

  return (
    <div className={style.CARD_CONTAINER}>
      <p className={style.TITLE}>Карты Тахографа</p>
      <div className={style.CONTAINER}>
        <Slider {...settings}>
          {nameCard.map((obj, i) => (
            <Card
              Name={obj.Name}
              infomationCard={obj.infomationCard}
              SubTitle={obj.SubTitle}
              key={i}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardTagh;
