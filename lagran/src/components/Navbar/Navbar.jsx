import { Link } from 'react-router-dom';
import style from './Navbar.module.scss'

function Navbar () {

    const navbar = [ 
        {text:'Мониторинг транспорта', link:"/Navigations"},
        {text:"Тахографы", link:"/Tagh"},
        {text:"Видеонаблюдение", link:'/Video'},
        {text:"Карты Тахографы", link:'/CardTagh'},
        {text:'Датчики', link:"./Sensor"}
    
    ]

    return(
        <div className={style.NAVBAR}>
            {navbar.map((obj, i) => (
                <Link style={{listStyleType:'none', textDecoration:'none', color:"#000000",fontWeight:600,}} to={obj.link}>
                    <li key={i}>{obj.text}</li>
                </Link>
            ))}
        </div>
    )
}

export default Navbar;