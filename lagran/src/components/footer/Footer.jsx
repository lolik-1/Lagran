import style from "./Footer.module.scss"

function Footer () {

    const contact = [
        {text:'+79206729160'},
        {text:'+8(3435)33-44-55'},
        {text:"lagran_nt@mail.ru"}
    ]


    return(
        <div className={style.FOOTER_CONTAINER}>
            <div className={style.FOOTER_INFO}>
                <p className={style.FOOTER_LOGO}>Lagran</p>
                <div className={style.FOOTER_ICONS_INFO}>
                    {contact.map((obj, i)=>(
                        <p key={i}>{obj.text}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;