import style from "./SliderAtol.module.scss"

function SliderAtol () {
    return(
        <div className={style.ATOL_CONTAINER}>
            <img width={420} height={300} src="./img/devices/AtolSmart.png" alt="AtolSmartIMG"></img>
            <div>
                <p style={{fontSize:'20px', fontWeight:'600'}}>Тахограф AtolDriveSmart</p>
                <p>Характеристики: </p>
                <ul>
                    <li>Блок СКЗИ</li>
                    <li>Модем/GPRS/GSM (опционально)</li>
                    <li>Глонасс и GPS – в соответствии с приказом №36</li>
                    <li>Повышенная виброустойчивость</li>
                    <li>Температурный режим -40…+70</li>
                    <li>Подходит для ТС перевозящих опасные грузы</li>
                    <li>Пониженное электропотребление – 0,08А</li>
                </ul>
            </div>
        </div>
    )
}

export default SliderAtol;