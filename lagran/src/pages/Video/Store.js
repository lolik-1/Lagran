import { createStore, createEvent } from "effector";


export const SetActiveDVR = createEvent();
export const $ActiveTabDVR = createStore('features')
    .on(SetActiveDVR, (_, tab) => tab)


export const SetActiveCam = createEvent();
export const $ActiveTabCam = createStore('features')
    .on(SetActiveCam, (_, tab) => tab)

export const $DescriptionCam =  createStore([
    { text: 'Тип камеры:', info: ' Автомобильная, антивандальная' },
    { text: 'Матрица:', info: ' 1/2,9" CMOS GC2053+FH8536H' },
    { text: 'Разрешение:', info: ' 2 Mpx (1080P)' },
    { text: 'Количество активных пикселей:', info: ' 1920×1080' },
    { text: 'Объектив, мм:', info: ' 2,8/3,6' },
    { text: 'Угол обзора:', info: ' 100° (2,8), 80° (3,6)' },
    { text: 'Видеовыход:', info: ' Авиационный интерфейс (4-pin), AHD' },
    { text: 'Аудиовыход:', info: ' Нет' },
    { text: 'Максимальное энергопотребление, мА:', info: ' 170' },
])

export const $DescriptionDVR = createStore([
    {text:'Стандарт видео:', info:'	PAL, NTSC'},
    {text:'Сжатие:', info:'H.264, H.265'},
    {text:'Разрешение видео (общая частота кадров):', info:'4×CIF/D1/960H/720P/1080Р (60 кадр/с)'},
    {text:'Режим:', info:'4×AHD/TVI/CVI/Аналог (1080P) камеры - поканальное переключение'},
    {text:'Скорость цифрового потока видео:', info:'216 кбит/с до 4096 Мбит/с'},
    {text:'Носитель данных:', info:'SD карта до 1 Тб (не идет в комплекте)'},
    {text:'Видеовход:', info:'	4 - авиационный интерфейс'},
    {text:'Вход электропитания:', info:'DC 8 – 36 В'},
    {text:'Размер, мм:', info:'118×141×31'}
])

export const $InstallationVideo = createStore([
    { img: './img/Slider/VideoSlider/First.jpg', alt: 'img' },
    { img: './img/Slider/VideoSlider/All.jpg', alt: 'img' },
    { img: './img/Slider/VideoSlider/Admin.jpg', alt: 'img' },
])
    
    