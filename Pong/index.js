const containerX=1000;
const containerY=600;
var direccionX=1;
var direccionY=1
window.onload=()=>{
    
    const player1=document.getElementById("player1");
    const player2=document.getElementById("player2");
    
    setInterval(movimientoPelota, 20);
    
    document.body.addEventListener("keydown", (event)=> {
        if (event.key == "w" || event.key == "W") {
            let PlayerY=player1.getAttribute("y")+1;
            player1.setAttribute("y",PlayerY);
        }
      });
}


function movimientoPelota(){
    const pelota=document.getElementById("pelota");
    const pelotaX=parseInt(pelota.getAttribute("cx"));
    const pelotaY=parseInt(pelota.getAttribute("cy"));
    const velocidadX=5;
    const velocidadY=3;
    if(pelotaX <= 15){
       direccionX=1
    }else if(pelotaX>=(containerX-15)){
       direccionX=-1
    }
    if(pelotaY <= 15){
        direccionY=1
    }else if(pelotaY>=(containerY-15)){
       direccionY=-1
    }

    const nuevaX=pelotaX+velocidadX*direccionX;
    const nuevaY=pelotaY+velocidadY*direccionY;
    pelota.setAttribute("cx",nuevaX);
    pelota.setAttribute("cy",nuevaY);

}
