import { createStore, createEvent } from "effector";


export const SetActiveTabFuel = createEvent();
export const $ActiveTabFuel = createStore('features')
    .on(SetActiveTabFuel, (_, tab) => tab)

export const SetActiveTabTemp = createEvent();
export const $ActiveTabTemp = createStore('features')
    .on(SetActiveTabTemp, (_, tab) => tab)


export const $namefeatures = createStore([
    {name:'Проверенный временем датчик в новом корпусе с возможностью настройки и передачи данных по технологии Bluetooth Low Energy ( BLE)'  },
    {name:'«Эскорт ТД-150 BLE» – это высокоточный емкостной датчик уровня топлива (ДУТ), который используется для контроля за расходом, заправками, сливами и хищениями топлива на всех видах транспортных средств, а также стационарных емкостях.'}
])    

export const $namedescription = createStore ([
    {text:<b>Напряжение питания:    </b>, indicators:'7 … 80 В*¹'},
    {text:<b>Потребляемый ток, не более 1:    </b>,indicators:'30 мА'},
    {text:<b>Погрешность измерения в рабочей области:    </b>,indicators:'не более 1%'},
    {text:<b>Режимы работы:    </b>,indicators:'цифровой, частотный, аналоговый'},
    {text:<b>Степень защиты оболочки по ГОСТ 14254:    </b>,indicators:'	IP69S'},
    {text:<b>Защита от поражения электрическим током по ГОСТ 12.2.007.0:    </b>,indicators:'класс III'},
    {text:<b>Масса, не более кг:    </b>,indicators:'0,35+0,4хL,где L – длина измерителя в метрах'},
])

export const $nameadvantages = createStore([
    {text:'Помимо цифрового, частотного и аналогового выходных сигналов в данный датчик добавлен и BLE-режим.'},
    {text:'Имеет сертификат взрывозащиты OExiallBT6 X, сертификат СЕ и E-Mark, сертификат Таможенного Союза, сертификат соответствия ГОСТ-Р, сертификат средств измерений.'},
    {text:'Появилась возможность настройки и получения данных через мобильное приложение.'},
])

export const $Tempfeatures = createStore([
    {text:'Беспроводной датчик температуры, освещенности и наличия магнитного поля может использоваться как на автотранспорте при перевозке скоропортящихся продуктов, так и в сельском хозяйстве при выращивании овощных и плодово-ягодных культур.'}
])

export const $Tempdescription = createStore([
    {text:<b>Температурный диапазон,°C:</b>, indicators:'-40 — +85'},
    {text:<b>Точность измерения температуры °C:</b>, indicators:'0,3'},
    {text:<b>Измеряемый диапазон освещенности:</b>, indicators:'0,01 – 83000лк'},
    {text:<b>Интерфейс:</b>, indicators:'BLE 4.0'},
    {text:<b>Степень защиты:</b>, indicators:'IP 65'},
    {text:<b>Размеры, мм:</b>, indicators:'129*68*32'},
    {text:<b>Вес, грамм:</b>, indicators:'105'},
    {text:<b>Сменная батарея:</b>, indicators:'ER14505 '},
    {text:<b>Время работы от батареи:</b>, indicators:'не менее 3-х лет'},
    {text:<b>Количество сохраняемых записей:</b>, indicators:'19700'},
])

export const $Tempadvantages = createStore ([
    {text:'Максимальная дальность передачи по BLR 1000 метров'},
    {text:'Сменный элемент питания'},
    {text:'Герметичный корпус IP-65'},
    {text:'Передача данных по BLE 4.0 до 100 метров'},
    {text:'Контроль параметров с смартфона'},
])