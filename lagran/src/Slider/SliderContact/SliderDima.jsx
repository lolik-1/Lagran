function SlideDima () {
    return(
        <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center',gap:'10px'}}>
            <p style={{fontSize:"24px", fontWeight:'600', textAlign:'center'}}>Директор</p>
            <img style={{borderRadius:"50%"}} width={300} height={300} src="./img/user/Dir.jpg" alt="img"></img>
            <div style={{display:"flex", flexDirection:'column', alignItems:'center',gap:'5px'}}>
                <p>Димов Дмитрий Димович</p>
                <p>+79206729160</p>
            </div>
        </div>
    )
}

export default SlideDima   ;