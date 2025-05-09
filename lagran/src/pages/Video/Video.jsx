import Slider from "react-slick";
import style from "./Video.module.scss"
import React from "react";
import { useStore } from "effector-react";
import { useState } from "react";
import { $ActiveTabCam, SetActiveCam, $ActiveTabDVR, SetActiveDVR} from "./Store";




const Cam = () => {

    const ActiveTab = useStore($ActiveTabCam)

    const RenderConectCam = () => {
        if (ActiveTab === 'features') {
            return (
                <div>
                    <p>Антивандальная AHD камера CARVIS MC-404IR разработана специально для применения в автотранспорте и обладает высокими техническими характеристиками, обеспечивающими надежную работу в условиях эксплуатации на транспорте. Камера оснащена чувствительным CMOS сенсором с разрешением Full HD (1920×1080), что позволяет получать видеоизображение высокого качества и детализированности.</p>
                </div>
            )
        }
        else if (ActiveTab === 'description') {

            const description = [
                { text: 'Тип камеры:', info: ' Автомобильная, антивандальная' },
                { text: 'Матрица:', info: ' 1/2,9" CMOS GC2053+FH8536H' },
                { text: 'Разрешение:', info: ' 2 Mpx (1080P)' },
                { text: 'Количество активных пикселей:', info: ' 1920×1080' },
                { text: 'Объектив, мм:', info: ' 2,8/3,6' },
                { text: 'Угол обзора:', info: ' 100° (2,8), 80° (3,6)' },
                { text: 'Видеовыход:', info: ' Авиационный интерфейс (4-pin), AHD' },
                { text: 'Аудиовыход:', info: ' Нет' },
                { text: 'Максимальное энергопотребление, мА:', info: ' 170' },
            ]

            return (
                <div>
                    {description.map((obj) => (
                        <div className={style.CAM_DESCRIPTION}>
                            <p>{obj.text}{obj.info}</p>
                            
                        </div>
                    ))}
                </div>
            )
        }

        else if (ActiveTab === 'advantages'){
            return(
                <div>
                    <p>Камера снабжена встроенной ИК-подсветкой с дальностью действия до 10 метров. Корпус соответствует стандарту защиты от попадания внутрь влаги и пыли IP68. Обладает небольшими размерами и удобным креплением, что позволяет устанавливать данную камеру на любой поверхности. Напряжение питания камеры 12В±3V.</p>
                </div>
            )
        } 
    }

    return (
        <div className={style.CAM_CONATINER}>
            <img  src="./img/devices/Carvis.png" alt="img"></img>
            <div className={style.CAM}>
                <p className={style.CAM_TITLE}>Камера CARVIS MC-404IR</p>
                <div className={style.CAM_NAVBAR}>
                    <button onClick={() => SetActiveCam('features')}> Описание</button>
                    <button onClick={() => SetActiveCam('description')}> Характеристики</button>
                    <button onClick={()=> SetActiveCam('advantages')}>Преимущества</button>
                </div>
                {RenderConectCam()}
            </div>
        </div>
    )
}

