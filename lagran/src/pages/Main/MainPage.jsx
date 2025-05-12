import { $MainContent } from './Store'
import {useStore} from 'effector-react'
import style from './MainPage.module.scss'

function MainPage() {

    const ListServices = useStore($MainContent)

    return (
        <div className={style.MAIN_CONTAINER}>
            <p className={style.TITLE}>Мы занимаемся</p>
            <div style={{display:"flex", alignItems:"center", justifyContent:'center', flexWrap:"wrap", gap:"50px", fontSize:"18px", width:'900px', padding:'20px 0px'}}>
                {ListServices.map((obj) => (
                    <div style={{display:'flex',alignItems:'center', gap:"10px"}}>
                        <img style={{border:'2px solid#000000', borderRadius:'10px', padding:'5px'}} width={80} height={80} src={obj.img} alt='Тут пока ничего нет :('></img>
                        <p style={{width:"140px"}}>{obj.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainPage;