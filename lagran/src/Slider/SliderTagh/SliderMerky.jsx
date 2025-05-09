import style from "./SliderMerky.module.scss"

function SliderMerky () {
    return(
        <div className={style.MERKY_CONTAINER}>
            <img width={400} height={300} src="./img/devices/Merky.png" alt="AtolSmartIMG"></img>
            <div>
                <p style={{fontSize:'20px', fontWeight:'600'}}>Тахограф Меркурий ТА-001</p>
                <p>Характеристики: </p>
                <ul>
                    <li>Наличие СКЗИ: Встроенный модуль НКМ</li>
                    <li>Потребляемая мощность, не более: 15 Вт</li>
                    <li>Навигационная система: ГЛОНАСС/GPS</li>
                    <li>Повышенная виброустойчивость</li>
                    <li>Температурный режим -40…+70</li>
                    <li>Габариты, мм: 210х190х65</li>
                    <li>вибрация с амплитудой 10 мм при частоте, Гц:11</li>
                </ul>
            </div>
        </div>
    )
}

export default SliderMerky;