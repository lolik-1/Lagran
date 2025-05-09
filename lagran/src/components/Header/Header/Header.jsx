import {Link} from 'react-router-dom';
import style from './Header.module.scss'



function Header () {

    const info_header = ['+79206729160', '+7(3435)33-44-55', 'lagran_nt@mail.ru']
    const navbar = [
 
        { text: 'О нас', link: '/About' },
        { text: 'Контакты', link: '/Contact' },
        
      ];


    return(
        <div className={style.HEADER}>  
            <div className={style.WRAPER_HEADER}>
                <div className={style.LOGO}>
                    <Link to='/'>Lagran</Link>
                </div>
                <div className={style.INFO_HEADER}>
                    {info_header.map((obj,i) => (
                        <ul>
                            <li key={i}>{obj}</li>
                        </ul>
                    ))}
                </div>
                <div className={style.NAVBAR}>
                    {navbar.map((obj, i) =>(
                        <ul>
                            <Link key={i} style={{ textDecoration: 'none' , color: 'black'}} to={obj.link}>{obj.text}</Link>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header;