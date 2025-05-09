import style from "./Navigation.module.scss"

function Navigations () {
    return(
        <div className={style.NAVIGATION_CONTAINER}>
            <p className={style.TITLE}>Мониторинг транспорта</p>
            <div className={style.NAVIGATION}>
                <p style={{textAlign:"center"}}>Для Мониторинга транспортных средст мы используем сервер WIALON и LAGRAN.</p>

            </div>
        </div>
    )
}

export default Navigations;