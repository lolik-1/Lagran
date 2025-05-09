import Slider from "react-slick";
import React from "react";
import { useStore } from "effector-react";

import {
  $ActiveTabFuel,
  $nameadvantages,
  $namedescription,
  $namefeatures,
  $Tempadvantages,
  $Tempdescription,
  $Tempfeatures,
  SetActiveTabFuel,
} from "./Store";
import { $ActiveTabTemp, SetActiveTabTemp } from "./Store";
import style from "./Sensor.module.scss";

function SensorFuel() {
  const ActiveTab = useStore($ActiveTabFuel);
  const features = useStore($namefeatures);
  const description = useStore($namedescription);
  const advantages = useStore($nameadvantages);

  const renderContent = () => {
    if (ActiveTab === "features") {
      return (
        <div>
          {features.map((obj) => (
            <p>{obj.name}</p>
          ))}
        </div>
      );
    } else if (ActiveTab === "description") {
      return (
        <div>
          {description.map((obj, i) => (
            <div className={style.DESCRIPTION}>
              <p>
                {obj.text}
                {obj.indicators}
              </p>
            </div>
          ))}
        </div>
      );
    } else if (ActiveTab === "advantages") {
      return (
        <div>
          <p style={{ fontWeight: "600" }}>
            <p>Преимущества датчика ТД-150 BLE</p>
          </p>
          <ul>
            {advantages.map((obj, i) => (
              <div>
                <li className={style.LI}>{obj.text}</li>
              </div>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className={style.SENSOR_FUEL}>
      <img
        width={300}
        height={300}
        src="./img/devices/SensorFuel.png"
        alt="img"
      ></img>
      <div className={style.FEATURE}>
        <p className={style.TITLE_FUEL}>Датчик уровня топлива</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "10px 0px",
          }}
        >
          <button onClick={() => SetActiveTabFuel("features")}>
            {" "}
            Описание
          </button>
          <button onClick={() => SetActiveTabFuel("description")}>
            {" "}
            Характеристики
          </button>
          <button onClick={() => SetActiveTabFuel("advantages")}>
            Преимущества
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

function SensorTemp() {
  const ActiveTab = useStore($ActiveTabTemp);
  const features = useStore($Tempfeatures);
  const description = useStore($Tempdescription);
  const advantages = useStore($Tempadvantages);

  const RenderContent = () => {
    if (ActiveTab === "features") {
      return (
        <>
          {features.map((obj, i) => (
            <p key={i}>
              {obj.text}
              {obj.advantages}
            </p>
          ))}
        </>
      );
    } else if (ActiveTab === "description") {
      return (
        <>
          {description.map((obj, i) => (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <p key={i}>
                {obj.text}
                {obj.indicators}
              </p>
            </div>
          ))}
        </>
      );
    } else if (ActiveTab === "advantages") {
      return (
        <>
          {advantages.map((obj, i) => (
            <ul style={{ paddingLeft: "20px" }}>
              <li key={i}>{obj.text}</li>
            </ul>
          ))}
        </>
      );
    }
  };

  return (
    <div className={style.SENSOR_TEMP}>
      <img
        width={300}
        height={300}
        src="./img/devices/SensorTemp.png"
        alt="img"
      ></img>
      <div className={style.FEATURE}>
        <p style={{ fontSize: "24px", fontWeight: "600", padding: "10px 0px" }}>
          Датчик Температуры ADM35
        </p>
        <div style={{ padding: "10px 0px", display: "flex", gap: "10px" }}>
          <button onClick={() => SetActiveTabTemp("features")}>Описание</button>
          <button onClick={() => SetActiveTabTemp("description")}>
            Характеристики
          </button>
          <button onClick={() => SetActiveTabTemp("advantages")}>
            Преимущества
          </button>
        </div>
        {RenderContent()}
      </div>
    </div>
  );
}

function Sensor() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 23434000,
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
    <div className={style.SENSOR_CONATINER}>
      <p className={style.TITLES}>Датчики</p>
      <div className={style.CONTAINER}>
        <Slider {...settings}>
          <SensorFuel />
          <SensorTemp />
        </Slider>
      </div>
    </div>
  );
}

export default Sensor;
