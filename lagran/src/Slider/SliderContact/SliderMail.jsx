function SliderMAil () {
    return(
        <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center',gap:'10px'}}>
        <p style={{fontSize:"24px", fontWeight:'600', textAlign:'center'}}>Почта</p>
        <img style={{borderRadius:"50%"}} width={300} height={300} src="./img/user/Mail.png" alt="img"></img>
        <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <p>lagran_nt@mail.ru</p>  
        </div>
    </div>  
    )
}

export default SliderMAil;