const DVR = () =>{

    const ActiveTab = useStore($ActiveTabDVR)

    const RenderConectDVR = () =>{

        if (ActiveTab === 'features') {
            return(
                <div>
                    <p>Автомобильный видеорегистратор CARVIS MD-444SD Lite — это функциональное устройство, которое позволяет осуществлять наблюдение и запись видео в автомобиле. Регистратор поддерживает подключение до 4 аналоговых камер видеонаблюдения форматов AHD, TVI, CVI, а также до 4 HD (720p) или 4 Full HD (1080p) камер. Благодаря гибридному режиму работы, вы можете комбинировать аналоговые и HD камеры в различных сочетаниях.</p>
                </div>
            )
        }
        else if (ActiveTab === 'description'){

            const description = [
                {text:'Стандарт видео:', info:'	PAL, NTSC'},
                {text:'Сжатие:', info:'H.264, H.265'},
                {text:'Разрешение видео (общая частота кадров):', info:'4×CIF/D1/960H/720P/1080Р (60 кадр/с)'},
                {text:'Режим:', info:'4×AHD/TVI/CVI/Аналог (1080P) камеры - поканальное переключение'},
                {text:'Скорость цифрового потока видео:', info:'216 кбит/с до 4096 Мбит/с'},
                {text:'Носитель данных:', info:'SD карта до 1 Тб (не идет в комплекте)'},
                {text:'Видеовход:', info:'	4 - авиационный интерфейс'},
                {text:'Вход электропитания:', info:'DC 8 – 36 В'},
                {text:'Размер, мм:', info:'118×141×31'}
            ]

            return(
                <div>
                    {description.map((obj) => (
                        <div className={style.DVR_DESCRIPTION}>
                            <p>{obj.text} {obj.info}</p>
                        </div>
                    ))}
                </div>
            )
        }
        else if (ActiveTab === 'advantages') {
            return(
                <div>
                    <p>Четырехканальный автомобильный регистратор CARVIS MD-444SD Lite идеально подходит для установки на различные типы транспортных средств, включая спецтехнику, строительную технику, сельскохозяйственные машины, автошколы и другой узкоспециализированный транспорт.</p>
                </div>
            )
        }

    }

    return(
        <div className={style.DVR_CONATINER}>
        <img  src="./img/devices/VDR.png" alt="img"></img>
            <div className={style.DVR}>
                <p className={style.DVR_TITLE}>Видеорегистратор Carvis MD-444SD Lite</p>
                <div className={style.DVR_NAVBAR}>
                    <button onClick={() => SetActiveDVR('features')}> Описание</button>
                    <button onClick={() => SetActiveDVR('description')}> Характеристики</button>
                    <button onClick={()=> SetActiveDVR('advantages')}>Преимущества
                    </button>
                </div>
                {RenderConectDVR()}
            </div>
    </div>
    )
}



const InstallationVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const OpenImg = (obj) => {
        setSelectedImage(obj.img);
        setIsOpen(true);
    };
    const CloseImg = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    const ImgPhoto = [
        { img: './img/Slider/VideoSlider/First.jpg', alt: 'img' },
        { img: './img/Slider/VideoSlider/All.jpg', alt: 'img' },
        { img: './img/Slider/VideoSlider/Admin.jpg', alt: 'img' },
    ];

    const WindowStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    const ButtonStyle = {
        position: 'absolute',
        top: '20px',
        right: '30px',
        color: '#fff',
        fontSize: '30px',
        cursor: 'pointer',
    };
    
    const ImageStyles = {
        maxWidth: '60%',
        maxHeight: '60%',
    };

    return (
        <div style={{ display: 'flex', alignItems: "center", width: '600px', padding: "30px 0px", gap:'20px' }}>
            <div style={{ display: 'flex', justifyContent:'center', gap: '10px', width: '750px', flexWrap: 'wrap' }}>
                {ImgPhoto.map((obj, index) => (
                    <img
                        key={index}
                        onClick={() => OpenImg(obj)}
                        style={{ borderRadius: "10px", width: '100px', height: "100px", cursor: 'pointer' }}
                        src={obj.img}
                        alt={obj.alt}
                    />
                ))}
            </div>
            <p style={{ fontSize: '18px', fontWeight: '600' }}>
                Перед началом монтажных работ все оборудование чательно настраивается и проверяется.
            </p>

            {isOpen && (
                <div style={WindowStyles} onClick={CloseImg}>
                    <span className="close" onClick={CloseImg} style={ButtonStyle}>&times;</span>
                    <img src={selectedImage} alt="Large view" style={ImageStyles} />
                </div>
            )}
        </div>
    );
};




function Video() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className={style.VIDEO_CONTAINER}>
            <p className={style.TITLE}>Видеонаблюдение</p>
            <div className={style.CONTAINER}>
                <Slider {...settings}>
                    <Cam/>
                    <DVR/>
                </Slider>
            </div>
            <p className={style.TITLE}>Мы занимаемся установкой видеонаблюдения</p>
            <div style={{backgroundColor:"white", margin:'0px 0px 10px 0px', display:'flex', justifyContent:'center'}}>
                <InstallationVideo/>
            </div>
        </div>
    )
}

export default Video;