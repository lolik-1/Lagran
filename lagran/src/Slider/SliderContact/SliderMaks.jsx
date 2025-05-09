function SlideMaks () {
    return(
        <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center',gap:'10px'}}>
            <p style={{fontSize:"24px", fontWeight:'600', textAlign:'center'}}>Инженер</p>
            <img style={{borderRadius:"50%"}} width={300} height={300} src="./img/user/avtomesh.jpg" alt="img"></img>
            <div style={{display:"flex", flexDirection:'column', alignItems:'center',gap:'5px'}}>
                <p>Максимов Максим Максимович</p>
                <p>8(3435)33-44-55</p>  
            </div>
        </div>  
    )
}

export default SlideMaks;